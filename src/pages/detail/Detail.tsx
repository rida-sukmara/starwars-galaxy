import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetPlanetDetail, ToggleWishlist } from '../../actions/PlanetActions';
import {
  Nav,
  MenuItem,
} from '../home/Home.styles';

import wishlistActiveImg from '../../assets/start_active.png';
import wishlistImg from '../../assets/start_inactive.png';

import {
  Card,
  Container,
  Main,
  Title,
  Wishlist,
  WishlistActive,
  Label,
} from './Detail.styles';
import { AppStore } from '../../Store';
import { Planet } from '../../actions/PlanetActionTypes';

interface RouteParams {
  planetId: string;
}

function Detail() {
  const { planetId } = useParams<RouteParams>();
  const dispatch = useDispatch();

  const planetState = useSelector((state: AppStore) => state.planet);
  const { planet, wishlist = [] } = planetState;

  function getDetail(id: string) {
    dispatch(GetPlanetDetail(id));
  }

  const inWishlist = wishlist.filter((it: Planet) => (it.name === planet?.name)).length > 0;

  function toggleWishlist() {
    if (planet !== undefined) {
      dispatch(ToggleWishlist(planet));
    }
  }

  useEffect(() => {
    getDetail(planetId);
  }, []);

  return (
    <Container>
      <Nav>
        <MenuItem href="/">Star Wars Galaxy</MenuItem>
        <MenuItem href="/wishlist">Wishlist</MenuItem>
      </Nav>
      <Main>
        <Card>
          <Title>{planet?.name}</Title>
          {inWishlist
            ? <WishlistActive onClick={() => toggleWishlist()} src={wishlistActiveImg} />
            : <Wishlist src={wishlistImg} onClick={() => toggleWishlist()} alt="Not Found" />}
        </Card>
        <Card>
          <Label>Gravity</Label>
          <Label>{planet?.gravity}</Label>
        </Card>
        <Card>
          <Label>Terrain</Label>
          <Label>{planet?.terrain}</Label>
        </Card>
        <Card>
          <Label>Population</Label>
          <Label>{planet?.population}</Label>
        </Card>
        <Card>
          <Label>Created</Label>
          <Label>{planet?.created}</Label>
        </Card>
      </Main>
    </Container>
  );
}

export default Detail;
