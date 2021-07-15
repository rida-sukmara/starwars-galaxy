import { Dispatch } from 'redux';
import axios from 'axios';
import {
  PLANET_FAIL,
  PLANET_LOADING,
  PlanetDispatchTypes,
  PLANET_SUCCESS,
  PLANET_INIT,
  PLANET_DETAIL_GET,
  Planet,
  PLANET_DETAIL_SUCCESS,
  PLANET_DETAIL_FAIL,
  PLANET_WISHLIST_TOGGLE,
} from './PlanetActionTypes';

const BASE_URI = 'https://swapi.dev/api';

export const ClearPlanet = () => (dispatch: Dispatch<PlanetDispatchTypes>) => {
  dispatch({ type: PLANET_INIT });
};

export const GetPlanet = (uri?: string) => async (
  dispatch: Dispatch<PlanetDispatchTypes>,
) => {
  try {
    dispatch({ type: PLANET_LOADING });
    const endpoint = uri || `${BASE_URI}/planets?page=1`;
    if (!uri) {
      dispatch({ type: PLANET_INIT });
    }
    const response = await axios.get(endpoint);
    const {
      results: planets, count, next, previous,
    } = response.data;
    dispatch({
      type: PLANET_SUCCESS,
      payload: { planets, meta: { count, next, previous } },
    });
  } catch (e) {
    dispatch({
      type: PLANET_FAIL,
    });
  }
};

export const GetPlanetDetail = (id: string) => async (dispatch: Dispatch<PlanetDispatchTypes>) => {
  try {
    dispatch({
      type: PLANET_DETAIL_GET,
    });
    const response = await axios.get<Planet>(`${BASE_URI}/planets/${id}`);
    const { data: payload } = response;
    dispatch({
      type: PLANET_DETAIL_SUCCESS,
      payload,
    });
  } catch (e) {
    dispatch({
      type: PLANET_DETAIL_FAIL,
    });
  }
};

export const ToggleWishlist = (payload: Planet) => (dispatch: Dispatch<PlanetDispatchTypes>) => {
  dispatch({ type: PLANET_WISHLIST_TOGGLE, payload });
};
