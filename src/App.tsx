import { useState } from 'react'

import './App.css'
import PokemonDisplay from './components/pokemon-display'
import PokemonForm from './components/pokemon-form'
import PokemonResult from './components/pokemon-result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto my-5'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <PokemonDisplay/>
          <PokemonForm/>
          <PokemonResult/>
        </div>
      </div>
    </div>
  )
}

export default App
