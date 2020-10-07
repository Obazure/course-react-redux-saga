import React from 'react'
import {connect} from "react-redux";
import {createPost, throwAlert} from "../redux/actions";
import {Alert} from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if (!title.trim()) {
            return this.props.throwAlert('Please give a title.')
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>PostForm</h1>

                {this.props.alert && <Alert text={this.props.alert}/>}

                <div className="form-group">
                    <label htmlFor="title">Post Header</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        id="title"/>
                </div>
                <button className="btn btn-success" type="submit">Publish</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

const mapDispatchToProps = {
    createPost, throwAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)