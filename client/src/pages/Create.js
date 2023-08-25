import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Create() {
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const navigate=useNavigate()
    function submitHandle(e){
        e.preventDefault()
        axios.post("http://localhost:3001/createUser",{title,description})
        .then(res =>{
            console.log(res)
            navigate('/user')
        })
            
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={submitHandle}>
                    <h1>Add User</h1>
                    <div className='mb-2'>
                        <label htmlFor=''>Title</label>
                        <input type='text' placeholder='enter a title' className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Description</label>
                        <input type='text' placeholder='enter description' className='form-control' onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create