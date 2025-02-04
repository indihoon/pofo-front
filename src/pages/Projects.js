import Switch from "react-switch";
import { useState } from "react";

import style from "../styles/Projects.module.css";

const Projects = () => {
  const [checked, setChecked] = useState(true); // 프로젝트 정보 표시 여부
  const [techStack, setTechStack] = useState("");
  const [techList, setTechList] = useState([]);
  const [requirementInput, setRequirementInput] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부

  // 기술 스택 추가 (Enter 키 입력 시)
  const handleTechStackKeyPress = (event) => {
    if (event.key === "Enter" && techStack.trim() !== "") {
      setTechList([...techList, techStack.trim()]);
      setTechStack("");
      event.preventDefault();
    }
  };

  // 요구 사항 추가 (Enter 키 입력 시)
  const handleRequirementKeyPress = (event) => {
    if (event.key === "Enter" && requirementInput.trim() !== "") {
      setRequirements([...requirements, requirementInput.trim()]);
      setRequirementInput("");
      event.preventDefault();
    }
  };

  // 저장 버튼 클릭 시
  const handleSave = () => {
    alert("프로젝트가 저장되었습니다!");
    setIsEditing(false);
  };

  return (
    <div className={style.project_container}>
      {/* 헤더 영역 (프로젝트 제목 + Switch 버튼) */}
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

      {/* 프로젝트 정보 (Switch OFF일 때 숨김) */}
      {checked ? (
        <div className={style.project_form}>
          {/* 프로젝트명 입력 */}
          <div className={style.form_group}>
            <label>프로젝트 명</label>
            <input
              placeholder="프로젝트명을 입력해주세요"
              maxLength="255"
              type="text"
              name="projectName"
              disabled={!isEditing}
            />
          </div>

          {/* 기간 입력 필드 */}
          <div className={style.form_group}>
            <label>기간</label>
            <div className={style.date_range}>
              <input
                placeholder="YYYY-MM-DD"
                maxLength="10"
                type="text"
                name="startDate"
                disabled={!isEditing}
              />
              <span className={style.date_separator}>~</span>
              <input
                placeholder="YYYY-MM-DD"
                maxLength="10"
                type="text"
                name="endDate"
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* 간단 설명 */}
          <div className={style.form_group}>
            <label>간단 설명</label>
            <textarea
              placeholder="프로젝트에 대한 간단한 설명을 입력하세요"
              maxLength="500"
              name="projectDescription"
              disabled={!isEditing}
            ></textarea>
          </div>

          {/* 요구 사항 입력 */}
          <div className={style.form_group}>
            <label>요구 사항</label>
            <ul className={style.requirements_list}>
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            {isEditing && (
              <input
                type="text"
                placeholder="요구 사항을 입력하고 Enter를 누르세요"
                value={requirementInput}
                onChange={(e) => setRequirementInput(e.target.value)}
                onKeyPress={handleRequirementKeyPress}
              />
            )}
          </div>

          {/* 기술 스택 입력 */}
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

          {/* 오픈 링크 입력 */}
          <div className={style.form_group}>
            <label>오픈 링크</label>
            <div className={style.link_input}>
              <input
                placeholder="http:// 또는 https://를 포함해 작성해주세요"
                type="text"
                name="repositoryLink"
                disabled={!isEditing}
              />
              <span className={style.link_icon}>🔗</span>
            </div>
          </div>

          {/* 저장 및 수정 버튼 */}
          <div className={style.button_group}>
            <button className={style.save_button} onClick={handleSave}>
              저장
            </button>
            <button
              className={style.edit_button}
              onClick={() => setIsEditing(true)}
            >
              수정
            </button>
          </div>
        </div>
      ) : (
        <div className={style.plus_icon} onClick={() => setChecked(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Projects;
