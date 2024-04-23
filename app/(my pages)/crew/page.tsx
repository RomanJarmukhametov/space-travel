import type { Metadata } from "next";

import TheSubheading from "@/app/ui/shared/TheSubheading";
import CrewSwiper from "@/app/ui/crew/CrewSwiper";

export const metadata: Metadata = {
  title: "Crew - Space Travel",
  description: "Meet the crew that will take you to space!",
};

const Crew = () => {
  return (
    <main className="container mx-auto px-4 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="h-full flex flex-col gap-20 justify-end">
        <TheSubheading level="1">
          <span className="font-bold opacity-25 mr-3">02</span>
          meet your crew
        </TheSubheading>

        <CrewSwiper />
      </div>
    </main>
  );
};

export default Crew;
