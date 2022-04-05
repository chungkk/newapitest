
import logo from './logo.svg';
import './App.css';
import { getMovie, addMovies, removeMovie } from './Servers'
import { useState } from 'react';


function App() {
  const [listMv, setListMv] = useState([]);
  const onGetMovie = async () => {

    // const list = getMovie().then(data => console.log('data', data ))
    const list = await getMovie()
    console.log('list', list.data)
    setListMv(list.data)
  }
  const onUpdateMovie = async () => {
    const list = await addMovies({
      "name": "Mommie Dearest 2345",
      "releaseYear": "1999"
    })

    console.log('list', list)
  }
  const onRemoveMovie = (id) => async () => {
    const list = await removeMovie(id)
  }
  return (
    <div className="App">
      <div style={{ padding: 50 }}
        onClick={onGetMovie}>Get Movie</div>
      {listMv?.map(e => <div>{e.name} - <span onClick={onRemoveMovie(e.id)}>- Delete</span></div>)}
      <div style={{ padding: 50 }}
        onClick={onUpdateMovie}>Update Movie</div>
    </div>
  );
}

export default App;

