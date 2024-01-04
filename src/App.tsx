import Input from "./Input";
import "./App.css";

function App() {
  return (
    <div>
      <Input
        onChange={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}

export default App;
