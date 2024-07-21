function UserPost({ userPost }) {
  console.log(userPost);
  return (
    <div className="container mx-auto p-4">
      {userPost.length === 0 ? (
        <p className="text-center text-gray-500">
          No posts yet. Start uploading one!
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {userPost
            .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
            .map((post, index) => (
              <li
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={post.media}
                  alt="media"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{post.caption}</h1>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default UserPost;
