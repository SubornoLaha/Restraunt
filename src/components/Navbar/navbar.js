import { useState } from "react";

import "./navbar.css";

export default function Navbar({data}) {
  const [menu, setMenu] = useState(data);
  function handleClicked(e){
    console.log(e)
    setMenu(menu.filter(es=>es.type===e))
  }
  return (
    <>
      <div className="nav_section">
        <button onClick={()=>handleClicked("Breakfast")}>Breakfast</button>
        <button onClick={()=>handleClicked("Lunch")}>Lunch</button>
        <button onClick={()=>handleClicked("Dinner")}>Dinner</button>
      </div>
    </>
  );
}
