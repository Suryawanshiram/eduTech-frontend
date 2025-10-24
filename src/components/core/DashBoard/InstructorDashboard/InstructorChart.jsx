import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie, Bar, Line } from "react-chartjs-2";

Chart.register(...registerables);

export default function InstructorChart({ courses }) {
  const [currChart, setCurrChart] = useState("pie"); // pie | bar | line

  // Generate random colors
  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      colors.push(color);
    }
    return colors;
  };

  // Prepare labels and datasets
  const labels = courses.map((course) => course.courseName);
  const studentData = courses.map((course) => course.totalStudentsEnrolled);
  const incomeData = courses.map((course) => course.totalAmountGenerated);

  // Reusable chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
        },
      },
    },
    scales:
      currChart !== "pie"
        ? {
            x: {
              ticks: { color: "#ccc" },
              grid: { color: "#333" },
            },
            y: {
              ticks: { color: "#ccc" },
              grid: { color: "#333" },
            },
          }
        : {},
  };

  // Chart datasets for Pie, Bar, Line
  const chartData = {
    labels,
    datasets: [
      {
        label: "Students Enrolled",
        data: studentData,
        backgroundColor: generateRandomColors(courses.length),
        borderColor: "#ffffff",
        borderWidth: 1,
        tension: 0.3,
      },
      {
        label: "Income Generated",
        data: incomeData,
        backgroundColor: generateRandomColors(courses.length),
        borderColor: "#facc15",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Choose chart type dynamically
  const renderChart = () => {
    switch (currChart) {
      case "pie":
        return <Pie data={chartData} options={options} />;
      case "bar":
        return <Bar data={chartData} options={options} />;
      case "line":
        return <Line data={chartData} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-md bg-richblack-800 p-6 text-white">
      <p className="text-lg font-bold">Course Insights</p>
      <div className="space-x-3 font-semibold">
        {["pie", "bar", "line"].map((type) => (
          <button
            key={type}
            onClick={() => setCurrChart(type)}
            className={`rounded-md p-1 px-4 transition-all duration-200 ${
              currChart === type
                ? "bg-richblack-700 text-yellow-50"
                : "text-yellow-400 hover:text-yellow-100"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className="relative mx-auto aspect-square h-[400px] w-full">
        {renderChart()}
      </div>
    </div>
  );
}
