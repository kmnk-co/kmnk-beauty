import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className="mb-10 bg-foreground">
      <div className="mx-auto max-w-screen-lg">
        <Image
          src={"/jumbotron.png"}
          alt="jumbotron.png"
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

export default Jumbotron;
