import styled from "styled-components";
import CreateFormImage from "./../../assets/image9.png";

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 50%;
  /* height: calc(100vh - 72px); */
  /* background: url(${CreateFormImage}) no-repeat center
    center / contain; */
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 22px 52px;
  align-items: center;
`;
const FormTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 32px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #171f46;
`;
const FormWrapper = styled.div`
  flex: 1 0 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledLink = styled.link`
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
  text-decoration: none;
  display: flex;
  align-items: center;
  align-self: flex-start;
`;
export {
  Box,
  ImageContainer,
  FormWrapper,
  FormTitle,
  LeftContainer,
  StyledImg,
  StyledLink,
};
