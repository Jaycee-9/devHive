import { addEllipsis } from "@/utils/elipsis";

const posts = [
  {
    title: "devHive",
    caption:
      "devHive is a platform designed to support amateur developers in enhancing their skills by facilitating contributions to existing projects and discovering new projects to work on. Whether you're a novice or an experienced coder, devHive is here to foster a collaborative environment where developers can grow together.",
    media: "/images/png/Explore_repository.png",
    user: "jaycee",
    userImage: "/images/png/Explore_coder.png",
    kudos: "12",
    repo: "https://github.com/Jaycee-9/devHive",
    deployedLinked: "",
    openDiscussion: [
      {
        user: "pepsi",
        comment: "bhaukal chiz bana diye bhai ji aaptoh",
      },
      {
        user: "ramlal",
        comment: "je ka dekh lio..",
      },
    ],
  },
];

function Content() {
  return (
    <div className="flex flex-wrap max-w-[1000px] mx-auto">
      {posts.map((post, index) => {
        return (
          <div
            key={index}
            className="max-w-[450px] bg-white shadow-2xl rounded-3xl p-3 mx-3 my-7"
          >
            <div className="flex">
              <img
                src={post.userImage}
                alt="user"
                className="w-[50px] rounded-[50%] border-[2px] border-blue-950"
              />
              <div className="relative px-5">
                <h1>{post.user}</h1>
                <a href={post.repo} className="text-blue-600">
                  {post.repo}
                </a>
              </div>
            </div>
            <img
              src={post.media}
              alt="media"
              className="h-[100px] max-w-[400px] w-full object-contain"
            />
            <h1 className="font-semibold capitalize">{post.title}</h1>
            <p className="">{addEllipsis(post.caption, 110)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
