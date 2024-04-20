import supabaseData from "@/data/supabase";
import OngoingCard from "./OngoingCard";

type OngoingProps = {
  id: number;
  description?: string;
  href?: string;
};
const Ongoing = async () => {
  const ongoingData = await supabaseData("Ongoing");
  return (
    <div id="ongoing">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Ongoing</h2>

      <div className="w-full flex flex-col">
        {ongoingData
          ?.slice()
          .reverse()
          .slice(0, 2)
          .map((ongoing: OngoingProps) => (
            <OngoingCard key={ongoing.id} {...ongoing} />
          ))}
      </div>
    </div>
  );
};

export default Ongoing;
