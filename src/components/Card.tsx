import React from 'react'

function Card({Data}) {
    console.log(Data)
  return (
    <div>
        


    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4" >
 
  <img src={Data.imageSRC || "/src/assets/2.jpg"} alt="Sample Image" className="w-full h-48 object-cover" />


  <div className="p-6">
    <h2 className="text-xl font-semibold mb-2">{Data.title || "title"}</h2>
    <p className="text-gray-600 text-sm">
      {Data.desc ||" desc"}
    </p>

   
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
     {Data.btnText || " Click me"}
    </button>
  </div>
</div>

    </div>
  )
}

export default Card