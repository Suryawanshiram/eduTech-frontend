import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI";
import { getInstructorData } from "../../../../services/operations/profileAPI";
import InstructorChart from "./InstructorChart";
import { Link } from "react-router-dom";

export default function Instructor() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const instructorApiData = await getInstructorData(token);
      const result = await fetchInstructorCourses(token);

      if (instructorApiData?.length) setInstructorData(instructorApiData);
      if (result) setCourses(result);

      setLoading(false);
    })();
  }, [token]);

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr?.totalAmountGenerated,
    0
  );

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr?.totalStudentsEnrolled,
    0
  );

  return (
    <div className="p-6 text-white space-y-8">
      {/* Greeting */}
      <div className="pt-10 px-5">
        <h1 className="text-3xl font-bold text-richblack-5">
          Hi {user?.firstName} 👋
        </h1>
        <p className="text-richblack-200 text-base mt-1">
          Let's start something new
        </p>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : courses.length > 0 ? (
        <>
          {/* Chart + Stats */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Chart */}
            <div className="flex-1 bg-richblack-800 rounded-2xl p-6 shadow-md">
              {totalAmount > 0 || totalStudents > 0 ? (
                <InstructorChart courses={courses} />
              ) : (
                <div className="text-center py-20">
                  <p className="text-lg font-bold text-richblack-5">
                    Not Enough Data To Visualize
                  </p>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="w-full lg:w-[280px] bg-richblack-800 rounded-2xl p-6 space-y-4 shadow-md">
              <h2 className="text-xl font-semibold text-richblack-5">
                Statistics
              </h2>
              <div>
                <p className="text-sm text-richblack-200">Total Courses</p>
                <p className="text-2xl font-bold text-richblack-50">
                  {courses.length}
                </p>
              </div>
              <div>
                <p className="text-sm text-richblack-200">Total Students</p>
                <p className="text-2xl font-bold text-richblack-50">
                  {totalStudents}
                </p>
              </div>
              <div>
                <p className="text-sm text-richblack-200">Total Income</p>
                <p className="text-2xl font-bold text-richblack-50">
                  ₹{totalAmount}
                </p>
              </div>
            </div>
          </div>

          {/* Your Courses Section */}
          <div className="bg-richblack-800 rounded-2xl p-6 shadow-md mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-richblack-5">
                Your Courses
              </h3>
              <Link to="/dashboard/my-courses">
                <p className="text-sm font-medium text-yellow-50 hover:underline">
                  View All
                </p>
              </Link>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course) => (
                <div
                  key={course._id}
                  className="bg-richblack-900 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="h-[180px] w-full object-cover"
                  />
                  <div className="p-4 space-y-1">
                    <p className="text-sm font-semibold text-richblack-5 truncate">
                      {course?.courseName}
                    </p>
                    <div className="flex items-center text-xs text-richblack-300 gap-2">
                      <p>{course?.studentsEnrolled?.length || 0} students</p>
                      <span>|</span>
                      <p>₹{course?.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // No Courses Case
        <div className="bg-richblack-800 rounded-2xl py-16 px-6 text-center shadow-md">
          <p className="text-2xl font-semibold text-richblack-5 mb-2">
            You have not created any courses yet
          </p>
          <Link to="/dashboard/add-course">
            <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition">
              Create a Course
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
