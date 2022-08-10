import Column from "./components/Column";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <h1>KanBan CSV</h1>
      
      <div className="column-container">
        <Column title="To Do" columnId="0" />
        <Column title="In Progress" columnId="1" />
        <Column title="Completed" columnId="2" />
      </div>
    </div>
  );
}

export default App;
