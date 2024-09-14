import React, { useState } from "react";
import { AnimationLogo1 } from "../components/imageGif/AnimationLogo";
import { Button } from "../components/ui/button";
import SignUp from "../components/auth/Register";
import { decrement, increment, incrementByAmount } from "../store/slice";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import SignIn from "../components/auth/Login";

type Props = {};

const Login = (props: Props) => {
  // const count = useAppSelector((state) => state.counter.value);
  const [showSignUp, setShowSignUp] = useState(false);

  const dispatch = useAppDispatch();
  return (
    <div className="  w-full grid gap-4 place-items-center grid-cols-[1.4fr_3.5fr_3fr] grid-rows-3 h-[61vh]">
      <div className="row-span-3">
        <AnimationLogo1 />
      </div>{" "}
      <div className="row-span-2 text-white">
        At DataMingle, we streamline supply chain management by enhancing
        visibility and efficiency, reducing costs, and optimizing product flows
        for shippers and logistics professionals.
        <h1 className=" text-yellow-600 text-3xl font-bold mt-4">
          YOU CAN COUNT ON US
        </h1>
      </div>
      <div className="col-start-2 w-full row-start-3 place-self-start">
        <h2 className="text-white text-2xl font-bold">New Member?</h2>
        <div className="w-full mx-auto mt-4 flex">
          <h1 className=" text-3xl text-yellow-600 mr-8 font-bold ">
            GET STARTED
          </h1>{" "}
          {showSignUp ? (
            <Button
              onClick={() => setShowSignUp(false)}
              className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
            >
              SIGN IN
            </Button>
          ) : (
            <Button
              onClick={() => setShowSignUp(true)}
              className="bg-yellow-600 text-gray-800 hover:bg-yellow-700 font-bold"
            >
              SIGN UP
            </Button>
          )}
        </div>
      </div>
      {/* login */}
      <div className="row-span-3 h-full w-full">
        {showSignUp ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
};

export default Login;
