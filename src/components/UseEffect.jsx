import React from 'react'
import { useEffect, useState } from 'react';


const UseEffect = () => {
    const [data, setData] = useState({});

    const getData = async () => {
       const res = await fetch('https://fakestoreapi.com/products/1')

        const data = await res.json();

        setData(data)
    }

    useEffect(() => {
        getData()


    }, []);

    return (
        <div>
            <h1> Fetched from FakeStore API</h1>
            <h3> id = {data.id}</h3>
            <h3> title {data.title}</h3>
            
        </div>

    )
}

export default UseEffect;