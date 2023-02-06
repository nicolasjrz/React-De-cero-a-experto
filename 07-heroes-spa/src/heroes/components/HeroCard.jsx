import React from "react";
import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;
  return <p>{characters}</p>;
};

export const HeroCard = ({ heroe }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = heroe;

  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__bounceInDown">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img className="card-img" src={heroImgUrl} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
