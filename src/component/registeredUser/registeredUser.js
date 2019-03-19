import React,{ Component } from 'react';

class RegisteredUser extends Component{

    constructor(props){
        super();
        console.log("Users",props);
    }

    // componentDidMount = () => {
    //     fetch('http://dummy.restapiexample.com/api/v1/employee/56993')
    //         .then(response => response.json())
    //             .then(json => console.log(json))
    // }

    render(){
        return(
            <div class="container">

                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                        <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
                
                </div>
        );
    }
}

export default RegisteredUser;