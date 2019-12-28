import React, { Component } from 'react';

export default class BackToTop extends Component {
    render() {
        return (
            <>
                <a href="/" className="back-to-top" id="back-to-top"> 
                    <i className="mdi mdi-chevron-up"> </i> 
                </a>
            </>
        )
    }
};