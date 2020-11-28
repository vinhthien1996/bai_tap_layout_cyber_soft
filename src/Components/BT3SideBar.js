import React, { Component } from 'react'

export default class BT3SideBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h2>Shop Name</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="#">Category 1</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Category 2</a>
                        </li><li className="list-group-item">
                            <a href="#">Category 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
