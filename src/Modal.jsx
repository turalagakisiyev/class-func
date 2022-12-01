import React from 'react'
import './Modal.css'

const Modal = ({ name, change }) => {
    return (
        <div className={name}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
                </div>
                <div className="modal-body">
                    <p>
                        Заберите его в пункте выдачи до 15 апреля включительно, потом
                        заказ придется отменить.
                        <br />
                        Вход в пункт выдачи только в маске и перчатках.
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={change}>
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal