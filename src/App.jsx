import './App.css';
import Card from './components/Card';
import { useFetchCharacters } from './hooks/useFecthCharacters';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

function App() {
  const {data: pokeData, loading: pokeLoading, error: pokeError} = useFetchCharacters(urlPokemon)
  const {data: rickData, loading: rickLoading, error: rickError} = useFetchCharacters(urlRick)

  return (
    <>
      {pokeLoading ? (
        <h2>Loading...</h2>
        ) : (
          <Card charName={pokeData.name} charImage={pokeData.sprites.front_default} />
        )}
      {pokeError && <h2>{pokeError}</h2>}
      {rickLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Card charName={rickData.name} charImage={rickData.image} loading={rickLoading} error={rickError}/>
      )}
      {rickError && <h2>{rickError}</h2>}
    </>
  );
}

export default App;
