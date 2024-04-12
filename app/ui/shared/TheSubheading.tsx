import { barlow } from "@/app/ui/styles/fonts";

interface SubheadingProps {
  level: "1" | "2";
  children?: React.ReactNode;
}

const Subheading: React.FC<SubheadingProps> = ({ level, children }) => {
  const getSubheadingClasses = (): string => {
    let classes = `${barlow.className} antialiased font-normal uppercase`;

    switch (level) {
      case "1":
        classes += " text-3xl text-white";
        break;
      case "2":
        classes += " text-xl text-indigo-200";
        break;
    }
    return classes;
  };

  return <p className={getSubheadingClasses()}>{children || "Subheading"}</p>;
};

export default Subheading;
