import Container from "./Container";
import Reviewgrid from "./Reviewgrid";
import Title from "./Title";
const Review = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-20 sm:pt-28"
    >
      <Container>
        <Title
          title="Everyone is changing their life with Investa."
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        />
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p>
        <Reviewgrid />
      </Container>
    </section>
  );
};

export default Review;
