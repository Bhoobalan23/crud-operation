import  { React, Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FaEdit,FaTrashAlt } from 'react-icons/fa';

class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getData: []
        }
    }
    componentDidMount() {
        this.getAll()
    
    }
    getAll = () => {
        axios.get("http://localhost:4000/home/").then(res =>
            this.setState({
                getData: res.data
            })
            
        )
        console.log("data",this.state.getData)
    }
    del = data =>
    {
        var option = window.confirm(`Are you sure Want to Delete`)
        if(option)
        {
            axios.delete(`http://localhost:4000/home/del/${data._id}`).then(res => {
               // console.log(res);
                this.getAll();
              })
         }
    }

    edit = data => {
        
        axios.get(`http://localhost:4000/home/${data._id}`).then(res => {
            this.setState({
                editdata: res.data
            })

           localStorage.setItem('Home',this.state.editdata._id);          
           window.location.href = '/Home'
           
           console.log("data",data._id)
          
        
        })
   }
    render() {
        return (
                <div>
                <Link to='/Home'>Home</Link>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>District</th>
                        <th>State</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {this.state.getData.length > 0 ?
                        this.state.getData.map((result, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{result.name}</td>
                                <td>{result.email}</td>
                                <td>{result.district}</td>
                                <td>{result.state}</td>
                                <td>{result.contact}</td>
                                <td>{result.address}</td>
                                <td>< FaEdit style={{color:"#508aeb",fontSize:"30px"}}  onClick={()=> {this.edit(result)}} /> </td>
                                <td>< FaTrashAlt style={{color:"red",fontSize:"30px"}}  onClick={()=> {this.del(result)}} /></td>
                            </tr>
                        )
                        :
                        null
                    }
                </table>
            </div>
        );
    }
}

export default HomeList;
