import logo from './logo.svg';
import './App.css';
import Conversor from './components/conversor';

function App() {
  return (
    <div className="App">
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
