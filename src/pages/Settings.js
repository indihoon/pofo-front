import { useState } from "react";
import Projects from "./Projects";
import ProjectList from "./ProjectList";
import style from "../styles/Settings.module.css"; // ✅ CSS 적용 확인

const Settings = () => {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null); // 수정할 프로젝트 상태 관리

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowProjectForm(true);
  };

  return (
    <div className={style.settings_container}>
      <h1>설정</h1>
      {!showProjectForm ? (
        <>
          <button
            className={style.add_project_button}
            onClick={() => {
              setEditingProject(null);
              setShowProjectForm(true);
            }}
          >
            + 프로젝트 추가
          </button>
          {/* 프로젝트 리스트 출력 및 수정 기능 추가 */}
          <ProjectList onEdit={handleEditProject} />
        </>
      ) : (
        <Projects
          onClose={() => setShowProjectForm(false)}
          editingProject={editingProject}
        />
      )}
    </div>
  );
};

export default Settings;
