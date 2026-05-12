interface PokemonDisplayProps {
  image: string
  name: string
  showAnswer: boolean
}

const PokemonDisplay = ({ image, name, showAnswer }: PokemonDisplayProps) => {
  return (
    <div className='card'>
      <div className='card-header bg-white'>
        <h1 className='text-center text-dark'>
          {showAnswer ? name : '¿Quién es ese Pokémon?'}
        </h1>
      </div>
      <div className='card-body'>
        <img
          src={image}
          alt={showAnswer ? name : 'Pokémon misterioso'}
          className='img-fluid mx-auto d-block'
          style={{
            maxHeight: '300px',
            filter: showAnswer ? 'none' : 'brightness(0)',
            transition: 'filter 0.3s ease-in-out'
          }}
        />
      </div>
    </div>
  )
}

export default PokemonDisplay
