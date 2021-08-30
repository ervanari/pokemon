import React from "react";
import { Link } from "react-router-dom";
import back from "../images/back.png";
import forward from "../images/forward.png";
import "./Action.css";

function Action({ pokemon, isCatching, isSuccessful }) {
  return (
    <>
      <div className="action-pokemon-container">
        <div className="action-pokemon-title">
          {isCatching && isSuccessful
            ? "SUCCESSFUL!"
            : !isCatching
            ? "RELEASED!"
            : "FAILED!"}
        </div>
        <div className="action-pokemon-subtitle">
          {isCatching && isSuccessful
            ? "let's catch it again.."
            : !isCatching
            ? "Goodbye friend!"
            : "a little more come on.."}
        </div>
        <div className="action-pokemon-button-container">
          {isCatching && isSuccessful ? (
            <Link
              className="action-pokemon-button"
              to={{
                pathname: "/pokemon-details",
                state: { pokemon: pokemon },
              }}
            >
              <img src={forward} alt={forward} />
            </Link>
          ) : (
            <Link
              className="action-pokemon-button"
              to={{
                pathname: "/",
              }}
            >
              <img src={back} alt={back} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Action;
