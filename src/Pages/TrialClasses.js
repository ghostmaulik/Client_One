import React, { Component } from 'react'
import MyAppBaMobile from '../Components/mAppBar'
import MyAppBar from '../Components/AppBar'
import MyFooter from '../Components/Footer'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import './TrialClasses.css'

export class TrialClasses extends Component {
    render() {
        return (
            <div>
                <div className="mobile" >
                    <MyAppBaMobile/>
                </div>
                <div className="responsive" >
                    <MyAppBar/>
                </div>
                <div style={{marginTop:"4vh",padding:"0 10%"}} >
                    <h1>
                        Request A Trial Class
                    </h1>
                    <div>
                        After requesting a time, a member of our team will call you within two business days to review our program and student expectations.
                    </div>
                    <div className="trial-form-container" >
                        <div className="trial-form" >
                            <form>
                                <input placeholder="Student Name" className="trial-input" ></input>
                                <input placeholder="School Name" className="trial-input" ></input>
                                <input placeholder="Student Age" className="trial-input" ></input>
                                <input placeholder="Parents Name" className="trial-input" ></input>    
                                <input placeholder="Mobile Number" className="trial-input" ></input>
                                <input type='email' placeholder="Email" className="trial-input" ></input>
                                <button className="trial-submit-button" >SUBMIT</button>
                            </form>
                        </div>
                        <div style={{width:"50%"}} >
                            <div>
                                Connect with us
                            </div>
                            <div>
                                Email us at hello@codingzen.in
                            </div>
                            <div>
                                <b>Call</b> us at (+91) 9958405905
                            </div>
                            <div>
                                Find us on social media:
                            </div>
                            <div>
                                <FaFacebook color="#5472d2" size="40px" style={{margin:"10px"}} />
                                <FaTwitter color="#5aa1e3" size="40px" style={{margin:"10px"}} />
                            </div>
                        </div>
                    </div>
                </div>
                <MyFooter/>
            </div>
        )
    }
}

export default TrialClasses
