import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-xl sm:text-3xl xl:text-4xl text-blue-900 font-bold">
      {children}
    </p>
  );
};

export default Title;
