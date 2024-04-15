import TweetCard from "@/components/TweetCard";
import tweetsData from "@/data/tweetsData.json";

const Tweet = () => {
  const tweets = tweetsData.tweets[0];

  return (
    <main className="max-w-2xl mx-auto px-6 md:px-0 mt-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Tech Tweets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TweetCard
          title={tweets["tweet-8"].title}
          description={tweets["tweet-8"].description}
          date={tweets["tweet-8"].date}
          href={tweets["tweet-8"].href}
        />
        <TweetCard
          title={tweets["tweet-7"].title}
          description={tweets["tweet-7"].description}
          date={tweets["tweet-7"].date}
          href={tweets["tweet-7"].href}
        />
        <TweetCard
          title={tweets["tweet-6"].title}
          description={tweets["tweet-6"].description}
          date={tweets["tweet-6"].date}
          href={tweets["tweet-6"].href}
        />
        <TweetCard
          title={tweets["tweet-5"].title}
          description={tweets["tweet-5"].description}
          date={tweets["tweet-5"].date}
          href={tweets["tweet-5"].href}
        />
        <TweetCard
          title={tweets["tweet-4"].title}
          description={tweets["tweet-4"].description}
          date={tweets["tweet-4"].date}
          href={tweets["tweet-4"].href}
        />
        <TweetCard
          title={tweets["tweet-3"].title}
          description={tweets["tweet-3"].description}
          date={tweets["tweet-3"].date}
          href={tweets["tweet-3"].href}
        />
        <TweetCard
          title={tweets["tweet-2"].title}
          description={tweets["tweet-2"].description}
          date={tweets["tweet-2"].date}
          href={tweets["tweet-2"].href}
        />
        <TweetCard
          title={tweets["tweet-1"].title}
          description={tweets["tweet-1"].description}
          date={tweets["tweet-1"].date}
          href={tweets["tweet-1"].href}
        />
      </div>
    </main>
  );
};

export default Tweet;
