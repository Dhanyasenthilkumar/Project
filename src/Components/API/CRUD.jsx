import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CRUD() {
    
    const navi = useNavigate();
    
    const [Name, Setname] = useState("");
    const [Email, SetEmail] = useState("");
    const [Phone, SetPhone] = useState("");



    function handleCreate(e){
        e.preventDefault();
        axios.post('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark',{
            SName:Name,
            SMail:Email,
            SPhone:Phone
        })
        .then(()=>{
            alert("Data Created");
            SetEmail("");
            SetPhone("");
            Setname("");
            navi("/");
        })
        .catch((error)=>{console.log(error);})
    }

    // get
    const [view,setView] = useState([]);

    useEffect(()=>{
        axios.get('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark')
        .then((res)=>{setView(res.data)})
        .catch((error)=>{console.log(error);})
    },[view])

    // setup edit

    const [edit,setEdit] = useState(false);

    function setupEdit(){
        const id = localStorage.getItem("editId");

        axios.get('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark/'+id)
        .then((res)=>{
            setEdit(true);
            Setname(res.data.SName)
            SetEmail(res.data.SMail)
            SetPhone(res.data.SPhone)
        })
    }
    
    //update
    function handleUpdate(e){
        e.preventDefault()
        const id = localStorage.getItem("editId");
        
        axios.put('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark/'+id,{
            SName:Name,
            SMail:Email,
            SPhone:Phone
        })
        .then(()=>{
            alert("Data Updated");
            setEdit(false);
            localStorage.clear()
            SetEmail("");
            SetPhone("");
            Setname("");
            navi("/");
        })
        .catch((error)=>{console.log(error);})
    }

    

    function handleDelete(id){
        axios.delete('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark/'+id)
        .then(()=>{
            alert("Data Deleted");
            window.location.reload();
        })
        .catch((error)=>{console.log(error);
        })
    }


    return (
        <div className='container text-center'>

            <form action="" onSubmit={
                edit?
                handleUpdate:
                handleCreate
                
                } className='card mx-auto p-4' style={{width:"30rem"}}>
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" value={Name} onChange={(e) => { Setname(e.target.value) }} className='form-control' name="" id="" />
              
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" value={Email} onChange={(e) => { SetEmail(e.target.value) }} className='form-control' name="" id="" />
              
                <label htmlFor="" className="form-label">Phone</label>
                <input type="number" value={Phone} onChange={(e) => { SetPhone(e.target.value) }} className='form-control' name="" id="" />
                
                <button type="submit" className="btn btn-primary mt-3">
                    {
                        edit?
                        "update":
                        "Create"
                    }
                </button>
            </form>
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.SName}</td>
                                    <td>{item.SMail}</td>
                                    <td>{item.SPhone}</td>
                                    <td>
                                        <button className="btn btn-dark"
                                            onClick={()=>{
                                                localStorage.setItem("editId",item.id)
                                                setupEdit();
                                            }}
                                        >Edit</button>
                                        <button className="btn btn-danger ms-3"
                                            onClick={
                                                ()=>{
                                                    handleDelete(item.id)
                                                }
                                            }
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
