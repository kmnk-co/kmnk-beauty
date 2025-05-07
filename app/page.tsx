import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-foreground">
      <div className="mx-auto max-w-screen-xl">
        <Image
          src={"/jumbotron.png"}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={16}
          height={9}
        />
      </div>
    </div>
  );
};

export default Page;
