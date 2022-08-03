import React, {useState,setState} from 'react';
import './style.css'
import  {emailValidator, passwordValidator, confirmPasswordValidator}  from '../components/validators'

function RegistrationForm() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);
    //touched useState do refaktoringu!!!
    // const [touchede, setTouchede] = useState(false)
    // const [touchedp, setTouchedp] = useState(false)
    // const [touchedcp, setTouchedcp] = useState(false)


    // const handleInputChange = (e) => {
    //     const {id , value} = e.target;
    //     if(id === "firstName"){
    //         setFirstName(value);
    //        }
    //     if(id === "lastName"){
    //         setLastName(value);
    //     }
    //     if(id === "email"){
    //         setEmail(value);
    //     }
    //     if(id === "password"){
    //         setPassword(value);
    //     }
    //     if(id === "confirmPassword"){
    //         setConfirmPassword(value);
    //     }
    // }

    const handleSubmit  = (e) => {
            e.preventDefault();
        // console.log(firstName,lastName,email,password,confirmPassword);
      
        emailValidator(email)
        passwordValidator(password)
        confirmPasswordValidator(confirmPassword, password);
        //creating new user if all inputs are correct
        if(
            emailValidator(email)
             && 
             passwordValidator(password)
             && 
             confirmPasswordValidator(confirmPassword ,password) === confirmPassword
         ) 
         {
            const user = {id: new Date().getTime().toString(), firstName, lastName, email, password, confirmPassword};
            console.log(user);
            setUsers((users)=>{
                return [...users,user]
             });
            // setFirstName('');
            // setLastName('');
            // setEmail('');
            // setPassword('');
            // setConfirmPassword('');
        }else{
            return console.log('err')
        }
    }
    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">Imię:</label>
                    <input className="form__input" 
                    type="text" value={firstName}
                    //  onChange = {(e) => handleInputChange(e)}
                    onChange={(e) => setFirstName(e.target.value)} 
                     id="firstName"/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Nazwisko:</label>
                    <input  type="text" 
                    name="" id="lastName"
                    value={lastName} 
                    className="form__input" 
                     onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email: </label>
                    <input  type="email"
                     id="email"
                      className="form__input"
                       value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    // onBlur={() => setTouchede(true)}
                     />
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Hasło:</label>
                    <input className="form__input" 
                    type="password"  
                    id="password"
                     value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // onBlur={() => setTouchedp(true)}
                      />
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Powtórz hasło:</label>
                    <input className="form__input"
                     type="password" id="confirmPassword" 
                     value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    // onBlur={() => setTouchedcp(true)}
                      />
                </div>
            </div>
            <div className="footer">
                <button onClick={(e)=>handleSubmit(e)} type="submit" className="btn" >Rejestracja</button>
                <div className='validators'>
                {/* <h4>{emailValidator(email)}</h4> */}
                {/* <h4>{touchede ? emailValidator(email) : ''}</h4>
                <h4>{touchedp ? passwordValidator(password) : ''}</h4>
                <h4>{touchedcp ? confirmPasswordValidator(password) : ''}</h4> */}
                </div>
            </div>
        </div>
       
    )       
}

export default RegistrationForm