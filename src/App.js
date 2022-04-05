
import logo from './logo.svg';
import './App.css';
import { getMovie, addMovies, removeMovie, editMovies } from './Servers'
import { useState } from 'react';


function App() {
  const [listMv, setListMv] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputYear, setInputYear] = useState('');
  const onGetMovie = async () => {

    // const list = getMovie().then(data => console.log('data', data ))
    const list = await getMovie()
    console.log('list', list.data)
    setListMv(list.data)
  }
  const onUpdateMovie = async () => {
    const list = await addMovies({ // 3
      "name": "Mommie Dearest 2345",
      "releaseYear": '1999'
    })

    console.log('list', list) // 1 
    onGetMovie()
  }

  const onUpdateMovie2 = async () => {
    const list = await addMovies({
      "name": inputName,
      "releaseYear": inputYear
    })
    onGetMovie()
    console.log('list 2', list)

  }

  const onRemoveMovie = (kk) => async () => {
    const list = await removeMovie(kk);
    onGetMovie()
  }


  const onChangeName = async (ev) => {
    setInputName(ev.target.value);
    console.log('inputName', inputName)
  }
  const onChangeYear = async (ev) => {
    setInputYear(ev.target.value);
  };
  const updateData = (item, bb, cc) => async () => {
    const list = await editMovies(cc);
    setInputName(item)
    setInputYear(bb)

  }


  const onEditMovies = async () => {
    const list = await editMovies({
      "name": inputName,
      "releaseYear": inputYear
    })
    onGetMovie()
  }

  return (
    <div className="App">
      <button
        onClick={onGetMovie}>Get Movie</button>
      <div style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'left',
        fontWeight: 'bold'
      }}>{listMv?.map(e => <div onClick={updateData(e.name, e.releaseYear, e.id)}>{e.name} - {e.releaseYear}<button onClick={onRemoveMovie(e.id)}> - Delete</button></div>)}</div>

      <div> <button onClick={onUpdateMovie}>Update Movie</button></div>
      <input value={inputName} onChange={onChangeName} />
      <input value={inputYear} onChange={onChangeYear} />
      <button
        onClick={onUpdateMovie2}>Update Movie 2</button>
      <button
        onClick={onEditMovies}>Update Movie 3</button>
    </div>
  );
}

export default App;

