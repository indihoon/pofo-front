import React from "react";
import { Route, Routes } from 'react-router-dom';
import LeftMenu from "./component/LeftMenu";
import './App.css';

function App() {
  return (
    <Route> {/* ✅ BrowserRouter로 감싸기 */}
      <div className="App">
        <LeftMenu /> {/* 왼쪽 메뉴 바 추가 */}
        <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
          <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Route>
  );
}

export default App;
