import React,{useState}  from "react";
import {useNavigate} from"react-router-dom";
import axios from "axios";
function RegistrationsForm() {
    const[formData,setFormData]=useState({fullname:'',email:'',country:'',
        phonenumber:'',city:'',password:'',confirmPassword:'',gender:'',
    applyPosition:''});
    const navigate=useNavigate();
    
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        try{
            await axios.post('http://localhost:8080/api/registrations',formData);
            navigate("/success");
        }
        catch(err)
        {
            alert("Failed to sumbite:"+err.message);
        }
    }
        
    return(
        <div>
            <h2>Registration Form</h2>
            <label>Full Name:</label><input name="full_name" placeholder="please enter your full name" onChange={handleChange}/> <br /><br />
            <label>Email:</label><input type="email" name="email" placeholder="please enter your email" onChange={handleChange}/> <br /><br />
            <label>Country:</label><input type="text" name="country" placeholder="please enter your country" onChange={handleChange}/> <br /><br />
            <label>Phone Number:</label><input type="text" name="phonenumber" placeholder="please enter your phone number" onChange={handleChange}/> <br /><br />
            <label>City:</label><input type="text" name="city" placeholder="please enter your city" onChange={handleChange}/> <br /><br />
            <label>Password:</label><input type="password" name="password" placeholder="please enter your password" onChange={handleChange}/> <br /><br />
            <label>Confirm Password:</label><input type="password" name="confirmPassword" placeholder="please confirm your password" onChange={handleChange}/> <br /><br />
            <label>Gender</label><select name="gender" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="preferNotToSay">Prefer not to say</option>
            </select> <br /><br />
            <label>Apply Position:</label><select name="position" onChange={handleChange}>
                <option value="">Select Position</option>
                <option value="developer">Java Developer</option>
                <option value="designer">Front end developer</option>
                <option value="manager">Back end developer</option>
            </select> <br /><br />
            <button onClick={handleSubmit}>Next Steps</button>
        </div>
    );
}
export default RegistrationsForm;