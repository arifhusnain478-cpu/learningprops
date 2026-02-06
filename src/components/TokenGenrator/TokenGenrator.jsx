import React, { useEffect, useRef, useState } from 'react'

function TokenGenrator() {
    const [number, setNumber] = useState(false)
    const [spetialChar, setSpetialChar] = useState(true)
    const [length, setLength] = useState(4)
    const [token, setToken] = useState('sdgfgd')
const useInputRef = useRef(null)

    function genrateToken() {
        let token1 = ''
        let alpa = "abcdefghijklmnopqrstuvwxyz"
        if (spetialChar) alpa += "@!#$%^&*(){}[]"
        if (number) alpa += "1234567890"
        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * alpa.length)

            token1 += alpa[random]

        }

        setToken(token1)


    }

    function  copyToken (){
         useInputRef.current.select();
         useInputRef.current.setSelectionRange(0, 6)
         navigator.clipboard.writeText(token.slice(1,6))
        //  genrateToken()
    }
    useEffect(() => {
        genrateToken()
    }, [number, spetialChar, length])

    return (
        <div className='w-full h-full flex justify-center items-center'>


            <div className='w-90 bg-gray-600 p-4'>
                <h1 className='text-white text-center'>Token Genrator</h1>
                <div className='flex gap-2 '>

                    <input
                    ref={useInputRef}
                    type="text" className='bg-amber-50 w-full' value={token} readOnly />



                    <button className='bg-green-600 p-2 cursor-pointer' onClick={copyToken}>Copy</button>
                </div>
                <div className='flex gap-2 w-full'>
                    <input type="range" name="length" id="length" value={length} onChange={(e) => setLength(e.target.value)} />
                    <label >{length} length</label>

                    <input type="checkbox" name="number" id="number" onChange={(e) => setNumber(e.target.checked)} />
                    <label htmlFor="number">number</label>
                    <input type="checkbox" name="spetialChar" id="spetialChar" onChange={(e) => {
                        console.log(spetialChar);

                        return setSpetialChar(e.target.checked)
                    }
                    } />
                    <label htmlFor="spetialChar">spetialChar</label>
                </div>
            </div>

        </div>
    )
}

export default TokenGenrator