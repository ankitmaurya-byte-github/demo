import React, { useContext } from "react";
import { Button } from "./ui/button";
import ContentWrapper from "./ContentWrapper";
import { Link } from "react-router-dom";
import CustomizedSteppers from "./ui/Stepper";
import { StepperVisible } from "../App";

type Props = {};

const Header = (props: Props) => {
  const { isVisible } = useContext(StepperVisible);
  return (
    <ContentWrapper>
      <div className="h-24 w-full flex items-center justify-between">
        <div className="h-full w-40">
          <img className="h-full w-full" src="/data_mingle.png" alt="" />
        </div>
        {isVisible && <CustomizedSteppers />}
      </div>
    </ContentWrapper>
  );
};

export default Header;
