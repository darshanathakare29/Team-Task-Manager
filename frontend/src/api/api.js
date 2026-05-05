const BASE_URL = "http://localhost:8081/api";

export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const signup = async (data) => {
  await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getProjects = async (token) => {
  const res = await fetch(`${BASE_URL}/projects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const createProject = async (token, data) => {
  const res = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const createTask = async (token, projectId, userId, data) => {
  const res = await fetch(`http://localhost:8081/api/tasks/${projectId}/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getTasks = async (token, projectId) => {
  const res = await fetch(`http://localhost:8081/api/tasks/project/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
export const updateTask = async (token, taskId, data) => {
  const res = await fetch(`http://localhost:8081/api/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};