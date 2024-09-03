import React from "react";
import CustomizedSteppers from "../components/ui/Stepper";
import { AnimationLogo1 } from "../components/imageGif/AnimationLogo";
import { Button } from "../components/ui/button";
import SignUp from "../components/auth/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Form";

const UserCredentials = (props: Props) => {
  return (
    <div className="h-full w-full grid gap-4 place-items-center grid-cols-[1fr_2fr_2fr] ">
      <div className="place-self-end mb-40 gap-4 flex flex-col">
        <div>
          <Button className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold">
            Save & Submit
          </Button>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowLeft} />
          <Button className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold">
            Back to main
          </Button>
        </div>
      </div>
      <Form title="User`s Info" />
      <Form title="Organisation`s Info" />
    </div>
  );
};

export default UserCredentials;
