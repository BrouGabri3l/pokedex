import React from 'react';

const PokemonStats = ({ pokemon }) => {
  return (
    <div className='flex max-w-lg p-3 rounded shadow-md bg-white items-center justify-center'>
      <div className='flex-grow'>
        <img
          src={pokemon.sprites.front_default}
          className='w-full'
          loading='lazy'
          alt=''
        />
      </div>
      <div className='flex flex-col'>
        <h2 className='font-bold uppercase text-lg'>{pokemon.name}</h2>
        <span>Tipo: {pokemon.types.map((type) => type.type.name)}</span>
        <ul>
          <h3>Habilidades</h3>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonStats;
