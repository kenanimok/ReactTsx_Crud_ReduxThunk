// import { history } from "../index";
import {
    OK,
    LOGIN_FAILED,
    LOGIN_FETCHING,
    LOGIN_SUCCESS,
    server,
  } from "../Constants";
import { LoginResult } from "../types/authen.type";
  import { User } from "../types/user.type";
  import { httpClient } from "../utils/httpclient";
  
  export const setLoginFetchingToState = () => ({
    type: LOGIN_FETCHING,
  });
  
  export const setLoginSuccessToState = (payload: any) => ({
    type: LOGIN_SUCCESS,
    payload,
  });
  
  export const setLoginFailedToState = () => ({
    type: LOGIN_FAILED,
  });
  
  export const login = (user: User, navigate: any) => {
    return async (dispatch: any) => {
      try {
        // begin connecting...
        dispatch(setLoginFetchingToState());
        // connect
        const result = await httpClient.post<LoginResult>(server.LOGIN_URL, user);
        if (result.data.result === OK) {
          dispatch(setLoginSuccessToState(result.data));
          navigate("/login");
        } else {
          dispatch(setLoginFailedToState());
        }
      } catch (error) {
        // error
        dispatch(setLoginFailedToState());
      }
    };
  };