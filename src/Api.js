import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


function Api() {
    const [myObject, setMyObject] = useState({})
    // const [rows, setRows] = useState([])
    // API
    function viewDataApi() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/photos", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // setResponse1(data)
            })
            .catch(error => console.log('error', error));
    }

    // API Call
    useEffect(() => {
        viewDataApi();
    }, [])
  


    // Handle Change
    // const handleChange = (event) => {
    //     console.log(event.target.value)
    //     setSingleObjetId(event.target.value)
    //     // setShow(true)
    // }

    // Set My Object
    // useEffect(() => {
    //     // console.log(name)
    //     response1.map(val => {
    //         if (val.id === singleObjetId) {
    //             setMyObject(val)
    //         }
    //     })
    // }, [singleObjetId])
    return (
        <div>
            
        </div>
    )
}
export default Api