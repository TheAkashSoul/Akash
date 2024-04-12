type Props = {
  title?: string;
  description?: string;
  tags?: string[];
  href?: string;
};
const ProjectCard = ({ title, description, tags, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-4 hover:shadow-lg rounded-xl  transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-30 dark:from-[#202D2E] dark:to-[#303428]" />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <div className="p-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 pt-2">
            {title}
          </h4>
          <p className="leading-6 text-gray-700 dark:text-gray-300 text-base pt-5">
            {description}
          </p>
          <div className="pt-5 flex flex-wrap md:flex-row">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50 mr-2 px-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
