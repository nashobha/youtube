import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    const [y, setY] = useState(0)
    let x = 0;
    const ref = useRef(0);
    let timer = [{
        current:0
    }];

    useEffect(()=>{
        if(timer.current) return;
         timer.current = setInterval(()=>{
            console.log("Namaste" );
        },1000);
        return()=> clearInterval(timer.current);
    });

    return (
        <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
            <div>
                <button className="bg-green-200 px-2 m-4" onClick={() => {
                    x += 1;
                }
                }>Increase x </button>
                <span className='font-bold text-xl'>Let = {x}</span>
            </div>
            <div>
                <button className="bg-green-200 px-2 m-4" onClick={() => setY(y + 1)}>Increase y </button>
                <span className='font-bold text-xl'>State = {y}</span>
            </div>
            <div>
                <button className="bg-green-200 px-2 m-4" onClick={() => ref.current=ref.current+1}>Increase Ref </button>
                <span className='font-bold text-xl'>Ref = {ref.current}</span>
            </div>
            <button className='bg-red-500 p-4 m-4 text-white font-bold rounded-lg'
            onClick={()=>{clearInterval(timer.current)}}>Stop printing</button>
        </div>
    )
}

export default Demo2