import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {

  const [name, setName] = useState("")
  
  const [students, setStudents] = useState(['Alex', 'David', 'Joe']);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents(currentStudents => [...currentStudents, name]);
    setName('');
  }

  return (
    <div className="App">
      <NavBar></NavBar>

      <br></br>

      <form onSubmit={handleSubmit}>
        <div>What is your name?</div>
        <input className="border-2 rounded" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="submit" />
      </form>

      <br></br>
      <h1>Add a new student</h1>
      <ul>
        {
          students.map((student, index) => <li key={index}>{student}</li>)
        }
      </ul>


    </div>
  );
}

export default App;
