import { useState } from "react";

import Navbar from "./components/Navbar/navbar";
import RestrauntCard from "./components/RestrauntCard/RestrauntCard";
import { data } from "./components/Data/data";

export default function App() {
  const [menu, setMenu] = useState(data);
  const [input,setInput]=useState('')

  function handleClicked(es) {
    console.log(es);
    setMenu(data.filter((e) => e.type === es));
  }

  function inputChange(e){
    console.log(e.target.value)
    setInput(e.target.value)
      }
    
      function searchClicked(e) {
        console.log(e.value);
        setMenu(data.filter(x=>x.name===input))
      }

  return (
    <div className="App">
      <div className="searchItem">
        {" "}
        <input onChange={inputChange} value={input} />
        <button onClick={searchClicked}>Search</button>
      </div>
      <div className="nav_section">
        <button onClick={() => handleClicked("Breakfast")}>Breakfast</button>
        <button onClick={() => handleClicked("Lunch")}>Lunch</button>
        <button onClick={() => handleClicked("Dinner")}>Dinner</button>
        <button onClick={() => setMenu(data)}>All</button>
      </div>

      {/* <Navbar data={data} /> */}
      <RestrauntCard data={menu} />
    </div>
  );
}
