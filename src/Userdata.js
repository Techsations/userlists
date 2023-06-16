import React from 'react'
import { useState } from 'react';

function userData() {
    const [allStudents, setallStudents] = useState([
        {
            name: "Shola",
            deparment: "Medicine and Sugery",
            nationality: "Ukranian"
        },
        {
            name: "Biyaya",
            deparment: "Computer Science",
            nationality: "South African"
        },
        {
            name: "Adelolu",
            deparment: "Data Science",
            nationality: "Pakistani"
        },
        {
            name: "Wuraola",
            deparment: "Mining Engineering",
            nationality: "Japanese"
        }
    ])

    return (
        <>
            <table class="table table-striped">
                
            </table>
        </>
    )
}

export default Userdata