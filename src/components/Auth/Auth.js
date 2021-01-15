import {Field, reduxForm} from 'redux-form';
import "../../assets/auth.scss";
import PageWrapper from "../common/PageWrapper.js";
import {login, setUserMessage} from "../../actions/user";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import SimpleInput from "../common/SimpleInput";

let App = props => {
    const {isMobile, userMessage, setUserMessage, login} = props;
    const history = useHistory();
    useEffect(() => setUserMessage(""), [setUserMessage]);
    const submit = values => {
        login(values.username, values.password).then(() => history.replace("/main"));
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
                    component={SimpleInput}
                    className={`auth-input ${className}`}
                    placeholder={"Username"}
                    maxLength={150}
                />
                <Field
                    type={"password"}
                    name={"password"}
                    component={SimpleInput}
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
        login,
        setUserMessage
    }
)(App);

export default App;