import React from 'react'
import './index.css'

const Index = () =>{
    return(
        <div className='m-4'>
            <h1 className='text-center'>Books</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Book Name</th>
                        <th>Year</th>
                        <th>Author</th>
                        <th>Summary</th>
                        <th>Publisher</th>
                        <th>Page Count</th>
                        <th>Read Page</th>
                        <th>Reading</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
            {/* <form action="formtable">
                <div className='row pt-3'>
                    <label htmlFor="input nama buku" className='col-sm-2 col-form-label text-center'>Book Name</label>
                    <div className='col-sm-10'>
                        <input type="text" className='form-control' id='book_name' placeholder=''/>
                    </div>
                </div>
            </form> */}
        </div>  
    )
};
export default Index