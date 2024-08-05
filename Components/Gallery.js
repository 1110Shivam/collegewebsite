import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
      <div className=" bg-blue-700 flex items-center justify-center gap-10 mb-40 p-10  relative">
        <Image
          src="/g1.jpg"
          width={400}
          height={400}
          className="rounded-md border-black border-4 w-1/4"
        />
        <Image
          className="rounded-md border-black border-4 w-1/4"
          src="/g5.jpg"
          width={400}
          height={400}
        />
        <Image
          className="rounded-md border-black border-4 w-1/4"
          src="/g6.jpg"
          width={400}
          height={400}
        />
      </div>
  );
};

export default Gallery;
