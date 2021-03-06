import React from 'react';

import Badge from '../components/Badge';
import BadgeFrom from '../components/BadgeForm'
import './styles/BadgeNew.css'

import header from '../images/badge-header.svg'
import urlProfile from '../images/profile-RockLee.jpg'

class BadgeNew extends React.Component {

    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() { 
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img_fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl={urlProfile}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeFrom 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default BadgeNew;

