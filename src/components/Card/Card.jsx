import React from "react";
import { Link } from "react-router-dom";
import {
  BoxCard,
  CardHeader,
  CardLink,
  CardDescription,
  ImageWrapper,
  CardTitleWrapper,
  CardHeaderTitle,
  CardTitleDescription,
  StyledImg,
} from "./styles";
const Card = ({ resource }) => {
  return (
    <BoxCard>
      <CardHeader>
        <ImageWrapper>
          <StyledImg src={resource.icon_url} alt={resource.title} />
        </ImageWrapper>
        <CardTitleWrapper>
          <CardHeaderTitle>{resource.title}</CardHeaderTitle>
          <CardTitleDescription>{resource.category}</CardTitleDescription>
        </CardTitleWrapper>
      </CardHeader>
      <CardLink href={resource.link}>
        {resource.link}
      </CardLink>
      <CardDescription>{resource.description}</CardDescription>
    </BoxCard>
  );
};

export default Card;
