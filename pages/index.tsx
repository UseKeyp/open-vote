import React from "react";
import { useRouter } from "next/router";
import Logo from "components/Logo";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/create");
  };

  return (
    <div className="flex items-center mt-[110px] w-[824px] mx-auto">
      <div className="mr-[77px]">
        <Logo variant="big"/>
        <button className="text-[27.6923px] border-2 border-[#77C118] w-full py-[24px] font-bold text-[#80858E] mt-[-1px]" onClick={handleClick}>Create Poll</button>
      </div>
      <div className="text-[#B0B6C1] text-[32px] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        ultricies, nulla et tempus egestas, lacus nisi congue nisl, ac euismod
        dolor mi nec dui. Aliquam.
      </div>
    </div>
  );
};

export default Home;
