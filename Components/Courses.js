import React from "react";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="flex bg-blue-700 gap-7 items-center justify-center pt-10 pb-5">
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={"/Bca.jpg"}
          width={400}
          height={400}
          className="rounded-md w-10/8 border-black border-4"
        />
        <span className="font-semibold font-gilroy text-white text-xl">BCA</span>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={"/Mca.jpg"}
          width={400}
          height={400}
          className="rounded-md w-10/8 border-black border-4"
        />
        <span className="font-semibold font-gilroy text-white text-xl">MCA</span>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={"/Btech.jpg"}
          width={400}
          height={400}
          className="rounded-md w-10/8 border-black border-4"
        />
        <span className="font-semibold font-gilroy text-white text-xl">BTech</span>
      </div>
    </div>
  );
};

export default Courses;
