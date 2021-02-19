import { useState } from 'react';
import './style-components.css';

// interface User{
//     name: string;
//     lastname: string;
//     email: string;
//     telephone: string;
// }

function FormData({onEnable = () => { } }) {
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        email: "",
        telephone: ""
    });

    function handleClick(e: any) {
        e.preventDefault();  
        if(user.name==="" || user.lastname==="" || user.email==="" || user.telephone===""){
            console.log('falta');
        }else{
            console.log(user)
            onEnable();
        }     
    }
    return (
        <div className="form-info">
            <form action="">
                <h2>Personal Data</h2>
                <div className="label-float">
                    <input
                        type="text"
                        placeholder=" "
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value, })}
                    />
                    <label>Name</label>
                </div>
                <div className="label-float">
                    <input
                        type="text"
                        placeholder=" "
                        value={user.lastname}
                        onChange={e => setUser({ ...user, lastname: e.target.value, })}
                    />
                    <label>Last name</label>
                </div>
                <div className="label-float">
                    <input
                        type="email"
                        placeholder=" "
                        value={user.email}
                        onChange={e => setUser({ ...user, email: e.target.value, })}
                    />
                    <label>Email</label>
                </div>
                <div className="label-float">
                    <input
                        type="text"
                        placeholder=" "
                        value={user.telephone}
                        onChange={e => setUser({ ...user, telephone: e.target.value, })}
                    />
                    <label>Telephone</label>
                </div>
                <button
                    className="button-form"
                    type="submit"
                    onClick={e => handleClick(e)}
                >Next</button>
            </form>
        </div>
    )
}

export default FormData;