import React from 'react';


function InputForm(){

    const [formData,setFormData] = React.useState({
        name: "",
        age : "",
        address : "",
        department : "",
        salary : "",
        martialState : false

    });
    const handleChange = (e)=>{
        let {name,value , type , cheked} = e.target;
        // value = type === "checkbox"? checked : value;
        setFormData({...formData,[name]:value});
    }
    const{name,age,address,department,salary,margialState} = formData;
    return (
        <>
            <h1>Input Form</h1>
            <form>
                <label htmlFor="name">Name :</label>
                <input
                    type="text"
                    name= "name"
                    value = {name}
                    onChange = {handleChange}
                />
                <br/>
                <label htmlFor = "age">Age : </label>
                <input
                    type = "text"
                    name = "age"
                    value = {age}
                    onChange = {handleChange}
                />
                <br/>
                <label htmlFor = "address">Address : </label>
                <input 
                    type = "text"
                    name = "address"
                    value = {address}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor = "department">Department</label>
                <input 
                    type="text"
                    name = "department"
                    value = {department}
                    onChange = {handleChange}
                />
                <br/>
                <label htmlFor = "salary">Salary</label>
                <input 
                    type = "text"
                    name = "salary"
                    value = {salary}
                    onChange = {handleChange}
                />
                <br/>
            </form></>
    )
}


export default InputForm
