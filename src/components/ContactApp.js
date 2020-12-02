import React, { Fragment } from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
import Axios from 'axios';

class ContactApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contacts : null,
            errorMessage : null,
            selectedContact : null           /////
        }
    }

    pullContact = (contact)=>{              /////
        this.setState({
          selectedContact : contact
        });
    };

componentDidMount(){

    let dataURL ='https://gist.githubusercontent.com/anavenirajkumar/5f9445833dbb235b96461fed3eb815a4/raw/82fbf3dadddd7499703329554095f434ed2f133c/Contact-List-09072020.json'
     
    Axios.get(dataURL).then((responce)=>{

     this.setState({
          contacts : responce.data
   })
      }).catch((err)=>{

        this.setState({
            errorMessage : err
        })  
    })
}

    render(){
        return(
            <Fragment>
                {/* <pre>{JSON.stringify(this.state.contacts)}</pre> */}
                   
                {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}

                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Contact App</p>
                                 <p className="lead">AAAAAAAAAAAAAAAAAAAAAAAAAAA</p>                            
                             </div>
                        </div>

                        <div className="row">

                            <div className="col-md-9">          
                                { 
                                       this.state.contacts ?     // This Data Is Avalable And Sent to Contact List Component 
                                              
                                <Fragment>

                                        <ContactList contacts={this.state.contacts}
                                        
                                                ///// 
                                        pushContact={this.pullContact}></ContactList>   
                              
                               </Fragment>: null

                                }
                            </div>

                            <div className="col-md-3">
                                             {/* //////   */}
                                   <ContactCard selectedContact = {this.state.selectedContact}></ContactCard> 
                                
                            </div>
                        </div>
                    </div>
                     
            </Fragment>
        )
    }
}

export default ContactApp;
