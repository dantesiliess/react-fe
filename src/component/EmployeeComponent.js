import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class EmployeeComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            employee:{},
            department:{},
            organization:{}
        }
    }
    
    componentDidMount(){
        EmployeeService.getEmployee().then(
            (response)=>{
                console.log(response);
                console.log('employee');
                console.log(response.data.employee);
                console.log('department');
                console.log(response.data.department);
                this.setState({employee:response.data.employee, 
                    department:response.data.department.departmentDto, 
                    organization:response.data.department.organizationDto})
                console.log(this.state);
            }
           
        )
    }

    render() {
        return (
            <div>
                <div className='card col-md-9 offset-md-3'>
                    <h3 className='text-center card-header'> View Employee details</h3>
                    <div className='card-body'>
                        <div className='row'>
                             <p><strong>First Name</strong> {this.state.employee.firstName}</p>
                        </div>
                        <div className='row'>
                             <p><strong>Last Name</strong> {this.state.employee.lastName}</p>
                             <p><strong>Email</strong> {this.state.employee.email}</p>
                             <p><strong>id</strong> {this.state.employee.id}</p>
                             <p><strong>Dept code</strong> {this.state.employee.departmentCode}</p>
                        </div>
                    </div>
                </div>
             <br></br>
                <div className='card offset-md-3'>
                    <h3 className='text-center card-header'> View Department details</h3>
                    <div className='card-body'>
                        <div className='row'>
                             <p><strong>Name</strong> {this.state.department.departmentName}</p>
                             <p><strong>Description</strong> {this.state.department.departmentDescription}</p>
                             <p><strong>Email</strong> {this.state.department.departmentCode}</p>
                             <p><strong>Org code</strong> {this.state.department.organizationCode}</p>

                        </div>
                    </div>
                </div>
           <br></br>
                <div className='card offset-md-3'>
                    <h3 className='text-center card-header'> Organization details</h3>
                    <div className='card-body'>
                        <div className='row'>
                             <p><strong>Name</strong> {this.state.organization.name}</p>
                             <p><strong>Email</strong> {this.state.organization.code}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeComponent;