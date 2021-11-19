import React, { useState, useContext } from 'react'
import Context from '../Context/Context'
import ModalCategory from './ModalCategory'

function AnalyseBtn() {
    const [open, setOpen] = useState(false)
    const {getCategory} = useContext(Context)
    return (
        <div>
            <button className='analysebtn' onClick={()=>{setOpen(true); getCategory()}}>
                Analyse
            </button>
            {open && <ModalCategory open={open} setOpen={setOpen} />}
        </div>
    )
}

export default AnalyseBtn
