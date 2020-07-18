import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
  /**
   * Hook para extraer los parametros que vengan por el url
   */
  const params = useParams();
  const heroeId = params.heroeId;

  // Hay que controlar que no sea undefined
  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        ></img>
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5> Characters </h5>
        <p> {characters} </p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
