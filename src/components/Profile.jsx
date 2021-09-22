import axios from "axios";
import { useState } from 'react';
import Headimage from "./Headimage";
import { Link } from 'react-router-dom';


const Profile = () => {

    // const [formValue, setFormValue] = useState({
    //     name: '',
    //     email: '',
    //     number: '',
    //     password: '',

    // });


    // const handleSubmit = async () => {
    //     const uploadFormData = new FormData();
    //     uploadFormData.append("name", formValue.name)
    //     uploadFormData.append("email", formValue.email)
    //     uploadFormData.append("number", formValue.number)
    //     uploadFormData.append("password", formValue.password)

    //     try {
    //         const productDetails = await axios ({
    //             method: "post",
    //             url: " ",
    //             data: uploadFormData,
    //             headers: {"Content-Type": "multipart/form-data"}
    //         });
            
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }


    // const handleChange = (e) =>{
    //     setFormValue({
    //         ...formValue,
    //         [e.target.name]: e.target.value
    //     });
    // }




    return ( 
        <section>
            <div className=" upload-form profile-form card">
                <form className="form-body" >
                    <h2>Register WIth CreekMart</h2>
                    <div className="form-control">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name" 
                        required 
                        
                      
                        />
                    </div>
                    <div className="form-control">
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                        
                        
                        />
                    </div>
                    <div className="form-control">
                        <input 
                        type="number" 
                        name="number" 
                        placeholder="Phone number" 
                        required 
                        
                        
                        />
                    </div>
                    <div className="form-control">
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required 
                        
                     
                        />
                    </div>
                    
                    <input type="submit" value="register" className="bttn bttn-primary" />
                <p>Already have an account? <Link to="/login"><span>Login Here</span></Link></p>
                </form>
            </div>
                <Headimage />
        </section>
     );
}
 
export default Profile;