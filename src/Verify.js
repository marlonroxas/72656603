import React, { Component } from 'react'
import axios from 'axios'

import Welcome from './pages/Welcome'
class Verify extends Component {
    constructor() {
        super()
        this.state = {loading: true, success: false, error: false}
    }
    componentDidMount() {
        const data = this.props.match
        const email = data.params.email
        const code = data.params.code
        const userType = data.params.userTypeId

        const header = { 
            "async": true,
            "crossDomain": true,
            "headers": { 
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            }
        }
        const form = new FormData()
        form.append("email", email)
        form.append("userTypeID", code)
        form.append("code", userType)
        axios.put('http://healthcareappapi.azurewebsites.net/api/User/ConfirmEmail?email=' + email
            + '&code=' + code + '&userTypeID=' + userType,
        header)
        .then((res) => {
            if(res.data.Success){
                this.setState({loading: false, success: true})
            }else{
                this.setState({loading: false, error: res.data.Message})
            }
            
        })
        .catch(() => {
            this.setState({loading: false, error: 'Oops! An error occured. Try again later.'})
        })
    }
    render() {
        if(this.state.loading){
            return(
                <h1>Loading... Please wait...</h1>
            )
        }
        if(this.state.success){
            return(
                <Welcome />
            )
        }
        if(this.state.error){
            return(
                <h1>{this.state.error}</h1>
            )
        }
        return (
            <h1>Hello</h1>
        )
    }
}
export default Verify;