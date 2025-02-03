import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar"; // ✅ 사이드바 컴포넌트
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar /> {/* ✅ 모든 페이지에서 공통으로 유지 */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
