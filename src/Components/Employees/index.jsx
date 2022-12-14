
import React, { useEffect, useState } from 'react'
import './index.css'

const Index = () =>{
    const [employees, setEmployees] = useState([]);

    const retrieveData = () =>{
        fetch("http://127.0.0.1:3100/employees")
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            setEmployees(data)
        })
    };

    useEffect(() =>{
        retrieveData();
    },[])
    
    return(
    <div className='m-4'>
        <h1 lassName='text-center'>Employees</h1>
        <table className='table table-bordered mt-5'>
            <thead>
                <tr>
                    <th className='nama'>Id Employee</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {employees.length > 0 && (
                <tr>
                {employees.map(employee => (
                    <td>{employee.email}</td>
                    // <td>{employee.name}</td>
                ))}
                </tr>
            )}
            </tbody>
        
        </table>
    </div>
        // <p>{JSON.stringify(employees)}</p>
    // <div className='m-4'>
    //     <h1 className='text-center'>Employees</h1>
    //         <table className='table table-bordered mt-5'>
    //             <thead>
    //                 <tr>
    //                     <th className='nama'>Id Employee</th>
    //                     <th>Name</th>
    //                     <th>Email</th>
    //                     <th>Action</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>Angga Agustira</td>
    //                     <td>anggaagustira@gmail.com</td>
    //                     <td>
    //                         <button type='button' className='btn btn-warning mx-2'>Edit</button>
    //                         <button type='button' className='btn btn-danger'>Delete</button>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     <form action="formtable">
    //         <div className='row pt-3'>
    //             <label htmlFor="input nama buku" className='col-sm-2 col-form-label text-center'>Book Name</label>
    //             <div className='col-sm-10'>
    //                 <input type="text" className='form-control' id='book_name' placeholder=''/>
    //             </div>
    //         </div>
    //     </form>
    // </div>  
    )
};

export default Index