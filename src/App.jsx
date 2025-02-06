import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar"; // ✅ 사이드바 컴포넌트
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectList from "./pages/ProjectList";
import Settings from "./pages/Settings";

import { useEffect, useState } from "react";
import axios from "axios";
//const [message, setMessage] = useState("");

function App() {
  useEffect(() => {
    console.log("실행됨");
    axios
      .get("/home/message")
      .then((res) => {
        console.log("성공");
        //setMessage(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log("실패");
        console.log(e);
      });
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar /> {/* ✅ 모든 페이지에서 공통으로 유지 */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/ProjectList" element={<ProjectList />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
