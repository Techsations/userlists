import React from 'react'
import { useState } from 'react';

function UserData() {
    const [allStudents, setallStudents] = useState([
        {
            name: "Shola",
            department: "Medicine and Sugery",
            nationality: "Ukranian"
        },
        {
            name: "Biyaya",
            department: "Computer Science",
            nationality: "South African"
        },
        {
            name: "Adelolu",
            department: "Data Science",
            nationality: "Pakistani"
        },
        {
            name: "Wuraola",
            department: "Mining Engineering",
            nationality: "Japanese"
        }
    ])

    let addStudent = (e) => {
        e.preventDefault();
        let updateList = {
            name: studentName,
            department: studentDepartment,
            nationality: studentNationality
        }
        console.log(updateList);
        setallStudents([...allStudents, updateList]);
    }

    const deleteStudent = (index)=>{
        console.log(index);
        const updatedItems = [...allStudents];
        updatedItems.splice(index, 1);
        setallStudents(updatedItems);
        console.log(updatedItems);
    }

    const [studentName, setstudentName] = useState("")
    const [studentDepartment, setstudentDepartment] = useState("")
    const [studentNationality, setstudentNationality] = useState("")



    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>NAME</td>
                        <td>DEPARTMENT</td>
                        <td>NATIONALITY</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allStudents.map((items, i) =>(
                            <tr>
                                <td>{i + 1}</td>
                                <td>{items.name}</td>
                                <td>{items.department}</td>
                                <td>{items.nationality}</td>
                                <td>
                                    <button onClick={()=>deleteStudent(i)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className='w-25 p-3'>
                <form>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setstudentName(e.target.value)} className="form-control ps-3" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => setstudentDepartment(e.target.value)} type="text" className="form-control ps-3" placeholder='Department' id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => setstudentNationality(e.target.value)} type="text" className="form-control ps-3" placeholder='Nationality' id="exampleInputPassword1" />
                    </div>
                    <button onClick={addStudent} type="submit" className="btn btn-primary">Add Student</button>
                </form>
            </div>
        </>
    )
}

export default UserData