import Container from "./Container";
import Title from "./Title";
import Dekstopview, { FeatureMobile } from "./Dekstopfeature";
const Features = () => {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-800 py-20 sm:py-32"
    >
      <Container>
        <Title
          title="Every feature you need to win. Try it for yourself."
          className="text-white text-2xl"
        />
        <p className="mt-2 text-lg text-gray-400">
          INVESMAN was built for investors like you who play by their own rules
          and are not going to let SEC regulations get in the way of their
          dreams. If other investing tools are afraid to build it, Investa has
          it.
        </p>
      </Container>
      <div className="hidden md:mt-20 md:block max-w-screen-xl ">
        <Dekstopview />
      </div>
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Features;
