import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('bprzeczek@agh.edu.pl');


    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message = '';
    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>
    } else if (email.length <20) {
        message = <div>wój adres e-mail jest w sam raz</div>
    } else {
        message = <div>wój adres e-mail jest stanowczo za długi</div>
    }

  return (
      <div>
        <h1>System do zapisów na zajęcia</h1>
          <h2>Twój e-mail to {email}</h2>
          <div>{message}</div>
          <input type="text" onChange={handleChange}/>
      </div>
  );
}


export default App;