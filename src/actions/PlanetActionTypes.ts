export const PLANET_INIT = 'PLANET_INIT';
export const PLANET_LOADING = 'PLANET_LOADING';
export const PLANET_FAIL = 'PLANET_FAIL';
export const PLANET_SUCCESS = 'PLANET_SUCCESS';

export type Planet = {
    name: string;
    diameter: string;
    gravity: string;
    terrain: string;
    population: string;
    created: string
}

export type Meta = {
    count: number;
    next?: string;
    previous?: string;
}

interface PlanetInit {
    type: typeof PLANET_INIT
}

interface PlanetLoading {
    type: typeof PLANET_LOADING
}

interface PlanetFail {
    type: typeof PLANET_FAIL
}

interface PlanetSuccess {
    type: typeof PLANET_SUCCESS,
    payload: PayloadSuccessList,
}

interface PayloadSuccessList {
    planets: Planet[],
    meta: Meta
}

export type PlanetDispatchTypes = PlanetLoading | PlanetFail | PlanetSuccess | PlanetInit;
