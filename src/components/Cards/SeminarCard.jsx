import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 90%;
  }

  border: 0.1px solid ${({ theme }) => theme.text_primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Logo = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.primary + 50};
  border-radius: 10px;
  margin-top: 4px;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SeminarTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const SeminarCard = ({ seminarDetail }) => {
  return (
    <Card>
      <Top>
        <Logo>{seminarDetail.id+1}</Logo>
        <Body>
          <SeminarTitle>"{seminarDetail.title}"</SeminarTitle>
        </Body>
      </Top>
    </Card>
  );
};

export default SeminarCard;
