"use client"
import React,{useState} from 'react'
const page = () => {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault()
        console.log(title);
    console.log(desc);
    setTitle("");
    setDesc("");
  }
  return ( 
    <div>
      <h1 className="bg-black text-white text-center font-bold p-5">My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text"
        placeholder='Enter the text'
        className='border-4 border-zinc-800 m-8 px-4 py-2 text-2xl'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
         <input type="text"
        placeholder='Enter the Description '
        className='border-4 border-zinc-800 m-8 px-4 py-2 text-2xl'
         value={desc}
        onChange={(e)=>{
          setDesc(e.target.value);
        }}
        />
       <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">ADD TASK</button>
      </form>
    </div>
  )
}

export default page
