// import { history } from "../index";
import {
    OK,
    LOGIN_FAILED,
    LOGIN_FETCHING,
    LOGIN_SUCCESS,
    server,
    LOGOUT,
  } from "../Constants";
import { LoginResult } from "../types/authen.type";
  import { User } from "../types/user.type";
  import { httpClient } from "../utils/httpclient";
  import { TOKEN } from "../Constants";
import { type } from "os";
  
  export const setLoginFetchingToState = () => ({
    type: LOGIN_FETCHING,
  });
  
  export const setLoginSuccessToState = (payload: LoginResult) => ({
    type: LOGIN_SUCCESS,
    payload,
  });
  
  export const setLoginFailedToState = () => ({
    type: LOGIN_FAILED,
  });

  export const setLogoutToState = () => ({
    type: LOGOUT,
  });

  
  export const login = (user: User, navigate: any) => {
    return async (dispatch: any) => {
      try {
        // begin connecting...
        dispatch(setLoginFetchingToState());
        // connect
        const result = await httpClient.post<LoginResult> (server.LOGIN_URL, user);
        if (result.data.result === OK) {
          localStorage.setItem(TOKEN,result.data.token!)
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

  export const restoreLogin = ()=>{
    return (dispatch:any)=>{
        const  token = localStorage.getItem(TOKEN)
        if(token){
            dispatch(setLoginSuccessToState({result:OK,token,message:"Login successfully"}));

        }
    }
  
  }
 
  export const logout = (navigate:any)=>{
    return (dispatch:any)=>{
       const token = localStorage.removeItem(TOKEN)
       dispatch(setLogoutToState())
       alert("logout success")
       navigate('/login')
    }
  }