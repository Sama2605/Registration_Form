// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'
import validators, { EmailValidator } from './components/validators';
import  {emailValidator, passwordValidator, confirmPasswordValidator}  from './components/validators'
import { Mreturns } from './components/validators';
function App() {
  return (
    <div className="App">
      <Header/>
      <RegistrationForm/>
  {/* <EmailValidator></EmailValidator> */}
    </div>
  );
}

export default App;
