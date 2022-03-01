import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddData() {
  const[data,setData]=useState({
      fname:'',
      lname:'',
      email:'',

  })

  let navigator1=useNavigate()

  const Setdata=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)
  }

   function AddDat(){
   
    axios.post('http://localhost:3001/post',data).then((data)=>{
      console.log(data['data'])
  
  
      setData({
        fname:'',
        lname:'',
        email:'',
      
       
    })
    alert('New data added')
    }).catch((err)=>{
        console.log('error')
    })
  
   }

   function goShow(){
    navigator1('/')
   }

  return (
    <div className='container  my-4'>
  
    <div className="mb-2">
      <label  className="form-label">First Name</label>
      <input type="text" name='fname' value={data.fname} onChange={Setdata} placeholder='Please enter First your name' className="form-control"   />
     
    </div>
    <div className="mb-2">
      <label className="form-label">Last Name</label>
      <input type="text" name='lname' value={data.lname} onChange={Setdata} placeholder='Please enter Last your ' className="form-control"  />
      
    </div>
    <div>
    <label  className="form-label">Email address</label>
    <input type="email" name='email' value={data.email} onChange={Setdata} placeholder='Please enter your Email' className="form-control"  />
  </div>
 
    <button  type="submit" onClick={AddDat} className="btn btn-outline-primary my-4 mx-2">Add Data</button>
    <button type="submit" onClick={goShow} className="btn btn-outline-primary my-4  mx-2"> GO Back</button>
 
    </div>
  )
}

export default AddData
