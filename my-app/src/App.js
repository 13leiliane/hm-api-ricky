import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import './App.css'
// import Card from './components/Card.jsx'
// import Cards from './components/Cards.jsx'
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'

// function App () {
//   return (
//     <div className='App' style={{ padding: '25px' }}>
//       <div>
//         <Card
//           name={Rick.name}
//           species={Rick.species}
//           gender={Rick.gender}
//           image={Rick.image}
//           onClose={() => window.alert('Emulamos que se cierra la card')}
//         />
//       </div>
//       <hr />
//       <div>
//         <Cards
//           characters={characters}
//         />
//       </div>
//       <hr />
//       <div>
//         <SearchBar
//           onSearch={(characterID) => window.alert(characterID)}
//         />
//       </div>
//     </div>
//   )
// }

// export default App
