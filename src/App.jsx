import logo from './logo.svg';
import './App.css';
import Button from './Button';
import CharacterPage from './pages/CharacterPage';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <CharacterPage />
      </header>
    </div>
  );
}

export default App;
