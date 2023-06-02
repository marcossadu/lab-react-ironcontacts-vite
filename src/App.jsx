import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"



function App() {
  const[allContacts, setAllContacts]= useState([...contacts])
  const[orderBy, setOrderBy]= useState()

  
  
  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  

    
  if (orderBy === "popularity") {
    allContacts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (orderBy === "name") {
    allContacts.sort((a, b) => (b.popularity-a.popularity))

  };
  };

  function HandleClickRemove(item){
 let contactosEliminados = allContacts.filter((a) => a.id !== item.id);
setAllContacts([...contactosEliminados])
   
  }    
      
  return (
    <div className="App">
        <button onClick={handleOrderChange} value="name">Alfabeticamente</button>
        <button onClick={handleOrderChange} value="popularity">popularidad</button>
        
     
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
          {allContacts.map(item => (
          <tr key={item.id}>
            <td><img style={{ width: 100 }} src={item.pictureUrl} alt={item.name}></img></td>
            <td>{item.name}</td>
            <td>{item.popularity.toFixed(2)}</td>
            <td>{item.wonOscar===true ? "🏆":""}{item.wonOscar}</td>
            <td>{item.wonEmmy===true ? "🌟":""}{item.wonEmmy}</td>
            <td>
              <button onClick={() => HandleClickRemove(item)}>Delete</button>
              </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
