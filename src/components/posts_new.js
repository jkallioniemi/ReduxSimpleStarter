import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className={`form-group ${field.meta.invalid && field.meta.touched ? "has-danger" : ""}`}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {field.meta.touched ? field.meta.error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.tags) {
        errors.tags = "Enter at least one tag!";
    }

    if (!values.content) {
        errors.content = "Enter some content!";
    }

    return errors;
}

export default reduxForm({
    form: "PostsNewForm",
    validate
})(PostsNew);
