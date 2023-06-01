import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"



function App() {
  const[allContacts, setAllContacts]= useState([...contacts])
  const[removeContacts, setRemoveContacts]=useState()

  function HandleClickRemove(){
    setRemoveContacts(removeContacts)
  
  }
  
  
  return (
    <div className="App">
   <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {allContacts.map(c => (<tr>
            <td><img style={{ width: 100 }} src={c.pictureUrl} alt={c.name}></img></td>
            <td>{c.name}</td>
            <td>{c.popularity.toFixed(2)}</td>
            <td>{c.wonOscar===true ? "🏆":""}{c.wonOscar}</td>
            <td>{c.wonEmmy===true ? "🌟":""}{c.wonEmmy}</td>
            <td>
              <button>{HandleClickRemove}Delete</button>
              </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
