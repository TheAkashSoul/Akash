const OngoingCard = ({
  description,
  href,
}: {
  description?: string;
  href?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200"
    >
      {description}
    </a>
  );
};

export default OngoingCard;
