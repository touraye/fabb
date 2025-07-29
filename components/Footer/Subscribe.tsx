import React from 'react'

const Subscribe = () => {
    return (
        <div className='flex justify-between'>
            <div className="text-3xl text-slate-100">
                <p>
                    Subscribe to updates about Open Society’s work <br /> around the world
                </p>
            </div>
            <form action="#">
                <input 
                    type="text" 
                    placeholder='Your Email address'  
                    className="pb-3 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-slate-700 focus:outline-none focus:border-white placeholder:text-current text-lg"
                />
            </form>
        </div>
    )
}

export default Subscribe