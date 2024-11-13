import logo from './logo.svg';
import './App.css';
import SaludoCapullos from './saludoCapullos.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Primera app React</h1>
      <SaludoCapullos nombre={"Felipe"}/>

      </header>
    </div>
  );
}

export default App;
