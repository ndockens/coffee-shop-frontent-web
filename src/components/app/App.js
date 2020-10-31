import './App.css';
import Home from '../../pages/home/Home';
import Navigation from '../navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;
