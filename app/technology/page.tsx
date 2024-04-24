import type { Metadata } from "next";

import TheSubheading from "@/app/ui/shared/TheSubheading";
import TechnologyTab from "@/app/ui/technology/TechnologyTab";

export const metadata: Metadata = {
  title: "Technology - Space Travel",
  description: "Learn about the technology behind space travel!",
};

const Technology = () => {
  return (
    <main className="container mx-auto px-4 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="h-full flex flex-col gap-20 justify-end">
        <TheSubheading level="1">
          <span className="font-bold opacity-25 mr-3">03</span>
          space launch 101
        </TheSubheading>

        <TechnologyTab />
      </div>
    </main>
  );
};

export default Technology;
