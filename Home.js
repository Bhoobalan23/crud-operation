import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            files: [],
            getData: [],
            _id: "",
            name: "",
            email: "",
            district: "",
            state:"",
            contact:"",
            address:"",

        }
    }
    inputValue = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        // console.log("onchanges",value)
    }

    formSubmit = event => {
        event.preventDefault();
        if (!this.state.Edit_Id) {
    
         let data={
          
            name: this.state.name,
            email: this.state.email,
            district: this.state.district,
            state: this.state.state,
            contact: this.state.contact,
            address: this.state.address,
            
        }
    
          axios.post("http://localhost:4000/home/",data ).then(res => {
            ("success");
            this.setState({
                name: "",
                email: "",
                district: "",
                state: "",
                contact: "",
                address:"",
            })
            window.location.href = "/HomeList"
            localStorage.removeItem('Home')
          })
    
        } else {
          
           let data={
              
            name: this.state.name,
            email: this.state.email,
            district: this.state.district,
            state: this.state.state,
            contact: this.state.contact,
            address: this.state.address,
          _id: this.state._id
           }
    
          axios.put("http://localhost:4000/home/update/", data).then(res => {
            ("Success");
            this.setState({
                name: "",
                email: "",
                district: "",
                state: "",
                contact: "",
                address:"",
    
            })
            window.location.href = "/HomeList"
            localStorage.removeItem("Home")
          })
        }
    
    
      }

      componentDidMount(props) {
   
        const Edit_Id = localStorage.getItem('Home')
        console.log("data",Edit_Id)
    
        this.setState({
          Edit_Id
      })
    
      axios.get(`http://localhost:4000/home/${Edit_Id}`).then(res => {
       
       this.setState({
           data: res.data,  
           _id: res.data._id, 
           name : res.data.name,               
           email : res.data.email,
           district : res.data.district,
           state : res.data.state,
           contact : res.data.contact,  
           address : res.data.address,
       })
  
       console.log(res.data)
    }) 
    
     
    
        
      console.log("data",Edit_Id)
        
        
     }

     



    render() {
        return (
            <div>
                <section>

        <br></br><br></br><br></br>
         <form onSubmit={this.formSubmit}>
        <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="inputEmail4">Name</label>
                    <input type="text"  name="name" value={this.state.name} onChange={this.inputValue} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.inputValue} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="inputEmail4">State</label>
                    <input type="text" name="state" value={this.state.state} onChange={this.inputValue}/>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="inputEmail4">Mobile</label>
                    <input type="number" name="contact" value={this.state.contact} onChange={this.inputValue} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                    <label htmlFor="inputEmail4">Address<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" name="address" value={this.state.address} onChange={this.inputValue} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                <button type="submit" className="registerbtn">Register</button>
                </div>
            </div>
            
        </div>

        
        
    </form>
</section>
                
            </div>
        );
    }
}

export default Home;
