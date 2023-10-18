import React, { useState } from "react";

export default function AddProducts() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
          `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category},Quantity: ${formData.quantity}, Price: ${formData.price} `
        );
        console.log(formData);
      };

    return (
        <form onSubmit={handleSubmit} className="products" >
            <label className="multiple__text" htmlFor="name">
                Name:
            </label>
            <input
                type="text"
                id="name"
                className="multiple__input"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label className="multiple__text" htmlFor="description">
                Description:
            </label>
            <textarea
                id="description"
                className="multiple__textarea"
                name="description"
                value={formData.message}
                onChange={handleChange}
            />

            <label className="multiple__text" htmlFor="category">
                Category:
            </label>
            <input
                type="text"
                id="category"
                className="multiple__input"
                name="category"
                value={formData.email}
                onChange={handleChange}
            />

            <label className="multiple__text" htmlFor="quantity">
                Quantity:
            </label>
            <input
                type="number"
                id="quantity"
                className="multiple__input"
                name="quantity"
                value={formData.email}
                onChange={handleChange}
            />

            <label className="multiple__text" htmlFor="price">
                Price:
            </label>
            <input
                type="number"
                id="price"
                className="multiple__input"
                name="price"
                value={formData.email}
                onChange={handleChange}
            />

            <button className="multiple__button" type="submit">
                Submit
            </button>
        </form>
    );

}