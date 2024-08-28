import { Button } from "../components/ui/button";
import ContentWrapper from "../components/ContentWrapper";
type Props = {};
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Home = (props: Props) => {
  return (
    <ContentWrapper>
      <div className="absolute inset-0 h-full w-full bg-purple-800 -z-10"></div>
      <div className="  text-white flex flex-col gap-16">
        {/* description  */}
        <div className="grid grid-cols-2 grid-rows-[70%_30%] h-[80vh] text-white place-items-center">
          <div>
            <img src="" alt="Product Image" />
          </div>
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
        <div className="h-[80vh] grid place-content-center text-white grid-cols-3 grid-rows-[50%_50%] gap-x-10">
          <div className="col-span-3 grid grid-rows-[1fr_2fr] grid-cols-[4fr_1fr] p-4">
            <div className="flex items-center justify-start text-lg font-bold">
              PRODUCTS
            </div>
            <div className="flex items-center justify-start row-start-2 row-end-3 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quod tempora possimus repellat rem incidunt enim asperiores quasi
              nisi consectetur?
            </div>
            <img
              src=""
              alt="Product Image"
              className="w-full h-auto object-cover row-span-2 col-start-2 row-start-1"
            />
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
        <div className="h-[80vh] grid grid-cols-[4fr_3fr]  text-white">
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
            {" "}
            <img src="" alt="Product Image" />
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
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                      Lorem ipsum dolor sit amet.
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* History */}

        <div className="h-[80vh]">history</div>

        {/* contacts */}
        <div className="h-[80vh]">contact</div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
