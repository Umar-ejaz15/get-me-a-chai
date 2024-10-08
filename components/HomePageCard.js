import React from "react";

const HomePageCard = ({ id, card }) => {
  const { title, description, image } = card;

  return (
    <div
      id={id}
      className="text-white rounded-lg shadow-md p-3 max-w-xs mx-auto"
    >
      <div className="flex flex-col items-center">
        <img

          src={`${image}`}
          alt=""
          className="w-20 bg-zinc-700  h-20 object-cover object-top rounded-full mb-2"
        />
        <h1 className="text-lg font-bold mb-1">{title}</h1>
        <p className="text-xs text-center">{description}</p>
      </div>
    </div>
  );
};

export default HomePageCard;
