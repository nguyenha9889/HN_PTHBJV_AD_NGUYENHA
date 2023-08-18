import { useState, useRef } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Form from './components/Form';
import { toast } from 'react-toastify';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character';


function App() {
    const [password, setPassword] = useState("")
    const [pwLength, setPwLength] = useState(12);
    const [checked, setChecked] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const handlePwLength = (e) => {
        setPwLength(e.target.value)
    };

    const handleCheckBox = (e) => {
        const { name, checked } = e.target;
        setChecked(prev => ({ ...prev, [name]: checked }));
    }

    const createPw = (arrStr) => {
        let password = "";
        const arrLength = arrStr.length;
        for (let i = 0; i < arrLength; i++) {
            const randomArr = Math.floor(Math.random() * arrLength);
            password += arrStr[randomArr];
        };
        return password;
    }

    const handleGeneratePw = () => {

        if (!checked.uppercase && !checked.lowercase && !checked.numbers && !checked.symbols) {
            toast.error("To generate password you must select atleast one checkbox")
        } else {
            let arrCharPw = "";
            if (checked.uppercase) {
                arrCharPw += upperCaseLetters;
            }
            if (checked.lowercase) {
                arrCharPw += lowerCaseLetters;
            }
            if (checked.numbers) {
                arrCharPw += numbers;
            }
            if (checked.symbols) {
                arrCharPw += specialCharacters;
            }
            setPassword(createPw(arrCharPw));
        }
    };



    return (
        <div className='app'>
            <CardContainer>
                <Form
                    result={password}
                    checked={checked}
                    pwLength={pwLength}
                    handleCheckBox={handleCheckBox}
                    handlePwLength={handlePwLength}
                    handleGeneratePw={handleGeneratePw}
                />
            </CardContainer>
        </div>
    )
}

export default App;