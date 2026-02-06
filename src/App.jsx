import React from 'react'
import Card from './components/Card'
import ColorBar from './components/ColorBar/ColorBar'
import TokenGenrator from './components/TokenGenrator/TokenGenrator'
function App() {
  let arr = [
    {
      title: "card1",
      imageSRC: "/src/assets/1.jpg",
      desc: "kjshfkyfdusi xkjdhgskldgu kljsrhglisd dfkjghldfig slkjhfglkfdiu",
      btnText: "click me "
    }, {
      title: "card2",
      imageSRC: "/src/assets/2.jpg",
      btnText: "click me "
    }, {
      title: "card3",

    }
  ]

  return (
    <>
    <div className="text-black w-full flex">
      {
        arr.map((se) => (

          <>
        
           <Card Data={se}/>
          
            
          </>
        ) )}



    </div>

    <ColorBar/>
    <TokenGenrator/>
    </>
  )
}

export default App