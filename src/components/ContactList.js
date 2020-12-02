import React, { Fragment } from 'react';

class ContactList extends React.Component{
    constructor(props){
        super(props)
    }

    clickContact=(contact)=>{

        //  alert(JSON.stringify(contact));   /////
        this.props.pushContact(contact);
    }; 

    render(){
        return(
            <Fragment>
        {/* <pre>{JSON.stringify(this.props.contacts)}</pre> */}
                       
                 <table className="table table-hover table-primary text-center table-striped">
                           <thead className="bg-dark text-white">
                                 <tr>
                                     <th>SNO</th>
                                     <th>IMAGE</th>
                                     <th>NAME</th>
                                     <th>AGE</th>
                                     <th>EMAIL</th>
                                     <th>LOCATION</th>
                                 </tr>
                          </thead>     

                          <tbody>

                              {
                                   Object.keys(this.props).length !==0 ?   // Important Check and Receive
                                    <Fragment>
                                         {
                                             this.props.contacts.map((contact)=>{
                                                   return(
                                                       <tr onClick = {this.clickContact.bind(this, contact)}>
                                                         <td>{contact.login.uuid.substr(contact.login.uuid.length - 4)}</td>
                                                       <td>
                                                           <img src={contact.picture.large} width="80"/>
                                                       </td>
                                                   <td>{contact.name.first} {contact.name.last}</td>
                                                   <td>{contact.dob.age} Yrs.</td>
                                                   <td>{contact.email}</td>
                                                   <td>{contact.location.city}</td>
                                                       </tr>
                                                   )
                                             })
                                         }
                                    </Fragment> : null
                              }
                          </tbody>


                </table>    
            
            </Fragment>
        )
    }
}

export default ContactList;
