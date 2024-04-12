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
        <div className="h-20 w-20 bg-black dark:bg-white overflow-hidden rounded-md">
          <img
            src="/akash_img.jpg"
            className="object-cover w-full h-full brightness-110 contrast-110"
          />
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
