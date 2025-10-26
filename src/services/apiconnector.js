import axios from "axios";

// Axios instance configured for your backend
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // e.g., https://edutech-platform-y06w.onrender.com/api/v1
  withCredentials: true, // important for sending/receiving cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic API connector function
export const apiConnector = (
  method,
  url,
  bodyData = null,
  headers = {},
  params = null
) => {
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData,
    headers: headers,
    params: params,
  });
};

// import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//   return axiosInstance({
//     method: `${method}`,
//     url: `${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers : null,
//     params: params ? params : null,
//   });
// };
