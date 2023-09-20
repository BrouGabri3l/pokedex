const PokemonStats = ({ pokemon }) => {
  return pokemon ? (
    <div>
      <div className='flex-grow'>
        <img
          src={pokemon.sprites.front_default}
          className='w-full'
          loading='lazy'
          alt=''
        />
      </div>
      <div className='flex flex-col text-white'>
        <h2 className='font-bold uppercase text-lg'>{pokemon.name}</h2>
        <span>
          Tipo:
          {pokemon.types
            ? pokemon.types.map((type) => type.type.name + ',')
            : null}
        </span>
        <ul>
          <h3 className='font-bold'>Habilidades</h3>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default PokemonStats;
