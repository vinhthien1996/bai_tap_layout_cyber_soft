import React, { Component } from 'react';
import BT3SideBar from './BT3SideBar';
import BT3Content from './BT3Content';
import BT3Header from './BT3Header';
import BT3Footer from './BT3Footer';

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div className="container-fluid p-0 m-0">
                <BT3Header />
                <div className="row mt-5 p-0 m-0">
                    <div className="col-md-12 col-lg-2 mt-3">
                        <BT3SideBar />
                    </div>
                    <div className="col-md-12 col-lg-10 mt-3">
                        <BT3Content />
                    </div>
                </div>
                <BT3Footer />
            </div>
        )
    }
}
