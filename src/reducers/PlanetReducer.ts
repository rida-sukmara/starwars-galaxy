import {
  Planet,
  Meta,
  PlanetDispatchTypes,
  PLANET_FAIL,
  PLANET_INIT,
  PLANET_LOADING,
  PLANET_SUCCESS,
  PLANET_DETAIL_GET,
  PLANET_DETAIL_FAIL,
  PLANET_DETAIL_SUCCESS,
  PLANET_WISHLIST_TOGGLE,
} from '../actions/PlanetActionTypes';

interface DefaultStateI {
    loading: boolean,
    planets: Planet[],
    wishlist: Planet[],
    meta: Meta,
    planet?: Planet,
}

const defaultState: DefaultStateI = {
  loading: false,
  planets: [],
  wishlist: [],
  meta: {
    count: 0,
  },
};

const PlanetReducer = (
  state: DefaultStateI = defaultState,
  action: PlanetDispatchTypes = { type: PLANET_INIT },
) => {
  switch (action.type) {
    case PLANET_INIT:
      return {
        ...state,
        planets: [],
        whishlist: state.wishlist,
      };
    case PLANET_LOADING:
    case PLANET_DETAIL_GET:
      return {
        ...state,
        loading: true,
      };
    case PLANET_FAIL:
    case PLANET_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
      };
    case PLANET_SUCCESS: {
      const { planets: _planets, meta } = action.payload;
      return {
        ...state,
        loading: false,
        meta,
        planets: [...state.planets, ..._planets],
      };
    }
    case PLANET_DETAIL_SUCCESS:
      return {
        ...state,
        planet: action.payload,
        loading: false,
      };
    case PLANET_WISHLIST_TOGGLE: {
      const { wishlist } = state;
      const index = wishlist.findIndex((it) => it.name === action.payload.name);
      if (index > -1) {
        wishlist.splice(index, 1);
      } else {
        wishlist.push(action.payload);
      }
      return {
        ...state,
        wishlist,
      };
    }
    default:
      return state;
  }
};

export default PlanetReducer;
