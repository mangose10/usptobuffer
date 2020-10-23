import React, { Component } from 'react';
import Header from './admin/Header';
import Content from './admin/Content';


class dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default dashboard;