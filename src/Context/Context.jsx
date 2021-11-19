import {createContext, useState} from 'react'
import axios from 'axios'

const Context = createContext()
export default Context

export const ContextProvider = ({children}) => {

    const [product, setproduct] = useState([])
    const [productName, setProductName] = useState('Select Category')
    const [catagoryName, setCatagoryName] = useState('')
    const [catagories, setCatagories] = useState([])
    // const [productCount, setproductCount] = useState([])
    // let productCount = []

    const getCategoryData = async (catagory) => {
        setCatagoryName(catagory)
        await axios.get(`https://fakestoreapi.com/products/category/${catagory}`)
        .then((res) => {
            // console.log(res)
            setproduct(res.data)
            setProductName('Select Category')
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    const getProductData = async (product) => {
        setProductName(product)
        await axios.get(`https://fakestoreapi.com/products`)
        .then((res) => {
            // console.log(res)
            setproduct(res.data)
            setCatagoryName('')
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    const getCategory = async () => {
        await axios.get(`https://fakestoreapi.com/products/categories`)
        .then((res) => {
            // console.log(res)
            setCatagories(res.data)   
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    // const getCategoryProducCount = async () => {
    //     // setProductName(product)
        
    //     console.log('cat-', catagories)
    //     for(let i=0; i<catagories.length; i++){
    //         await axios.get(`https://fakestoreapi.com/products/category/${catagories[i]}`)
    //         .then((res) => {
    //             console.log(res)
    //             setproductCount(prevValue => prevValue.push(res.data.length))
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     }
    // }

    let contextData = {
        product: product,
        productName: productName,
        catagories: catagories,
        // productCount: productCount,
        catagoryName: catagoryName,

        getCategoryData: getCategoryData,
        getProductData: getProductData,
        getCategory: getCategory,
        // getCategoryProducCount: getCategoryProducCount,
    }

    return(
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    )
}