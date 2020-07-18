import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  // Hook para obtener el location
  const location = useLocation();
  //   console.log(location.search);
  // Para parsear querys, npm query-string
  const { q = '' } = queryString.parse(location.search);

  const initialSearchForm = {
    heroeTexto: q,
  };

  const [{ heroeTexto }, handleInputChange] = useForm(initialSearchForm);

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

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
          {(q==='') && <div className="alert alert-info">Search a Hero</div>}
          {(q!=='' && heroesFiltered.length === 0) && <div className="alert alert-danger">There is no a hero with {q}</div>}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
