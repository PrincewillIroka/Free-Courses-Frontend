
export const searchCourses = ({ API_URL, title, limit, pageNumber }) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}/courses/search?title=${title}&limit=${limit}&pageNumber=${pageNumber}`;
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

export const getCoursesByCategory = ({ API_URL, categoryId, limit, pageNumber }) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}/courses?categoryId=${categoryId}&limit=${limit}&pageNumber=${pageNumber}`;
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

export const getCourses = ({ API_URL, limit, pageNumber }) => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}/courses?pageNumber=${pageNumber}&limit=${limit}`;
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
