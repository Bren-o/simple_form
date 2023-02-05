import './App.css';
import { useState } from 'react';

function App() {

  let box = document.querySelector('.box');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPaassword, setErrorPassword] = useState(null);
  const [errorCheck, setErrorCheck] = useState(null);
  const [successAction, setSuccessAction] = useState(false);

  function nullErrors() {
    setErrorEmail(null);
    setErrorPassword(null);
    setErrorCheck(null);
  }

  function go() {
    box.classList.add('entForm');
    setEmail('');
    setPassword('');
    setCheck('');
    nullErrors();
    setSuccessAction(false);
  }

  function goBack() {
    box.classList.remove('entForm');
    setEmail('');
    setPassword('');
    nullErrors();
    setSuccessAction(false);
  }

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  }

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  }
  
  const handleCheckPassword = (event) => {
    const value = event.target.value;
    setCheck(value);
  }
  
  const handleSubmit = () => {
    nullErrors();
     
    if(!email){
      setErrorEmail("Email inválido!");
    }if(password.length < 6){
      setErrorPassword("A senha deve ter 6 dígitos");
    }if(password !== check){
      setErrorCheck("As senhas não coincidem");
    }if(email && password.length >= 6 && password === check){
      nullErrors();
      setSuccessAction(true);
    }
  }

   const handleSubmitEntrar = () => {
    nullErrors();
    
    if(!email){
      setErrorEmail("Email inválido!");
     }if(password.length < 6){
      setErrorPassword("A senha deve ter 6 dígitos");
     }if(email && password.length >= 6){
      setSuccessAction(true);
     }
   }

  return (
    <>
      <div className="box"> 
      <div className="form cad">
          <h2>Cadastrar</h2>
          <div className="inputBox">
            <input type="text" required="required" value={email} onChange={handleEmail}/>
            <span>Email</span>
          </div>
          {errorEmail && <div className='errorMessage'><b>{errorEmail}</b></div>}
          <div className="inputBox">
            <input type="password"  required="required" value={password} onChange={handlePassword}/>
            <span>Senha</span>
          </div>
          {errorPaassword && <div className='errorMessage'><b>{errorPaassword}</b></div>}
          <div className="inputBox">
            <input type="password" required="required" value={check} onChange={handleCheckPassword}/>
            <span>Confirmar senha</span>
          </div>
          {errorCheck && <div className='errorMessage'><b>{errorCheck}</b></div>}
          <div className="inputBox">
            <input type="submit"  value={successAction?"Cadastrado":"Cadastrar"} onClick={handleSubmit} style={{backgroundColor:successAction?"#75fa87":"#fff5ff", color:successAction?"#fff5ff":"#223243"}}/>
          </div>
          <p>Já possui uma conta? <u href='#' onClick={go}>Entrar</u></p>  
        </div>

        <div className="form ent">
          <h2>Entrar</h2>
          <div className="inputBox">
            <input type="text"  required="required" value={email} onChange={handleEmail}/>
            <span>Email</span>
          </div>
          {errorEmail && <div className='errorMessage'><b>{errorEmail}</b></div>}
          <div className="inputBox">
            <input type="password"  required="required" value={password} onChange={handlePassword}/>
            <span>Senha</span>
          </div>
          {errorPaassword && <div className='errorMessage'><b>{errorPaassword}</b></div>}
          <div className="inputBox">
            <input type="submit" value={successAction?"✔":"Entar"} onClick={handleSubmitEntrar} style={{backgroundColor:successAction?"#75fa87":"#fff5ff", color:successAction?"#fff5ff":"#223243"}}/>
          </div>
          <p>Não possui uma conta? <u href='#' onClick={goBack}>Cadastre-se</u></p>  
        </div>
      </div>
    </>
  );
}

export default App;