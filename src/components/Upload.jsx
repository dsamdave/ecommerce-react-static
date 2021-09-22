import axios from "axios";
import { useState } from 'react'
import Headimage from "./Headimage";


const Upload = () => {

    // const [formValue, setFormValue] = useState({
    //     name: '',
    //     description: '',
    //     price: '',
    //     file: '',

    // });


    // const handleSubmit = async () => {
    //     const uploadFormData = new FormData();
    //     uploadFormData.append("name", formValue.name)
    //     uploadFormData.append("description", formValue.description)
    //     uploadFormData.append("price", formValue.price)
    //     uploadFormData.append("image", formValue.image)

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
            <div className="upload-form card">
                <form className="form-body" >
                    <h2>Upload A Product</h2>
                    <div className="form-control">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Product Name" 
                        required 
                        
                        
                        />
                    </div>
                    <div className="form-control">
                        <input 
                        type="text" 
                        name="description" 
                        placeholder="Product Description" 
                        required 
                        
                       
                        />
                    </div>
                    <div className="form-control">
                        <input 
                        type="number" 
                        name="price" 
                        placeholder="Product Price" 
                        required 
                        
                        
                        />
                    </div>
                    <div className="form-control">
                        <input 
                        type="file" 
                        name="image"
                        required 
                        
                       
                        />
                    </div>
                    <input type="submit" value="Post Product" className="bttn bttn-primary" />
                </form>
            </div>
                <Headimage />
        </section>
     );
}
 
export default Upload;