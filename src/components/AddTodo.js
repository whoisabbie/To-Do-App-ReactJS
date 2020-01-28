import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => { this.setState({ [e.target.name]: e.target.value }); }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') {
            alert('Add To-Do Field cannot be empty.');
        }
        else {
            this.props.addTodo(this.state.title);
            this.setState({ title: '' });
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3 pt-2 pl-4 pr-4">
                    <input
                        autoFocus
                        type="text"
                        name="title"
                        value={this.state.title}
                        className="form-control"
                        placeholder="Add To-Do"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={this.onChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit" id="button-addon2">Add ToDo</button>
                    </div>
                </div>
            </form>

        );
    }
}

export default AddTodo;