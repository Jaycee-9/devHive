export default function Discussion({ code }) {
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
    <div className="max-w-[1200px] h-[350px] mx-auto px-6 shadow-lg bg-white rounded-lg overflow-y-auto">
      {code.discussions
        ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((comment, index) => (
          <ul
            key={index}
            className="border-b border-gray-200 last:border-0 py-4"
          >
            <li className="flex items-start justify-between space-x-4">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/images/png/Explore_coder.png"
                    alt={comment.username}
                  />
                </div>
                <div>
                  <h1 className="text-lg font-medium text-gray-900">
                    {comment.username}
                  </h1>
                  <p className="mt-1 text-gray-700">{comment.discussion}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <p className="text-gray-500 text-sm">
                  {formatISTDate(comment.createdAt)}
                </p>
              </div>
            </li>
          </ul>
        ))}
    </div>
  );
}
