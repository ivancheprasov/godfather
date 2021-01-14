import {Field, reduxForm} from 'redux-form';
import "../assets/auth.scss";
import PageWrapper from "./PageWrapper.js";
import {login} from "../actions/user";
import {connect} from "react-redux";

let App = props => {
    const {isMobile, userMessage} = props;
    const submit = values => {
        props.login(values.username, values.password);
    };
    const className = isMobile ? "mobile" : "";
    return (
        <PageWrapper>
            <div className={`auth-header-wrapper ${className}`}>
                <span className={"auth-header"}>WELCOME</span>
            </div>
            <div className={`user-message-wrapper ${className}`}>
                <span className={"user-message"}>{userMessage || <br/>}</span>
            </div>
            <form name={"authorization-form"} className={"authorization-form"}
                  onSubmit={props.handleSubmit(submit)}>
                <Field
                    type={"text"}
                    name={"username"}
                    component={renderInput}
                    className={`auth-input ${className}`}
                    placeholder={"Username"}
                    maxLength={150}
                />
                <Field
                    type={"password"}
                    name={"password"}
                    component={renderInput}
                    className={`auth-input ${className}`}
                    placeholder={"Password"}
                    maxLength={128}
                />
                <button
                    type={"submit"}
                    className={`auth-button ${className}`}
                >
                    Sign In
                </button>
            </form>
        </PageWrapper>
    );
};

const renderInput = ({input, type, placeholder, className, meta: {touched, error}}) => {
    const inputClassName = `${className}${touched && error ? " input-error" : ""}`;
    return (
        <input
            {...input}
            type={type}
            placeholder={placeholder}
            className={inputClassName}
        />
    );
};

const authFormValidator = values => {
    const errors = {};
    const {username, password} = values;
    if (!username || username === "") {
        errors.username = "Required"
    }
    if (!password || password === "") {
        errors.password = "Required"
    }
    return errors;
};

App = reduxForm({
    form: "authorization-form",
    validate: authFormValidator
})(App);

App = connect(
    state => ({
        userMessage: state.user.userMessage,
        isMobile: state.app.isMobile
    }),
    {
        login
    }
)(App);

export default App;