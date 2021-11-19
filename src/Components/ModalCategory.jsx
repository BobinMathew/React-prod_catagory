import React, {useContext} from 'react'
import Modal from 'react-modal';
import { Pie } from 'react-chartjs-2';
import Context from '../Context/Context';

function ModalCategory({open, setOpen}) {
    const {catagories, product} = useContext(Context)



    const data = {
        labels: [...catagories],
        datasets: [
          {
            label: '# of Votes',
            data: [6, 4, 4, 6],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
    const handleClose = (e) => {
        e.preventDefault()
        // alert(owner+repo)
        
        setOpen(false)
    }
    return (
        <div>
            {/* {console.log('pc',productCount)} */}
            {catagories.length>0 &&
            <Modal className='modal' isOpen={open} ariaHideApp={false}>
                <button onClick={handleClose} className='modal-closebtn'>x</button>
                Categories in catalogue 
                {console.log(product)}
                {/* {catagories.map( (key) => (key))} */}
                
                <Pie data={data} 
                />
                
            </Modal>
            }
        </div>
    )
}

export default ModalCategory
