import './style-components.css';
import FocusLock from 'react-focus-lock';

function Modal({ id = 'out', onClose = () => { } }) {
    const handleClick = (e: any) => {
        if (e.target.id === id) {
            onClose();
        }
    }

    return (
        <section id={id} className="modal" onClick={handleClick}>
            <div className="modal-body">
                <FocusLock>
                    <header className="modal-body-header">
                        <button className="modal-close" onClick={onClose}><h2>X</h2></button>
                    </header>
                    <body className="modal-body-form">
                        <hr></hr>
                        <h1>Form Contact</h1>
                        <form>
                            <div className="label-float">
                                <input type="text" placeholder=" " required />
                                <label>Name</label>
                            </div>
                            <div className="label-float">
                                <input type="email" placeholder=" " required />
                                <label>Email</label>
                            </div>
                            <div className="label-float">
                                <textarea placeholder=" " required />
                                <label>Message</label>
                            </div>
                            <button className="modal-submit" type="submit">Send</button>
                        </form>
                    </body>
                    <footer className="modal-body-footer">
                        <p>plant shop (11) 1231231-1231231</p>
                    </footer>
                </FocusLock>
            </div>

        </section>
    )
}
export default Modal;