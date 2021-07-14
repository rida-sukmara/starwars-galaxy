import { Dispatch } from 'redux';
import axios from 'axios';
import {
  PLANET_FAIL, PLANET_LOADING, PlanetDispatchTypes, PLANET_SUCCESS, PLANET_INIT,
} from './PlanetActionTypes';

export const ClearPlanet = () => (dispatch: Dispatch<PlanetDispatchTypes>) => {
  dispatch({ type: PLANET_INIT });
};

export const GetPlanet = (uri?: string, name: string = 'a') => async (
  dispatch: Dispatch<PlanetDispatchTypes>,
) => {
  try {
    dispatch({ type: PLANET_LOADING });
    const endpoint = uri || `https://swapi.dev/api/planets/?page=1&search=${name}`;
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

export const GetPlanetDetail = () => async (dispatch: Dispatch<PlanetDispatchTypes>) => {
  try {
    dispatch({
      type: PLANET_LOADING,
    });
  } catch (e) {
    dispatch({
      type: PLANET_FAIL,
    });
  }
};
