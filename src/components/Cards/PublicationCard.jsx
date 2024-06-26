import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.25) 0px 4px 24px;
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(23, 92, 230, 0.4) 0px 4px 24px;
  }
  &:hover ${Button} {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
    font-size: 30px;

  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  //   -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  //   text-overflow: ellipsis;
`;

const PublicationCard = ({ publication }) => {
  return (
    <Card>
      {/* <Image src={publication.image}/> */}
      <Details>
        <Logo>{publication.id+1}</Logo>
        <Description>{publication.description}</Description>
      </Details>
    </Card>
  );
};

export default PublicationCard;
