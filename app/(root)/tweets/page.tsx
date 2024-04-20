import TweetCard from "@/components/TweetCard";
import supabaseData from "@/data/supabase";

type TweetProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  href: string;
};
const Tweet = async () => {
  const tweetsData = await supabaseData("Tweets");

  return (
    <main className="max-w-2xl mx-auto px-6 md:px-0 mt-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Tech Tweets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tweetsData
          ?.slice()
          .reverse()
          .map((tweet: TweetProps) => (
            <TweetCard key={tweet.title} {...tweet} />
          ))}
      </div>
    </main>
  );
};

export default Tweet;
