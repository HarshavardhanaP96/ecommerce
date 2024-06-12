import React from 'react'

export default function Topbar(){
  return (
    <div className="flex sticky justify-between items-center bg-slate-300 h-14 w-screen px-12">
      <div className="h-8 w-8 rounded-full bg-blue-500">Logo</div>
      <button className="h-8 w-8 rounded-full bg-blue-500">P.I</button>
    </div>
  )
}


