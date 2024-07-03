import React from "react";

function Kudos({ code }) {
  console.log(code);
  return (
    <div className="max-w-[800px]  h-[350px] mx-auto px-6 shadow-lg bg-white rounded-lg overflow-y-auto">
      {code.likes.length === 0 ? (
        <h1 className="text-center text-xl font-bold text-gray-800">
          Wow, such empty
        </h1>
      ) : (
        <div>
          {code.likes
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((kudos, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-2 mb-2">
                <p className="text-lg text-gray-800">{kudos.username}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Kudos;
