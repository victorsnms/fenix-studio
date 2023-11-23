import styled from "styled-components";

export const SkillsListContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const SkillsListColumn = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const SkillsName = styled.span`
  text-align: center;
  color: #f7f8fa;
`;
