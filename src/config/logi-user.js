import { request } from "./store"; 

const loginUser = async (username, password) => {
  try {
    const response = await request.post("/login", { username, password });
    console.log(response.data);
  } catch (error) {
    console.error("Login xatosi:", error);
  }
};
