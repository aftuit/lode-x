import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='py-10 flex justify-center gap-10 items-center'>
      <div className="flex justify-center gap-16 items-center">
        <h1 className='text-7xl font-extrabold'>404</h1>
        <div className='bg-slate-400 w-[2px] h-[70px]'></div>
        <div className='text-center'>
          <div className='text-3xl font-semibold'>Oops! PAGE NOT FOUND</div>
          <div className='mt-4 text-xl'>Sorry, the page you're looking for does not exist. <br />If you think something is broken, report a problem.</div>
          <div className="flex justify-center gap-5 mt-7">
            <button onClick={() => navigate('/')} className='rounded-2xl px-5 hover:bg-opacity-75 transition-all py-2 bg-slate-800 text-white'>RETURN HOME</button>
            <button className='rounded-2xl px-5 hover:bg-opacity-75 transition-all py-2 border border-slate-800 text-slate-800 bg-transparent'>REPORT PROBLEM</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound