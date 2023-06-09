import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getRequest = async (url) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}${url}`,
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (value) => {
  try {
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/login`, {
        username: "admin",
        ...value,
      })
      .then((res) => {
        Cookies.set("token", res.data.data.token);
      });
  } catch (error) {
    console.error(error);
  }
};

export const postRequest = async (url, value) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}${url}`,
      value,
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateRequest = (url, value) => {
  try {
    const res = axios.put(
      `${import.meta.env.VITE_BASE_URL}${url}`,
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
      `${import.meta.env.VITE_BASE_URL}${url}`,
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
