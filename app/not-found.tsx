import Image from "next/image";

const Page = () => {
  return (
    <div className="cmp-container">
      <div className="mx-auto my-5 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Image
          src={"/404-dino.png"}
          alt="404-dino.png"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={554}
          height={450}
        />
      </div>
    </div>
  );
};

export default Page;
