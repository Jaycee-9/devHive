function Description({ code }) {
  return (
    <div className="max-w-[1200px] w-full mx-auto ">
      <div className="flex items-center bg-white  shadow-lg overflow-hidden">
        <img
          src={code.media}
          alt="media"
          className="w-1/2 h-[500px]  object-cover"
        />
        <div className="w-1/2 relative h-[500px] p-8 flex flex-col justify-center ">
          <h1 className="text-4xl font-bold mb-4 absolute top-1">
            {code.title}
          </h1>
          <a
            href={code.repo}
            className="text-blue-600 underline absolute top-12"
          >
            {code.repo}
          </a>
          <h2 className="text-2xl font-medium relative top-10 overflow-y-auto">
            {code.caption}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Description;
