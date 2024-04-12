const About = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse md:items-center md:justify-between gap-4">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold">Akash Patro</h1>
          <p className="text-zinc-700 dark:text-zinc-400 text-lg">
            Next.JS Developer
          </p>
        </div>
        <div className="relative h-fit w-fit">
          <div className="h-20 w-20 border border-zinc-300 overflow-hidden rounded-md">
            <span className="absolute w-[150%] -top-[2px] -right-[20px] h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            <span className="absolute w-[3px] -right-[2px] -top-[20%] h-[150%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

            <img
              src="/akash_img.jpg"
              alt="akash image"
              className="object-cover w-full h-full brightness-110 contrast-110"
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-zinc-600 dark:text-zinc-500">
          Transforming ideas into digital reality, building SaaS and web apps.
        </p>
      </div>
    </div>
  );
};

export default About;
