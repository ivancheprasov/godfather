import {connect} from "react-redux";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Auth from "./Auth/Auth";
import Main from "./Main/Main";
import {Component} from "react";
import {initApp, setDeviceType} from "../actions/app";
import {login, setUserMessage} from "../actions/user";
import RecruitmentForm from "./Recruitment/RecruitmentForm";
import SimpleOrderForm from "./SimpleOrder/SimpleOrderForm";
import AddOrder from "./AddOrder/AddOrder";

class App extends Component {
    componentDidMount() {
        this.props.setDeviceType();
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        if (username && password) {
            this.props.login(username, password)
                .finally(
                    () => {
                        this.props.setUserMessage("");
                        this.props.initApp();
                    }
                );
        } else {
            this.props.initApp();
        }
    }

    render() {
        const {isLoading, isAuthorized} = this.props;
        return (
            <BrowserRouter>
                <Route exact path={["/auth", "/"]}>
                    <Auth/>
                </Route>
                {
                    !isLoading
                    &&
                    (
                        !isAuthorized
                            ?
                            <Redirect to={"/auth"}/>
                            :
                            <>
                                <Route path={"/main"}>
                                    <Main/>
                                </Route>
                                <Route path={"/recruit"}>
                                    <RecruitmentForm/>
                                </Route>
                                <Route path={"/orders/:id"}>
                                    <SimpleOrderForm/>
                                </Route>
                                <Route path={"/add"}>
                                    <AddOrder/>
                                </Route>
                            </>
                    )
                }
            </BrowserRouter>
        );
    }
}

App = connect(
    state => ({
        isAuthorized: state.user.isAuthorized,
        isLoading: state.app.isLoading,
        isAdmin: state.user.isAdmin
    }),
    {setDeviceType, initApp, login, setUserMessage}
)(App);

export default App;