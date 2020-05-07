import React, { Component } from 'react';
import '../css/BlogIcon.css';

const placeholder = require('../img/image-placeholder.jpg');

class BlogIcon extends Component {
    render() {
        return (
            <div className="container">
                <div className="icon-container">
                    <img className="icon" src={this.props.icon}/>
                </div>
                <div className="text-container">
                    <div className="text-content">
                        <p className="date">{this.props.date}</p>
                        <p className="blog-title">{this.props.title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

BlogIcon.defaultProps = {
    date: 'Date',
    title: 'Blog Title',
    icon: placeholder
};

export default BlogIcon;