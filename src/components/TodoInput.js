import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-secondary text-white">
                                <i className="fas fa-pencil-alt" />
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="What's Next?" value={item} onChange={handleChange}/>
                    </div>
                    <button type="submit" className={editItem?"btn btn-block btn-success mt-3": "btn btn-block btn-info mt-3"}>{editItem?'Edit':'Add Task'}</button>
                </form>
            </div>
        )
    }
}
