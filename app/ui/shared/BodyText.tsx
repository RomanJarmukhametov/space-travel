import { barlow } from "@/app/ui/styles/fonts";

const BodyText = ({ children, ...attrs }: { children: React.ReactNode }) => {
  return (
    <p
      className={`${barlow.className} antialiased font-normal  text-white text-base leading-6 lg:text-lg lg:leading-loose text-center lg:text-left`}
      {...attrs}>
      {children ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis veritatis molestias ducimus minus iste nobis ipsam facere, velit asperiores quod sequi hic eveniet laborum similique tempore animi nihil ut!"}
    </p>
  );
};

export default BodyText;
