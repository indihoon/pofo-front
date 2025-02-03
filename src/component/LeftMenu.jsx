import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return(
    <div className="sidebar">
      <h2>메뉴</h2>
      <ul>
        <li><Link to ="/project">프로젝트 개요</Link></li>
        <li><Link to ="/tech">기술 스택</Link></li>
        <li><Link to ="/process">개발 과정</Link></li>
      </ul>
    </div>
  )

}

export default LeftMenu;