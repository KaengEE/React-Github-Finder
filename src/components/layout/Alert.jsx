import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    //null 이 아니면 메시지 출력
    alert !== null && (
      <p className="flex items-start mb-2 space-x-2">
        <span>❗</span>
        <span className="flex-1 text-base font-semibold leading-7">
          <strong>{alert.msg}</strong>
        </span>
      </p>
    )
  );
}

export default Alert;
