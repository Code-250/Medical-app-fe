import axios from "axios";
import { SIGNUP_AUTH, LOGIN_AUTH } from "./authentication/types";

export const SignupAction =
  ({ data }) =>
  async (dispatch) => {
    dispatch({ type: `${SIGNUP_AUTH}_PENDING` });
    try {
      const response = await axios.get(
        `http://localhost:8080/java_servlet_app/user/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            password: data.password,
            age: data.age,
            phone: data.phone,
            gender: data.gender,
            role: data.role,
          },
        }
      );
      await dispatch({
        type: `${SIGNUP_AUTH}_SUCCESS`,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: `${SIGNUP_AUTH}_REJECTED`, payload: error });
      console.log(error);
    }
  };
export const LoginAction =
  ({ data }) =>
  async (dispatch) => {
    console.log(data, "here");
    dispatch({ type: `${LOGIN_AUTH}_PENDING` });
    try {
      const response = await axios.get(
        `http://localhost:8080/java_servlet_app/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
          data: {
            userName: data.userName,
            password: data.password,
          },
        }
      );

      console.log(response, "data here");
      await dispatch({ type: `${LOGIN_AUTH}_SUCCESS`, payload: response.data });
    } catch (error) {
      dispatch({ type: `${LOGIN_AUTH}_REJECTED`, payload: error });
      console.log(error);
    }
  };
