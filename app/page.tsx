import type { Metadata } from "next";
import BodyText from "@/app/ui/shared/BodyText";
import TheSubheading from "@/app/ui/shared/TheSubheading";
import TheHeading from "@/app/ui/shared/TheHeading";
import ExploreButton from "@/app/ui/homepage/ExploreButton";

export const metadata: Metadata = {
  title: "Home - Space Travel",
  description: "Book your next space travel adventure with us!",
};

const Home = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-20 mt-40 lg:mt-96">
        <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center lg:items-start lg:justify-start">
          <TheSubheading level="1">so, you want to travel to</TheSubheading>
          <TheHeading level="1">space</TheHeading>
          <BodyText>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </BodyText>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ExploreButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
