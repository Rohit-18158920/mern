import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
const Register=()=>{
    const [input,setInput]=useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        address:"",
        des:""
    })
    const setData=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setInput((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        });
    }

    const addInputData=async(e)=>{
        e.preventDefault();
        const {name,email,age,mobile,work,address,des}=input;
        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,age,mobile,work,address,des
            })
        });
        const data=await res.json();
        console.log(data);
        if(res.status===404 || !data){
            console.log("error");
            alert("error");
            
        }else{
            alert("data added");
            console.log("data added");
        }
    }

return(
    <div className='container'>
        <NavLink to='/'>Home</NavLink>
        <form className='mt-2'>
        <div className='row'>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label  className="form-label">Name</label>
                <input type="text" name="name" value={input.name} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label  className="form-label">Email</label>
                <input type="email" name="email" value={input.email} onChange={setData} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label className="form-label">Age</label>
                <input type="number" name="age" value={input.age} onChange={setData} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label  className="form-label">Mobile</label>
                <input type="number" name="mobile" value={input.mobile} onChange={setData} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label className="form-label">Work</label>
                <input type="text" name="work"value={input.work} onChange={setData} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label  className="form-label">Address</label>
                <input type="text" name="address" value={input.address} onChange={setData} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 col-lg-12 col-md-6 col-12">
                <label  className="form-label">Description</label>
                <textarea name="des" className="form-control" value={input.des} onChange={setData}  cols="25" rows="3"></textarea>
            </div>
            
            
            <button type="submit" onClick={addInputData} className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
)
}

export default Register;
