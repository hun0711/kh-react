import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HackerApp from "./HackerApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    {/* <App /> */}
    <HackerApp />
  </React.Fragment>
);
/* 
HackerNews 데이터를 axios 가져올 떄 ReactStrictMode가 있으면 두 번 요청이 발생함
빈 태그로 변경하였다.
여기서 빈 태그는 Fragment을 의미함
*/
