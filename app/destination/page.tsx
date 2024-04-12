import TheSubheading from "@/app/ui/shared/TheSubheading";
import DestinationTab from "@/app/ui/destination/DestinationTab";
const Destination = () => {
  return (
    <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      <TheSubheading level="1">
        <span className="font-bold opacity-25 mr-3">01</span>
        Pick your destination
      </TheSubheading>
      <DestinationTab />
    </main>
  );
};

export default Destination;
