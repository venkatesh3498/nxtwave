import React from "react";
import { Nav, RightContainer, StyledImg } from "./Styles";
import NxtWaveLogo from "./../../assets/NxtWaveLogo";
import Person from "./../../assets/image.png";
import Button from "../Button/Index";
import { Link, useLocation, useNavigate } from "react-router-dom";
const NavBar = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  return (
    <Nav>
      <Link to="/">
        <NxtWaveLogo />
      </Link>
      <RightContainer>
        {!location.pathname.includes("/create-resource") && (
          <Button
            text="add item"
            onClick={() => Navigate("/nxtwave/create-resource")}
            variant="success"
          />
        )}
        <StyledImg src={Person} alt="person" />
      </RightContainer>
    </Nav>
  );
};

export default NavBar;
