import React from "react";
import { Button } from "./ui/button";
import ContentWrapper from "./ContentWrapper";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <ContentWrapper>
      <div className="h-24 w-full flex items-center justify-between">
        <div className="h-full w-40">
          <img className="h-full w-full" src="/data_mingle.png" alt="" />
        </div>
        <div className="flex gap-8">
          <Link to="/explore">
            <Button>Explore</Button>
          </Link>
          <Link to="/Products">
            <Button>Products</Button>
          </Link>
          <Link to="/about">
            <Button>About us</Button>
          </Link>
          <Link to="/sign-in">
            <Button>sign in</Button>
          </Link>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Header;
