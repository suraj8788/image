import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Muio() {
    const [response1, setResponse1] = useState([]); // options
    const [singleObjetId, setSingleObjetId] = useState("") // selected option name
    const [myObject, setMyObject] = useState({})
    const [rows, setRows] = useState([])
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
                setResponse1(data)
            })
            .catch(error => console.log('error', error));
    }

    // API Call
    useEffect(() => {
        viewDataApi();
    }, [])
    useEffect(() => {
        // console.log( myObject[0]?.thumbnailUrl)
    }, [myObject])


    // Handle Change
    const handleChange = (event) => {
        console.log(event.target.value)
        setSingleObjetId(event.target.value)
        // setShow(true)
    }

    // Set My Object
    useEffect(() => {
        // console.log(name)
        // response1.map(val => {
        //     if (val.id === singleObjetId) {
        //         setMyObject(val)
        //     }
        // })
         setMyObject(response1.filter(word => word.id == singleObjetId))
        console.log(response1.filter(word => word.id == singleObjetId))
    }, [singleObjetId])
    return (
        <div>
            <h1>Auto width</h1>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">ID</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={singleObjetId}
                    onChange={handleChange}
                    autoWidth
                    label={singleObjetId}
                >
                    {response1 ?
                        response1.map((each) => {
                            return (
                                <MenuItem value={each.id}  onChange={handleChange} key={each.id}>{each.id}</MenuItem>
                            )
                        })
                        :
                        null
                    }
                </Select>
            </FormControl>
            <br></br>
            <br></br>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>albumId</TableCell>
                            <TableCell>id</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>url</TableCell>
                            <TableCell>thumbnailUrl</TableCell>
                            {/* <TableCell>website</TableCell>
                            <TableCell>Company</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{myObject[0]?.albumId}</TableCell>
                                <TableCell>{myObject[0]?.id}</TableCell>
                                <TableCell>{myObject[0]?.title}</TableCell>
                                {/* <TableCell >{myObject.address ? myObject.address.city : null}</TableCell> */}
                                {/* <TableCell >{myObject.address ? myObject.address.street: null}</TableCell>  */}
                                <TableCell >{myObject[0]?.url}</TableCell>
                                <TableCell>{myObject[0]?.thumbnailUrl}</TableCell>
                                {/* <TableCell>{myObject.company ? myObject.company.name : null}</TableCell> */}
                            </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Muio