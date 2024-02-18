import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <RowPost title="New movie"  url='users'/>
    <RowPost title="Animation" url='animation'  />
    <RowPost title="Watch List" url='watchList'  />
  </div>
  );
}

export default App;
