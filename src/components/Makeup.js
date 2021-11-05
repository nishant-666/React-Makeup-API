import React, { useState } from 'react';
import TextField from './common/TextField';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from './common/Card';

const API_endpoint = `http://makeup-api.herokuapp.com/api/v1/products.json`;

export default function Makeup() {
    const [brand, setBrand] = useState('')
    const [product, setProduct] = useState('');
    const [isData, setIsData] = useState(false);
    const [data, setData] = useState([]);

    const clickBrand = (text) => {
        setBrand(text)
    }

    const clickProduct = (text) => {
        setProduct(text)
    }

    const getMakeupData = () => {
        axios.get(`${API_endpoint}?brand=${brand}&product_type=${product}`)
            .then((response) => {
                setIsData(true)
                setData(response.data)
            })
    }
    return (
        <div className="makeup-main">
            <TextField name={'Brand'} change={clickBrand} />
            <TextField name={'Product type'} change={clickProduct} />

            <div className="btn-container">
                <Button
                    variant="contained"
                    onClick={getMakeupData}
                >Search Here..</Button>
            </div>
            {isData ? (
                <Card data={data}/>
            ) : (
                ""
            )}

        </div>
    )
}
