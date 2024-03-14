import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        gender: '',
        subjects: [],
        url: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? [...prevData[name], value] : type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:4000/form', formData);
        console.log(response);
    };

    return (
        <div>
            <h1>Form Submission</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h4>First Name*</h4>
                    <input type="text" placeholder="Enter your first name" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <h4>Last Name*</h4>
                    <input type="text" placeholder="Enter your last name" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div>
                    <h4>Email*</h4>
                    <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <h4>Contact*</h4>
                    <input type="number" placeholder="Enter Mobile Number" name="number" value={formData.number} onChange={handleChange} />
                </div>
                <div>
                    <h4>Gender*</h4>
                    <input type="radio" name="gender" id="male" value="Male" onChange={handleChange} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="Female" onChange={handleChange} />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="other" value="Other" onChange={handleChange} />
                    <label htmlFor="other">Other</label>
                </div>
                <div>
                    <h4>Your Best Subject</h4>
                    <input type="checkbox" name="subjects" value="Maths" onChange={handleChange} />
                    <label htmlFor="subjects">Maths</label>
                    <input type="checkbox" name="subjects" value="Science" onChange={handleChange} />
                    <label htmlFor="subjects">Science</label>
                    <input type="checkbox" name="subjects" value="History" onChange={handleChange} />
                    <label htmlFor="subjects">History</label>
                </div>
                <div>
                    <h4>Enter URL</h4>
                    <input type="text" placeholder="Enter your Website URL" name="url" value={formData.url} onChange={handleChange} />
                </div>
                <div style={{marginTop: '10px'}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
