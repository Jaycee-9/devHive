function Description({ code }) {
  const formatISTDate = (dateString) => {
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };

    return new Date(dateString).toLocaleString("en-IN", options);
  };
  return (
    <div className="w-full mx-auto ">
      <div className="flex items-center bg-white   overflow-hidden">
        <img
          src={code.media}
          alt="media"
          className="w-1/2 h-[350px]  object-cover"
        />
        <div className="w-1/2 relative h-[350px] p-8 flex flex-col justify-center ">
          <h1 className="text-4xl font-bold mb-4 absolute top-1">
            {code.title}
          </h1>
          <a
            href={code.repo}
            className="text-blue-600 underline absolute top-12"
          >
            {code.repo}
          </a>

          <p className="absolute top-3 right-3">
            {formatISTDate(code.createDate)}
          </p>
          <h2 className="text-xl pb-3 font-medium relative top-10 overflow-y-auto">
            {code.caption}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Description;
