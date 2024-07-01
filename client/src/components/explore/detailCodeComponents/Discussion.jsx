export default function Discussion({ code }) {
  console.log(code);
  return (
    <div className="max-w-[1200px] h-[350px] mx-auto px-6 shadow-lg bg-white rounded-lg overflow-y-auto">
      {code.discussions.map((comment) => {
        return (
          <ul className="border-b border-gray-200 last:border-0 py-4">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
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
            </li>
          </ul>
        );
      })}
    </div>
  );
}
