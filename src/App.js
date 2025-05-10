import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//
//         <p>
//           123
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

function App() {
    let email = 'bprzeczek@agh.edu.pl'

  return (

      <div>

        <h1>System do zapisów na zajęcia</h1>
          <h2>Twój e-mail to {email}</h2>

      </div>

  );

}


export default App;