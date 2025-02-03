import { useNavigate, useLocation } from "react-router-dom";

/* css import */
import style from "./../styles/Sidebar.module.css";

const sidebarTopItems = [
  { label: "프로젝트", path: "/projects" },
  { label: "기술스택", path: "/skills" },
  { label: "페이지별분석", path: "/blog" },
  { label: "개발과정", path: "/contact" },
  { label: "리뷰", path: "/code-examples" },
];

const sidebarBottomItems = [
  { label: "About", path: "/about" },
  { label: "Settings", path: "/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className={style.sidebar}>
      <div className={style.sidebar_top}>
        {sidebarTopItems.map(({ label, path }) => (
          <div
            key={path}
            onClick={() => navigate(path)}
            className={`${style.sidebar_item} ${
              currentPath === path ? style.active : ""
            }`}
          >
            {label} {/* ✅ 텍스트 네비게이션 표시 */}
          </div>
        ))}
      </div>
      <hr /> {/* ✅ 구분선 추가 */}
      <div className={style.sidebar_bottom}>
        {sidebarBottomItems.map(({ label, path }) => (
          <div
            key={path}
            onClick={() => navigate(path)}
            className={`${style.sidebar_item} ${
              currentPath === path ? style.active : ""
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
