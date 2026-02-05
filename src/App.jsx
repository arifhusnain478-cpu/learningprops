import React from 'react'
import Card from './components/Card'
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
    <div className="text-black">
      {
        arr.map((se) => (

          <>
          <Card Data={se}/>
            
          </>
        ) )}



    </div>
  )
}

export default App