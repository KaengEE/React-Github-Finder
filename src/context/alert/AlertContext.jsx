import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  //문자열 경고창 내용을 state로
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // 경고창 메세지를 설정후 3초뒤 제거
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg: msg, type: type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
