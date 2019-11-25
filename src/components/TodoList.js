import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <hi>Hello from TodoList.js</hi>
                <Item />
            </div>
        )
    }
}
