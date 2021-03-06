import React from "react";
import { useNavigate } from "react-router-dom";
import "./card-style.css";

function Card({ item }) {
  const navigate = useNavigate();
  const playList = () => {
    navigate("/playlist");
    localStorage.setItem("data", JSON.stringify(item));
  };
  return (
    <div onClick={() => playList()} className="card">
      <div className="img-box relative">
        <img src={item.image} alt="" />
        <button className="card-button">
          <svg
            role="img"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            class="Svg-sc-1bi12j5-0 jgfuCe"
          >
            <path
              fill="#000"
              d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
            ></path>
          </svg>
        </button>
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
}

export default Card;
