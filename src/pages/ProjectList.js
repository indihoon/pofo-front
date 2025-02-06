import { useEffect, useState } from "react";
import style from "../styles/ProjectList.module.css";

const ProjectList = ({ onEdit }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects_list");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  return (
    <div className={style.project_list_container}>
      <h1>프로젝트 리스트</h1>
      <div className={style.project_grid}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className={style.project_card}>
              <h2>{project.projectName}</h2>
              <p className={style.project_dates}>
                📅 {project.startDate} ~ {project.endDate}
              </p>
              <p className={style.project_desc}>{project.descript}</p>
              <button
                className={style.edit_button}
                onClick={() => onEdit(project)}
              >
                수정
              </button>
            </div>
          ))
        ) : (
          <p>저장된 프로젝트가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
