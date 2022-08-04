import './App.css';
import Column from './Components/Column';
import ItemState from './context/ItemState';


function App() {
//fun ctio

  return(
    <ItemState>
    <div className='column-container'>
    <Column />
    <Column />
    <Column />
    </div>
    </ItemState> 
    
    );
}

export default App;
