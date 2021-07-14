import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../Store';
import { ClearPlanet, GetPlanet } from '../../actions/PlanetActions';
import {
  Nav,
  MenuItem,
  SearchInput,
  Main,
  SearchResult,
  Container,
  Loading,
} from './Home.styles';

import { DefaultButton } from '../../styles/Button.styles';
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
  const [keyword, setKeyword] = useState('');
  const [searching, setSearching] = useState(false);
  const lastPage = useRef<HTMLDivElement>();
  const searchKeyword = () => {
    dispatch(ClearPlanet());
    dispatch(GetPlanet(undefined, keyword));
    setSearching(true);
  };

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
        <SearchInput placeholder="Search by Planet Name" onChange={(e) => setKeyword(e.target.value)} value={keyword} />
        <DefaultButton onClick={() => searchKeyword()}>Search</DefaultButton>
        <MenuItem href="#">Wishlist</MenuItem>
      </Nav>
      <Main>
        <SearchResult>{searching ? `Found ${meta.count} Planets` : ''}</SearchResult>
        {planets.map((_planet, index) => {
          if (planets.length === index + 1) {
            return (
              <PlanetCard
                {..._planet}
                ref={lastPage}
                key={_planet.name}
              />
            );
          }
          return (
            <PlanetCard
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
