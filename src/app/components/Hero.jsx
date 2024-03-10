import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import playStore from "../images/playStore.png";
import Button from "./Button";
import { BsPlayCircle } from "react-icons/bs";
import Extralogo from "./Exstralogo";
import BackgroundDesign from "./BackgroundDesign";
import Phoneframe from "./Phoneframe";
import Appfeature from "./Appfeature";
const Hero = () => {
  return (
    <section id="home" className="overflow-hidden lg:py-20 py-10 lg:pb-3">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12  lg:gap-y-6 ">
          <div className="relative z-10 mx-auto max-2-2xl lg:col-span7 lg:max-w-none lg:pt-6 xl:col-span-6 text-center lg:text-start">
            <Title
              title="Invest at the perfect time."
              className="sm:text-4xl text-3xl"
            />
            <p className="mt-6 text-lg text-gray-600">
              By leveraging insights from our network of industry insiders, you
              will know exactly when to buy to maximize profit, and exactly when
              to sell to avoid painful losses.
            </p>
            <div className="mt-8 mx-auto justify-center lg:justify-start flex flex-wrap items-center gap-x-6">
              <Image
                src={playStore}
                alt="app-store"
                className="w-32 cursor-pointer"
              />
              <Button
                variant="outline"
                href="https://youtu.be/yiyjp0cIiSs?si=lx2ayGo3FoPbqiYL"
                className="gap-2 flex"
              >
                <BsPlayCircle className="text-xl" />
                <span>Watch This Video</span>
              </Button>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <Phoneframe className="max-w-[320px] lg:max-w-[320px] md:max-w-[330px] mx-auto">
              <Appfeature />
            </Phoneframe>
          </div>
          <Extralogo />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
