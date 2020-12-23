import Image from "next/image";

export const ProjectIcon: React.FC<any> = () => {
  return (
    <div className="h-8 w-8">
      <Image
        src="/logos/p5js.png"
        layout="fixed"
        width="50"
        height="50"
        priority
      />
    </div>
  );
};
