import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Fryer from './components/Folder/airFUCKINGfryer.jpg';

function App() {
  return (
    <div className="App">
      <Title /> 
      <Form />
      <img src={ Fryer } alt="Fryer"/>
    </div>
  );
}

export default App;
