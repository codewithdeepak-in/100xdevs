import React, { useState } from 'react';

const ContactForm = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    function handleChange(event) {
        setData({
          ...data,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        if(data.email === ""){
            return alert("Please enter a valid email");
        }
        console.table(data);
        setData({
            email: "",
            password: ""
        });
    }

    return(
        <div className="d-flex justify-content-center align-items-center mt-3 flex-column">
            <h1 className="text-muted" style={{fontFamily: 'cursive'}}>Contact Form</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={handleChange} value={data.email}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={handleChange} value={data.password}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
            </form>
        </div>
    )

}


export default ContactForm;