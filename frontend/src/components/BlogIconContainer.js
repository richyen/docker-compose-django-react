import React, { Component } from 'react';
import BlogIcon from './BlogIcon';
import '../css/BlogIconContainer.css';

class BlogIconContainer extends Component {
    render() {
        return (
            <div className="icon-container">
                <ul>
                    <li><BlogIcon title="Welcome to ISMP!"/></li>
                    <li><BlogIcon/></li>
                    <li><BlogIcon/></li>
                    <li><BlogIcon/></li>
                    <li><BlogIcon/></li>
                    <li><BlogIcon/></li>
                </ul>
            </div>
        );
    }
}

export default BlogIconContainer;