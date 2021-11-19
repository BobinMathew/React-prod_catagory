import React, { useContext } from 'react'
import Context from '../Context/Context'
import AnalyseBtn from './AnalyseBtn'

function Home() {
    const {product,productName,catagoryName} = useContext(Context)
    return (
        <div className='productBox'>
            {/* {console.log('pn-',productName)} */}
            {productName === 'Select Category' && catagoryName !== ''
            ? product.map((key,inx) => (
                <div key={inx} className='productBox-child'>
                    <div className='productBox-child-img' >
                        <img src={key.image} alt='' width='90rem' height='120rem' />
                        <div className="productBox-child-cat">{key.category}</div>
                    </div><hr/>
                    <div>{key.title}</div><hr/>
                    <div>{key.description}</div>
                </div>
            ))
            : product.filter((key)=>(
                key.title === productName
            )).map((key,inx) => (
                <div key={inx} className='productBox-child'>
                    <div className='productBox-child-img'>
                        <img src={key.image} alt='' width='80rem' height='100rem' />
                        <div className="productBox-child-cat">{key.category}</div>
                    </div><hr/>
                    <div>{key.title}</div><hr/>
                    <div>{key.description}</div>
                </div>
            ))
            }
            <AnalyseBtn/>
        </div>
    )
}

export default Home
