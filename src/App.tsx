import "./App.css";
import Table from "./components/Table";
import data from "./data.json";

/**
 * Main component of the application.
 *
 * @returns {JSX.Element} - JSX element representing the application.
 */
function App(): JSX.Element {
  return (
    <div className="App">
      {/* Render a Table component with statistical data */}
      <Table data={data} />
    </div>
  );
}

export default App;
