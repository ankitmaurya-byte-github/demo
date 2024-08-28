import React from "react";
import { Button } from "./ui/button";
import ContentWrapper from "./ContentWrapper";

type Props = {};

const Header = (props: Props) => {
  return (
    <ContentWrapper>
      <div className="h-24 w-full flex items-center justify-between">
        <div className="h-full w-40">
          <img className="h-full w-full" src="/data_mingle.png" alt="" />
        </div>
        <div className="flex gap-8">
          <Button>Home</Button>
          <Button>Products</Button>
          <Button>About us</Button>
          <Button>sin in</Button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Header;
