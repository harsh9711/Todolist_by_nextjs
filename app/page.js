"use client"
import React,{useState} from 'react'
const page = () => {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
const[task,setTask]=useState([]);
  const submitHandler=(e)=>{
    e.preventDefault()
    setTitle("");
    setDesc("");
    setTask([...task,{title,desc}]);
    console.log(task);
  };
  const deletehandler=(i)=>{
    let copytask=[...task];
    copytask.splice(i,1);
    setTask(copytask);
  }
  let renderedtask=<h2>No Task Available</h2>
    if(task.length>0){
  renderedtask=task.map((t,i)=>{
    return( 
      <li key={i} className="flex justify-between item-center mb-8">
    <div className="flex item-center justify-between w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-lg font-medium">{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deletehandler(i)
    }}
    className="bg-red-400 text-white px-4 py-2 rounded font-bold">
      Delete
    </button>
    </li>
    );
  });
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
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>
          {renderedtask}
        </ul>
      </div>
    </div>
  )
}

export default page
