import './Modal.scss'

export const Modal = ({ isOpen, handleClose, children }) => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';

    return isOpen && <div className="modal" onClick={() =>  handleClose()}>
        <div className="modal__content" onClick={(e)=> e.stopPropagation()}>
            {children}
        </div>
        <button className="modal__close" onClick={()=>handleClose()}>X</button>
    </div>
}