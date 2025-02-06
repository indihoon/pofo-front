import Switch from "react-switch";
import { useEffect, useState } from "react";
import style from "../styles/Projects.module.css";

const Projects = ({ editingProject, onClose }) => {
  const [checked, setChecked] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [descript, setDescript] = useState("");
  const [reposit, setReposit] = useState("");

  const [techStack, setTechStack] = useState("");
  const [techList, setTechList] = useState([]);
  const [requirementInput, setRequirementInput] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingProject) {
      setProjectName(editingProject.projectName || "");
      setStartDate(editingProject.startDate || "");
      setEndDate(editingProject.endDate || "");
      setDescript(editingProject.descript || "");
      setReposit(editingProject.reposit || "");
      setTechList(editingProject.techList || []);
      setRequirements(editingProject.requirements || []);
      setIsEditing(true);
    } else {
      const saveProjectName = localStorage.getItem("p_name");
      const saveStartDate = localStorage.getItem("s_date");
      const saveEndDate = localStorage.getItem("e_date");
      const saveDescript = localStorage.getItem("p_desc");
      const saveRequirements = localStorage.getItem("p_req");
      const saveTechList = localStorage.getItem("p_tech");
      const saveReposit = localStorage.getItem("p_repo");

      if (saveProjectName) setProjectName(saveProjectName);
      if (saveStartDate) setStartDate(saveStartDate);
      if (saveEndDate) setEndDate(saveEndDate);
      if (saveDescript) setDescript(saveDescript);
      if (saveReposit) setReposit(saveReposit);

      // JSON.parse()를 사용하여 배열 데이터 복구
      if (saveRequirements) setRequirements(JSON.parse(saveRequirements));
      if (saveTechList) setTechList(JSON.parse(saveTechList));
    }
  }, [editingProject]);

  // 기술 스택 추가 (Enter 키 입력 시)
  const handleTechStackKeyPress = (event) => {
    if (event.key === "Enter" && techStack.trim() !== "") {
      const updatedTechList = [...techList, techStack.trim()];
      setTechList(updatedTechList);
      localStorage.setItem("p_tech", JSON.stringify(updatedTechList));
      setTechStack("");
      event.preventDefault();
    }
  };

  // 요구 사항 추가 (Enter 키 입력 시)
  const handleRequirementKeyPress = (event) => {
    if (event.key === "Enter" && requirementInput.trim() !== "") {
      const updatedRequirements = [...requirements, requirementInput.trim()];
      setRequirements(updatedRequirements);
      localStorage.setItem("p_req", JSON.stringify(updatedRequirements));
      setRequirementInput("");
      event.preventDefault();
    }
  };

  // 저장 버튼 클릭 시
  const handleSave = () => {
    alert(
      editingProject
        ? "프로젝트가 수정되었습니다!"
        : "프로젝트가 저장되었습니다!"
    );

    const newProject = {
      id: editingProject ? editingProject.id : Date.now(),
      projectName,
      startDate,
      endDate,
      descript,
      reposit,
      techList,
      requirements,
    };

    const storedProjects = localStorage.getItem("projects_list");
    let projectsArray = storedProjects ? JSON.parse(storedProjects) : [];

    if (editingProject) {
      // 기존 프로젝트 수정
      projectsArray = projectsArray.map((proj) =>
        proj.id === editingProject.id ? newProject : proj
      );
    } else {
      // 새로운 프로젝트 추가
      projectsArray.push(newProject);
    }

    localStorage.setItem("projects_list", JSON.stringify(projectsArray));
    setIsEditing(false);
    onClose();
  };

  return (
    <div className={style.project_container}>
      <div className={style.header}>
        <h1>프로젝트 페이지</h1>
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          onColor="#86d3ff"
          offColor="#ccc"
          handleDiameter={20}
          height={24}
          width={48}
          uncheckedIcon={false}
          checkedIcon={false}
          className="toggle-switch"
        />
      </div>

      {checked ? (
        <div className={style.project_form}>
          <div className={style.form_group}>
            <label>프로젝트 명</label>
            <input
              placeholder="프로젝트명을 입력해주세요"
              maxLength="255"
              type="text"
              name="projectName"
              disabled={!isEditing}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div className={style.form_group}>
            <label>기간</label>
            <div className={style.date_range}>
              <input
                placeholder="YYYY-MM-DD"
                maxLength="10"
                type="text"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                disabled={!isEditing}
              />
              <span className={style.date_separator}>~</span>
              <input
                placeholder="YYYY-MM-DD"
                maxLength="10"
                type="text"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className={style.form_group}>
            <label>간단 설명</label>
            <textarea
              placeholder="프로젝트에 대한 간단한 설명을 입력하세요"
              maxLength="500"
              name="projectDescription"
              disabled={!isEditing}
              value={descript}
              onChange={(e) => setDescript(e.target.value)}
            ></textarea>
          </div>

          <div className={style.form_group}>
            <label>기술 스택</label>
            <div className={style.tech_stack}>
              {techList.map((tech, index) => (
                <span key={index} className={style.tech_tag}>
                  {tech}
                </span>
              ))}
              {isEditing && (
                <input
                  type="text"
                  placeholder="Enter 키를 눌러 추가"
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                  onKeyPress={handleTechStackKeyPress}
                />
              )}
            </div>
          </div>

          <div className={style.button_group}>
            <button className={style.save_button} onClick={handleSave}>
              {editingProject ? "수정 완료" : "저장"}
            </button>
            {!isEditing && (
              <button
                className={style.edit_button}
                onClick={() => setIsEditing(true)}
              >
                수정
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Projects;
