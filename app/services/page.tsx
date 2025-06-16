const Prices = [
  { Duration: 15, Cost: 30 },
  { Duration: 30, Cost: 50 },
  { Duration: 45, Cost: 60 },
  { Duration: 60, Cost: 70 },
];

const Page = () => {
  const Format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="cmp-container">
      <div className="mt-3 mb-5 text-4xl text-center prompt">Services</div>
      <div className="my-5">
        <div className="my-3 text-3xl text-center lora-normal-oblique">
          Electrolysis
        </div>
        {Prices.map((value, index) => (
          <div key={index} className="my-1 flex flex-row place-content-center">
            <div className="pr-3 text-lg prompt">{value.Duration} Minutes</div>
            <div className="pl-3 text-lg prompt">
              {Format.format(value.Cost)}
            </div>
          </div>
        ))}
        <div className="my-1 text-lg text-center hind-light">
          * All services are by appointment only.
        </div>
        <div className="my-1 text-lg text-center hind-light">
          ** Cancellations with less than 24-hour notice will be subject to a
          $10 service fee.
        </div>
      </div>
      <div className="my-5">
        <div className="my-3 text-3xl text-center lora-normal-oblique">
          More Ways to Save
        </div>
        <ol className="text-lg text-center hind-light">
          <li>$5 off when you pay with cash</li>
          <li>$5 off when you refer a friend</li>
          <li>$5 off when you leave a 5* Google Review</li>
          <li>$5 off for being a member of the LGBT+</li>
        </ol>
      </div>
    </div>
  );
};

export default Page;
