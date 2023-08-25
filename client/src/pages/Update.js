import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const {id} = useParams()
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(res => {console.log(res)
            setTitle(res.data.title)
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    },[])
    function handleUpdate(e){
        e.preventDefault()
        axios.put("http://localhost:3001/updateUser/"+id,{title,description})
        .then(res =>{
            console.log(res)
            navigate('/user')
        })
            
        .catch(err => console.log(err))

    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h1>Update User</h1>
                    <div className='mb-2'>
                        <label htmlFor=''>Title</label>
                        <input type='text' placeholder='enter a title' className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Description</label>
                        <input type='text' placeholder='enter description' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update