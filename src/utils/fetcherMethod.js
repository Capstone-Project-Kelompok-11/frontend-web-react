import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getResource = async (url) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}${url}`,
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = (value) => {
  try {
    const res = axios
      .post(`${import.meta.env.VITE_API_URL}api/v1/users/login`, {
        username: "admin",
        ...value,
      })
      .then((res) => {
        Cookies.set("token", res.data.data.token);
        return res.data.data.token;
      });
  } catch (error) {
    console.error(error);
  }
};
export const sendPostRequest = async (url, value) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}${url}`,
      value,
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const updateResource = (url, value) => {
  try {
    const res = axios.put(
      `${import.meta.env.VITE_API_URL}${url}`,
      value,
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const deleteRequest = async (url) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_API_URL}${url}`,
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
