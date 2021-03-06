import React from 'react';
import axios from 'axios';


import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import './landing.style.css';


import ImageContainer from '../../components/image-container/image-container.componenet';
import CustomButton from '../../components/custom-button/CustomButton.components';
import UpdateContainer from '../../components/update-container/update.componenet';
import Posts from '../../components/posts/posts.component';
import NewPost from '../../components/newpost/newpost.component';


class LandingPage extends React.Component {

    constructor(){
        super();

        this.state = {
            first_name:"",
            last_name:"",
            username:"",
            path:"",
            id:"",
            check:false,
            
        }
    }

    componentDidMount(){
        if(this.props.token){
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization:  `Token ${this.props.token}`
            }
            axios.get("http://127.0.0.1:8000/accounts/userdetails").then(
                resp=>{
                    this.setState({
                        first_name:resp.data.user.first_name,
                        last_name:resp.data.user.last_name,
                        username:resp.data.user.username,
                        id:resp.data.user.id,
                        path:resp.data.profile_pic
                    })
                    
                } 
                
            ).catch(err => console.log(err))
        }
        }
    
    
    

       

    toggleButton = e => {
        this.setState(state=>({
            check: !state.check
        }));
        
    }

  

    render() {

        if(this.props.token==null)
        {
            return(
                <Redirect to='/login' />
            )
        }

        return(
            <div className='landing-page-group'>
                <div className='left'>
                        <ImageContainer  path={this.state.path} />
                        <CustomButton name='change' className='button' onClick={this.toggleButton} />  
                        {
                            this.state.check?<UpdateContainer type='file' id={this.state.id} />:null
                           
                        } 
                </div>
                <div className='right'>
                        <NewPost />
                        <Posts />
                </div>
              
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token:state.auth.token
    };
}


export default connect(mapStateToProps)(LandingPage);