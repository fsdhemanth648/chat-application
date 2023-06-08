import './Modal.scss'
const Modal = ({closeModal}) =>{
    return <>
        <div className='modal'>
            <div className='modalContainer'>
                <h2>Notice</h2>
                <p>We are working on this feature.</p>  
                <button onClick={closeModal}>Okay</button>
            </div>
        </div>
    </>
  }

  export default Modal;