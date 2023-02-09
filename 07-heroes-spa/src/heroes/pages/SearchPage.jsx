import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getSearchHero } from "../helpers/getSearchHero";
import { HeroCard } from "../components";
import { queries } from "@testing-library/react";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const hero = getSearchHero(q);
  const { searchText, onInputChange } = useForm({ searchText: q });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && hero.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="search a hero"
              className="form-control"
              autoComplete="off"
              onChange={onInputChange}
              value={searchText}
            />
            <button className="btn btn-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />

          {/* {q === "" ? (
            <div className="alert alert-primary">search a hero</div>
          ) : (
            hero.length === 0 && (
              <div className="alert alert-danger">no result {q}</div>
            )
          )}*/}

          <div
            className="alert alert-primary animate__animated animate__flipInX"
            style={{ display: showSearch ? "" : "none" }}
          >
            search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__flipInX"
            style={{ display: showError ? "" : "none" }}
          >
            no result {q}
          </div>
          <div className="">
            {hero.map((hero) => (
              <HeroCard key={hero.id} heroe={hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
