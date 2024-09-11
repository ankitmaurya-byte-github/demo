import { Button } from "../components/ui/button";
import ContentWrapper from "../components/ContentWrapper";

type Props = {};
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import {
  AnimationLogo1,
  AnimationLogo2,
  AnimationLogo3,
  AnimationLogo4,
} from "../components/imageGif/AnimationLogo";
import SignUp from "../components/auth/Login";
import UserCredentials from "./UserCredentials";
import ModelConfiguration from "./ModelConfiguration";
import LocationMaster from "./modelConfig/LocationMaster";
import Auth from "./Auth";
import CategoryMaster from "./modelConfig/CategoryMaster";
import { createContext, RefObject, useEffect, useRef, useState } from "react";
import PriceMaster from "./modelConfig/PriceMaster";
import InventoryNorms from "./modelConfig/InventoryNorms";
import InventoryNorms2 from "./modelConfig/InventoryNorms2";
import SalesPattern from "./modelConfig/SalesPattern";
import ShipmentNorms from "./modelConfig/ShipmentNorms";
import ModelRun from "./ModelRun";
import { decrement, increment, incrementByAmount } from "../store/slice";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import Img from "../components/LasyLoading";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
interface MainContainerContext {
  current: HTMLDivElement | null;
  pages: React.FC[];
  setPages: React.Dispatch<React.SetStateAction<React.FC[]>>;
}
export const maincontainer = createContext<MainContainerContext | null>(null);

const Home = () => {
  // const [smapleImages, setSampleImages] = useState([])
  // addSampleImages(setSampleImages);

  // Create the pages object with the correct types.
  // const [pages, setPages] = useState<React.ComponentType<any>[]>([]);
  const [pages, setPages] = useState<React.FC[]>([]);
  useEffect(() => {
    setPages([
      Auth,
      // UserCredentials,
      // ModelConfiguration,
      // LocationMaster,
      // CategoryMaster,
      // PriceMaster,
      // InventoryNorms,
      // InventoryNorms2,
      // SalesPattern,
      // ShipmentNorms,
      // ModelRun,
    ]);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <ContentWrapper>
      <div className="absolute inset-0 h-full w-full bg-[rgb(40,50,86)]/75 -z-10"></div>
      <Img
        src="/background-image.jpg"
        alt="Product Image"
        className="absolute -z-20 inset-0 h-full w-full object-cover"
      />

      <div
        ref={ref}
        className="h-full overflow-x-scroll overflow-y-hidden scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className={`flex items-center mt-[12vh] h-[88vh]`}
          style={{ width: `${pages.length * 100}%` }}
        >
          <maincontainer.Provider
            value={{ current: ref.current, pages, setPages }}
          >
            {pages.map((PageComponent, index) => (
              <PageComponent key={index} />
            ))}
          </maincontainer.Provider>
        </div>
      </div>
      <div className="w-full h-[30vh]"></div>
    </ContentWrapper>
  );
};
export default Home;
