import "./App.css";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tailwind CSS </h1>
        <p>Hello guys, I'm learning Tailwind-css</p>

        <Badge bg="secondary" as={Button}>
          New
        </Badge>

        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
