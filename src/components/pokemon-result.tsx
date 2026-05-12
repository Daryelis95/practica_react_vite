interface PokemonResultProps {
  isCorrect: boolean | null
  pokemonName: string
  onPlayAgain: () => void
}

const PokemonResult = ({ isCorrect, pokemonName, onPlayAgain }: PokemonResultProps) => {
  if (isCorrect === null) return null

  return (
    <div
      className={`mt-3 p-4 text-center rounded ${
        isCorrect ? 'bg-success-subtle' : 'bg-danger-subtle'
      }`}
    >
      <h2>
        {isCorrect ? '¡Correcto! 🎉' : `¡Incorrecto! Era ${pokemonName} 😢`}
      </h2>
      <button className='btn btn-dark mt-2' onClick={onPlayAgain}>
        Volver a jugar
      </button>
    </div>
  )
}

export default PokemonResult
