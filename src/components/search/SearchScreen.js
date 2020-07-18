import React from 'react';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {
  const heroesFiltered = heroes;

  const initialSearchForm = {
    heroeTexto: '',
  };

  const [{ heroeTexto }, handleInputChange, reset] = useForm(initialSearchForm);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(heroeTexto);
    reset();
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
