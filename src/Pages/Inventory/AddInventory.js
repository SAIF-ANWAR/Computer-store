import React from 'react';
import { useForm } from "react-hook-form";
const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/laptops`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name of the Product' {...register("title", { required: true, maxLength: 50 })} />
                <input className='mb-2' placeholder='Price' type="text" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="text" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='mb-2' type="submit" />
            </form>
        </div>
    );
};

export default AddInventory;