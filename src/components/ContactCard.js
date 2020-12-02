import React, { Fragment } from 'react';

class ContactCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Fragment>

        {/* <pre>{JSON.stringify(JSON.stringify(this.props.selectedContact))}</pre> */}

                 {
                     this.props.selectedContact ?
                     <Fragment>
                        
                         <div className="card sticky-top">
                             <div className="card-header bg-primary p-4">
                                     <div className="p-4"></div>
                             </div>

                             <div className="card-body text-center">
                                 <img src={this.props.selectedContact.picture.large} className="img-fluid img-thumbnail rounded-circle width-50 contact-img"/>
                                  <ul className="list-group text-left m-3">
                                      <li className="list-group-item list-group-item-primary">
                                          NAME:  {this.props.selectedContact.name.first} {this.props.selectedContact.name.last}
                                      </li>
                                          <li className="list-group-item list-group-item-primary">
                                               AGE : {this.props.selectedContact.dob.age}
                                         </li>
                                      <li className="list-group-item list-group-item-primary">
                                               EMAIL :  {this.props.selectedContact.email}
                                       </li>
                                       <li className="list-group-item list-group-item-primary">
                                             ADDRESS :   {this.props.selectedContact.location.city}
                                       </li> 
                                  </ul>
                             
                             </div>
                         </div>

                    </Fragment> : null

                 }
                
            </Fragment>
        )
    }
}

export default ContactCard;
