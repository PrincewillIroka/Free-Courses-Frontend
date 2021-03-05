import { API_URL } from "../config";

export const searchCourses = ({ title, limit, pageNumber }) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}/courses?title=${title}limit=${limit}&pageNumber=${pageNumber}`;
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
