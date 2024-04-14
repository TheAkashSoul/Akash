import OngoingCard from "./OngoingCard";

const Ongoing = () => {
  return (
    <div id="ongoing">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Ongoing</h2>

      <div className="w-full flex flex-col">
        <OngoingCard
          description="Currently in the process of wireframing and preparing to implement the UI for next SaaS product."
          href=""
        />
      </div>
    </div>
  );
};

export default Ongoing;
