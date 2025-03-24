import React, { useState } from "react";

const RegisterForm: React.FC = () => {
    const [formData , setFormData ] = useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
       const {name , value } = e.target;
       setFormData( (prevData) => ({ ...prevData , [name]: value})  )
    }
    const handleSubmite = ( e: React.FormEvent ) =>{
      e.preventDefault();
      console.log('formData :' , formData)
    };

    return (
        <div className="register-container">
            <h2> Register Information </h2>
            <form onSubmit={handleSubmite} >
                <div>
                <label htmlFor="firstName"> First Name : </label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
               
                <div>
                <label htmlFor="lastName"> Last Name : </label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>

                <div>
                <label htmlFor="email"> Email : </label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div>
                <label htmlFor="password"> Password Name : </label>
                <input type="text" name="password" value={formData.password} onChange={handleChange} />
                </div>

                <div>
                <label htmlFor="confirmPassword"> Confirm Password  : </label>
                <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div>

            <button type="submit">Register</button>

                
            </form> 
        </div>
       
    );
};
export default RegisterForm;


