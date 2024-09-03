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

const Home = (props: Props) => {
  // const [smapleImages, setSampleImages] = useState([])
  // addSampleImages(setSampleImages);
  return (
    <ContentWrapper>
      <div className="absolute inset-0 h-full w-full bg-purple-800 -z-10"></div>
      <div className="  text-white flex flex-col gap-16">
        {/* description  */}

        <div className="grid grid-cols-2 grid-rows-[70%_30%] h-[80vh] text-white place-items-center">
          <AnimationLogo1 />
          <div className="text-xl p-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            repellendus assumenda quam et, nesciunt voluptatum veniam tempora
            rerum blanditiis repudiandae labore iusto porro fuga dolor voluptate
            tempore odio a harum asperiores reiciendis id. Impedit, odio?
          </div>
          <div className="col-span-2 place-self-center text-pink-600 text-3xl">
            YOU CAN COUNT ON US
          </div>
        </div>

        {/* Products */}

        <div className="h-[80vh] grid text-white grid-cols-3 grid-rows-[40%_50%] gap-y-[10%] gap-x-10">
          <div className="col-span-3 grid grid-rows-[1fr_2fr] grid-cols-[4fr_1fr] p-4">
            <div className=" text-4xl font-bold">PRODUCTS</div>
            <div className="flex items-center justify-start row-start-2 row-end-3 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quod tempora possimus repellat rem incidunt enim asperiores quasi
              nisi consectetur?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dolorum, asperiores.
            </div>
            <div className="row-span-2 col-start-2 row-start-1 h-[166%] -mt-[30%]">
              <AnimationLogo1 />
            </div>
          </div>

          <div className="flex bg-white/50 flex-col items-center justify-center text-center">
            <span className="text-purple-800">Inventory AI</span>
            <Button>Learn More</Button>
          </div>
          <div className="flex bg-white flex-col items-center justify-center text-center">
            <span className="text-purple-800">Network AI</span>
            <Button>Learn More</Button>
          </div>
          <div className="flex bg-white flex-col items-center justify-center text-center">
            <span className="text-purple-800">Customise Solution</span>
            <Button>Learn More</Button>
          </div>
        </div>

        {/* highlight */}

        <div className="h-[80vh] grid grid-cols-[1fr_1fr]  text-white">
          <div className="m-8 border-2 border-solid p-8 flex flex-col justify-between">
            <h1 className="text-5xl font-bold">100% SECURED DATA</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              harum at provident aliquam. Veritatis, debitis? Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Atque impedit doloremque
              soluta consequatur eum saepe sed dolores quo maxime quisquam.
            </p>
            <Button>Learn More</Button>
          </div>
          <div>
            <AnimationLogo2 />
          </div>
        </div>

        {/* sample project */}

        <div className="h-[80vh] flex flex-col p-16 gap-8 justify-around items-center">
          <div className="font-bold text-6xl self-start">
            Some Our Sample Project
          </div>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[1200px]  mx-auto"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 text-center ">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <img
                            className="h-72 w-full object-cover"
                            src="/public/sample-images/wallhaven-4g921d.jpg"
                            alt=""
                          />
                        </CardContent>
                      </Card>
                      Lorem ipsum dolor sit amet.
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </Carousel>
          </div>
        </div>

        {/* History */}

        <div className="h-[80vh] grid grid-cols-[1fr_1.3fr]">
          <div className="grid grid-rows-[1fr_3fr] place-items-center">
            <div className="font-bold text-5xl margin-auto">
              Companies We've Worked With
            </div>
            <div className=" relative h-full w-full">
              <AnimationLogo3 />
            </div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="border-2 border-white p-6">
              <blockquote>
                Boost your product and service's credibility by adding
                testimonials from your clients. People love recommendations, so
                feedback from others who've tried it is invaluable.
              </blockquote>
              <cite className="mt-3 text-pink-600 text-xl">
                – Hollis & Reed
              </cite>
            </div>
            <div className="border-2 border-white p-6">
              <blockquote>
                Boost your product and service's credibility by adding
                testimonials from your clients. People love recommendations, so
                feedback from others who've tried it is invaluable.
              </blockquote>
              <cite className="mt-3 text-pink-600 text-xl">
                – Hollis & Reed
              </cite>
            </div>
            <div className="border-2 border-white p-6">
              <blockquote>
                Boost your product and service's credibility by adding
                testimonials from your clients. People love recommendations, so
                feedback from others who've tried it is invaluable.
              </blockquote>
              <cite className="mt-3 text-pink-600 text-xl">
                – Hollis & Reed
              </cite>
            </div>
          </div>
        </div>

        {/* contacts */}
        <div className="h-[50vh] grid grid-cols-[1fr_1.3fr] ">
          <div className="grid grid-rows-[1fr_1.5fr]">
            <div className="font-bold my-auto text-4xl">
              Let's talk business.
            </div>
            <div className="flex flex-col ">
              <div className="my-auto ">
                <h2 className="font-bold mb-2 text-2xl">Phone</h2>
                <p>(123) 456-7890</p>
              </div>
              <div className="my-auto">
                <h2 className="font-bold mb-2 text-2xl">Email</h2>
                <p>hello@reallygreatsite.com</p>
              </div>
            </div>
          </div>
          <div className="h-full w-full relative">
            <AnimationLogo4 />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
