"use client";

const GradientBackground = () => {
  return (
    <div className="w-full h-screen py-20">
      <div
        style={{
          clipPath: `polygon(50% 0%, 82% 22%, 35% 47%, 98% 31%, 79% 91%, 50% 80%, 21% 91%, 32% 57%, 2% 35%, 31% 24%)`,
          width: 200,
          height: 200,
        }}
        className="bg-orange-500/20 absolute top-20 left-0"
      ></div>
      <div
        style={{
          clipPath: `polygon(50% 0%, 82% 22%, 35% 47%, 98% 31%, 79% 91%, 50% 80%, 21% 91%, 32% 57%, 2% 35%, 31% 24%)`,
          width: 200,
          height: 200,
        }}
        className="bg-orange-500/20 absolute bottom-20 right-0"
      ></div>
      <div
        style={{
          clipPath: `polygon(50% 0%, 82% 22%, 35% 47%, 98% 31%, 79% 91%, 50% 80%, 21% 91%, 32% 57%, 2% 35%, 31% 24%)`,
          width: 500,
          height: 200,
        }}
        className="bg-orange-500/5 absolute bottom-20 right-1/2 translate-x-1/2 hidden md:block"
      ></div>
    </div>
  );
};

export default GradientBackground;
