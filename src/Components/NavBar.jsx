import React, { useContext } from 'react'
import Context from '../Context/Context'

function NavBar() {

    
    const {getCategoryData, getProductData, productName} = useContext(Context)
    const handleSelect = (e) => {
        // console.log(e.target.value)
        // setcatagoryValue(e.target.value)
        getCategoryData(e.target.value)
    }

    const handleSearch = (e) => {
        // console.log(e.target.value)
        // setcatagoryValue(e.target.value)
        // setProductName(e.target.value)
        getProductData(e.target.value)
    }
    return (
        <div className='navbar'>
            <form className='navbar-form'>
                <select onChange={handleSelect} >
                    <option value='' hidden>{productName}</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
                <input type='search' onChange={handleSearch} placeholder='Search by Products' />
            </form>
            
        </div>
    )
}

export default NavBar
