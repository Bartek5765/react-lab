import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('bprzeczek@agh.edu.pl');
    const [authenticatedUsername, setAuthenticatedUsername] = useState(null);


    function handleChange(event) {
        setEmail(event.target.value);
    }

    // let message = '';
    // if (email.length < 10) {
    //     message = <div>Ale masz krótki adres!</div>
    // } else if (email.length <20) {
    //     message = <div>wój adres e-mail jest w sam raz</div>
    // } else {
    //     message = <div>wój adres e-mail jest stanowczo za długi</div>
    // }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {!authenticatedUsername && (
                <div>
                    Zaloguj się e-mailem
                    <input type="text" onChange={handleChange}/>
                    <button type="button" onClick={() => setAuthenticatedUsername(email)}>
                        Wchodzę
                    </button>
                </div>
            )}
            {authenticatedUsername && (
                <div>
                    <h4>Jesteś zalogowany jako {authenticatedUsername}</h4>
                    <a onClick={() => setAuthenticatedUsername(null)}>Wyloguj</a>
                </div>
            )}
        </div>
    );
}


export default App;