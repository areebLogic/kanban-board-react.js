import './App.css';
import Column from './Components/Column';



function App() {

  return(
   
    <div className='column-container'>
    <Column text={'To Do'} onColumnId={0}/>
    <Column text={'In Progress'} onColumnId={1}/>
    <Column text={'Completed'} onColumnId={2}/>
    </div>
    
    );
}

export default App;
