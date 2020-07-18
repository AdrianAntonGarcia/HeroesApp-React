import React from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

export const SearchScreen = ({ history }) => {
  // Hook para obtener el location
  const location = useLocation();
  //   console.log(location.search);
  // Para parsear querys, npm query-string
  const { q = '' } = queryString.parse(location.search);

  const heroesFiltered = heroes;

  const initialSearchForm = {
    heroeTexto: q,
  };

  const [{ heroeTexto }, handleInputChange] = useForm(initialSearchForm);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${heroeTexto}`);
    // reset();
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form>
            <input
              type="text"
              name="heroeTexto"
              placeholder="Find your hero"
              onChange={handleInputChange}
              autoComplete="off"
              className="form-control"
              value={heroeTexto}
            ></input>
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
              onClick={handleSearch}
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
