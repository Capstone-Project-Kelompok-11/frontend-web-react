import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const fetcher = async (url) => {
  try {
    const res = await axios.get(`https://skfw.net/${url}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLogin = (value) => {
  try {
    const res = axios
      .post(`https://skfw.net/api/v1/users/login`, {
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
export const fetchPost = async (url, value) => {
  try {
    const res = await axios.post(`https://skfw.net/${url}`, value, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchUpdate = (url, value) => {
  try {
    const res = axios.put(`https://skfw.net/${url}`, value, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchDelete = async (url) => {
  try {
    const res = await axios.delete(`https://skfw.net/${url}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
