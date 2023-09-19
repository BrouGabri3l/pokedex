import { atom } from 'recoil';

export const pokemonAtom = atom({
  key: 'pokemonAtom',
  default: {},
});

export const pokemonModalAtom = atom({
  key: 'pokemonModalAtom',
  default: false,
});

export const searchFilter = atom({
  key: 'searchFilterAtom',
  default: '',
});
