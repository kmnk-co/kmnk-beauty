import Image from "next/image";

const Page = () => {
  return (
    // <div className="h-[50vh] flex justify-center items-center">
    //   <Image src={"globe.svg"} alt={"globe"} height={100} width={100} />
    //   <div className="text-center">
    //     <div className="text-[4.5rem] daniel-normal brand-gradient">
    //       KMNK Beauty
    //     </div>
    //     <div className="text-xl hind-light">We&apos;ll be right back!</div>
    //   </div>
    // </div>
    // <div className="relative h-auto w-full">
    //   <Image src={"/stock-photo-hires.png"} alt={"a"} fill={true} objectFit="cover" />
    // </div>
    <div className="">
      <Image
      className=""
        src={"/stock-photo.png"}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={4096}
        height={2732}
      />
    </div>
  );
};

export default Page;
