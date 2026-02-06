import React, { useEffect, useState } from "react";

export default function ColorBar() {
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const [bgColor, setBgColor] = useState("");

//   const [bgColor, setBgColor] = useState(true);
useEffect(() => {
     setInterval(() => {
        
         setBgColor("blue")
     }, 2000);
    
}, [bgColor])


  return (
   <> 
   
   <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      <nav style={{ display: "flex", padding: "10px", gap: "10px" }}>
        {colors.map((color,index) => (
          <div
          key={color}
            onClick={()=>setBgColor(color)}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: color,
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "4px",
            }}
          >



          </div>
        ))}
      </nav>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Background: {bgColor}
      </h1> 
    
    </div>

          
          
          </>
  );
}


// onclick >>>>>>>>>> function without execution 
// onclick = sum