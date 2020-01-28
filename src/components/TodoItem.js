import React, { Component } from 'react';

class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()} className="text-capitalize bg-light p-4 m-2">
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, this.props.todo.id)}
                    checked={this.props.todo.isCompleted}
                />
                {' '}
                {this.props.todo.title}
                {' '}
                <button
                    type="button"
                    onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}
                    className="btn btn-outline-danger btn-sm float-right"
                >
                    Delete To-Do
                </button>
            </div>
        );
    }
}

export default TodoItem;