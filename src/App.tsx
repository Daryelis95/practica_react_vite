import { useEffect, useState } from 'react'

import './App.css'
import PokemonDisplay from './components/pokemon-display'
import PokemonForm from './components/pokemon-form'
import PokemonResult from './components/pokemon-result'

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      const data = await response.json()
      setPokemonName(data.name)
      setPokemonImage(
        data.sprites.other.home.front_default ||
        data.sprites.other['official-artwork'].front_default
      )
    } catch (error) {
      console.error('Error fetching pokemon:', error)
    }
  }

  useEffect(() => {
    fetchRandomPokemon()
  }, [])

  const handleGuess = (userGuess: string) => {
    setShowAnswer(true)
    setIsCorrect(userGuess.toLowerCase().trim() === pokemonName.toLowerCase())
  }

  const handlePlayAgain = () => {
    setShowAnswer(false)
    setIsCorrect(null)
    fetchRandomPokemon()
  }

  return (
    <div className='container mx-auto my-5'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <PokemonDisplay
            image={pokemonImage}
            name={pokemonName}
            showAnswer={showAnswer}
          />
          <PokemonForm onGuess={handleGuess} disabled={showAnswer} reset={!showAnswer} />
          <PokemonResult
            isCorrect={isCorrect}
            pokemonName={pokemonName}
            onPlayAgain={handlePlayAgain}
          />
        </div>
      </div>
    </div>
  )
}

export default App
