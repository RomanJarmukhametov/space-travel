import Link from "next/link";
import TheHeading from "@/app/ui/shared/TheHeading";
import BodyText from "@/app/ui/shared/BodyText";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center mt-10 text-center">
      <TheHeading level="3">Houston, we have a problem</TheHeading>
      <BodyText>The page you are looking for has been lost in space.</BodyText>
      <Link
        className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-white rounded-full text-gray-950 text-sm sm:text-base md:text-lg lg:text-xl mt-10 hover:bg-gray-200 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
        href="/">
        Back To Earth
      </Link>
    </main>
  );
}
