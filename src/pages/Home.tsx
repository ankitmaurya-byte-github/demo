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
import Login from "./Login";
import CategoryMaster from "./modelConfig/CategoryMaster";

const Home = (props: Props) => {
  // const [smapleImages, setSampleImages] = useState([])
  // addSampleImages(setSampleImages);

  // Create the pages object with the correct types.
  const pages = [
    Login,
    UserCredentials,
    ModelConfiguration,
    LocationMaster,
    CategoryMaster,
  ];

  return (
    <ContentWrapper>
      <div className="absolute inset-0 h-full w-full bg-[rgb(40,50,86)]/75 -z-10"></div>
      <img
        src="/background-image.jpg"
        alt="Product Image"
        className="absolute -z-20 inset-0 h-full w-full object-cover"
      ></img>

      <div
        className="h-full overflow-x-scroll overflow-y-hidden scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className={`flex h-screen`}
          style={{ width: `${pages.length * 100}%` }}
        >
          {/* {pages.map((PageComponent, index) => (
            <div key={index}>
              <PageComponent />
            </div>
          ))} */}
          <Login />
          <UserCredentials />
          <ModelConfiguration />
          <LocationMaster />
          <CategoryMaster />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
