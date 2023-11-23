import React from "react";
import { SkillsListColumn, SkillsListContainer, SkillsName } from "./SkillsList";

const SkillsList = ({ skillList, skillList2 }) => {
  return (
    <>
      <SkillsListContainer>
        <SkillsListColumn>
          {skillList.map((skill, i) => (
            <SkillsName key={i}>{skill}</SkillsName>
          ))}
        </SkillsListColumn>
        <SkillsListColumn>
          {skillList2.map((skill, i) => (
            <SkillsName key={i}>{skill}</SkillsName>
          ))}
        </SkillsListColumn>
      </SkillsListContainer>
    </>
  );
};

export default SkillsList;
