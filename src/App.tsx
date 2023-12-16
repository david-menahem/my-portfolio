import './App.css';
import Header from './Components/Layout/Header/Header';
import Routing from './Components/Layout/Routing/Routing';
import Menu from './Components/Layout/Menu/Menu';

function App() {
  return (
    <div className="app">
      <header><Header /></header>
      <aside><Menu /></aside>
      <main><Routing /></main>
    </div>
  );
}

export default App;
