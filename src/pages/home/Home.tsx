import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../Store';
import { GetPlanet } from '../../actions/PlanetActions';
import {
  Nav,
  MenuItem,
  Main,
  Container,
  Loading,
} from './Home.styles';

import PlanetCard from '../../components/planet/PlanetCard';

function Home() {
  const planetState = useSelector((_state: AppStore) => _state.planet);
  const { loading, planets, meta } = planetState;
  const dispatch = useDispatch();
  const getPlanets = (uri?: string, _keyword: string = '') => {
    if (!loading) {
      dispatch(GetPlanet(uri, _keyword));
    }
  };
  const lastPage = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && typeof meta.next === 'string') {
        getPlanets(meta.next);
        if (lastPage.current) {
          observer.unobserve(lastPage.current);
        }
      }
    }, { threshold: 1 });
    if (lastPage.current) {
      observer.observe(lastPage.current);
    }
  }, [loading, meta]);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Container>
      <Nav>
        <MenuItem href="#">Star Wars Galaxy</MenuItem>
        <MenuItem href="/wishlist">Wishlist</MenuItem>
      </Nav>
      <Main>
        {planets.map((_planet, index) => {
          if (planets.length === index + 1) {
            return (
              <PlanetCard
                id={index + 1}
                {..._planet}
                ref={lastPage}
                key={_planet.name}
              />
            );
          }
          return (
            <PlanetCard
              id={index + 1}
              {..._planet}
              key={_planet.name}
            />
          );
        })}
        {loading ? <Loading className="text-center">Please wait ...</Loading> : '' }
      </Main>
    </Container>
  );
}

export default Home;
