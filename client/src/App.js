import './App.css';

function App() {

  let box = document.querySelector('.box');

  function go() {
    box.classList.add('entForm');
  }

  function goBack() {
    box.classList.remove('entForm');
  }

  return (
    <>
      <div className="box"> 
      <div className="form cad">
          <h2>Cadastrar</h2>
          <div className="inputBox">
            <input type="text" required="required"/>
            <span>Email</span>
          </div>
          <div className="inputBox">
            <input type="password" required="required"/>
            <span>Senha</span>
          </div>
          <div className="inputBox">
            <input type="password" required="required"/>
            <span>Confirmar senha</span>
          </div>
          <div className="inputBox">
            <input type="submit" value="Cadastrar"/>
          </div>
          <p>Já possui uma conta? <a href='#' onClick={go}>Entrar</a></p>  
        </div>

        <div className="form ent">
          <h2>Entrar</h2>
          <div className="inputBox">
            <input type="text" required="required"/>
            <span>Email</span>
          </div>
          <div className="inputBox">
            <input type="password" required="required"/>
            <span>Senha</span>
          </div>
          <div className="inputBox">
            <input type="submit" value="Entrar"/>
          </div>
          <p>Não possui uma conta? <a href='#' onClick={goBack}>Cadastre-se</a></p>  
        </div>
      </div>
    </>
  );
}

export default App;