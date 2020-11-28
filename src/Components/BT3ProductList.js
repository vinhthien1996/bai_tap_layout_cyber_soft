import React, { Component } from 'react'
import BT3ProductItem from './BT3ProductItem';

export default class BT3ProductList extends Component {
    render() {
        return (
            <div class="col-12 mt-2">
                <div className="row">
                    <BT3ProductItem name="Item One" />
                    <BT3ProductItem name="Item Two" />
                    <BT3ProductItem name="Item Three" />
                    <BT3ProductItem name="Item Four" />
                    <BT3ProductItem name="Item Five" />
                    <BT3ProductItem name="Item Six" />
                </div>
            </div>
        )
    }
}
