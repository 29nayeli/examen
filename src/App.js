import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alumnos from './Archivo/Alumnos';
import Crud from './Archivo/Crud';
import Realidad from './Archivo/Realidad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          sanchez arias nayeli
        </p>
        <p>curso: Aplicaciones moviles</p>
        
      </header>
      <Realidad></Realidad>
      <br></br>
      <Alumnos/>
      <br></br>
      <Crud></Crud>
  
      
     
    </div>

    

  );
}

export default App;
