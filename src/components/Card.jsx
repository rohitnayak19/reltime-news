import React from "react";

const Card = ({ article }) => {
  // console.log(article);

  const { urlToImage, publishedAt, author, title, description, url } = article;

  // Fallback image URL
  const fallbackImage =
    "https://thelawgivers.com/wp-content/uploads/2016/04/dummy-post-horisontal-300x171.jpg";

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={urlToImage || fallbackImage} // Use fallback if urlToImage is missing
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 hover:text-purple-700 transition-colors duration-200 leading-tight">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {publishedAt} • {author}
        </p>
        <p className="text-gray-700 mt-2 line-clamp-2">{description}</p>
        <button className="mt-4 text-left w-full text-blue-500 font-semibold hover:underline">
          <a href={url} target="_blank">
            {" "}
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
