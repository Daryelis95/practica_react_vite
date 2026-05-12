import { useState, useEffect } from 'react'

interface PokemonFormProps {
  onGuess: (guess: string) => void
  disabled: boolean
  reset: boolean
}

const PokemonForm = ({ onGuess, disabled, reset }: PokemonFormProps) => {
  const [input, setInput] = useState('')

  useEffect(() => {
    if (reset) {
      setInput('')
    }
  }, [reset])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onGuess(input)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mt-3'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='¿Quién es ese Pokémon?'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
        />
        <button
          type='submit'
          className='btn btn-dark'
          disabled={disabled || !input.trim()}
        >
          Jugar
        </button>
      </div>
    </form>
  )
}

export default PokemonForm
