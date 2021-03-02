import './style-components.css';

function FormPay(result: any) {
    return (
        <div className={result.result === true ? 'form-info' : 'form-info disable'}>
            <div>
            <form action="">
                <h2>Delivery</h2>
                <div className="label-float">
                    <input type="text" placeholder=" " required />
                    <label>Adress</label>
                </div>
                <div className="label-float">
                    <input type="text" placeholder=" " required />
                    <label>Apartment/N°</label>
                </div>
                <h2>Payment</h2>
                <div className="label-radio">
                    <input type="radio" id="card" name="payment" value="card" />
                    <label>Card</label>
                    <input type="radio" id="ticket" name="payment" value="ticket" />
                    <label>Ticket</label>
                </div>
                <div className="form-card-number">
                    <div className="label-float">
                        <input type="text" placeholder=" " required />
                        <label>Number</label>
                    </div>
                    <div className="label-float w-code">
                        <input type="text" placeholder=" " required />
                        <label>Code</label>
                    </div>
                </div>
                <div className="label-float">
                    <input type="text" placeholder=" " required />
                    <label>Name</label>
                </div>
                <div className="form-select">
                    <label>
                        card installments
                    <select id="installments" name="installments">
                            <option value="1">1x - 0,00</option>
                            <option value="2">2x - 0,00</option>
                            <option value="3">3x - 0,00</option>

                        </select>
                    </label>
                    <h3>Total $ 0,00</h3>
                </div>
                <button className="button-form" type="submit">Check out</button>
            </form>
            </div>
        </div>
    )
}

export default FormPay;