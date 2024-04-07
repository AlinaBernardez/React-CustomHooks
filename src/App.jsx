import './App.css';
import Card from './components/Card';
import { useFetchCharacters } from './hooks/useFecthCharacters';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

function App() {
  const fetchPoke = useFetchCharacters(urlPokemon)
  const pokeData = fetchPoke.data

  const fetchRick = useFetchCharacters(urlRick)
  const rickData = fetchRick.data

  return (
    <>
      {fetchPoke.loading && <h2>Loading...</h2>}
      {fetchPoke.error && <h2>{fetchPoke.error.message}</h2>}
      {pokeData && <Card charName={pokeData.name} charImage={pokeData.sprites.front_default}/>}
      {fetchRick.loading && <h2>Loading...</h2>}
      {fetchRick.error && <h2>{fetchRick.error.message}</h2>}
      {rickData && <Card charName={rickData.name} charImage={rickData.image}/>}
    </>
  );
}

export default App;
