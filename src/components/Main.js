import {PageWrapper} from "./PageWrapper";
import "../assets/main.scss";
import {connect} from "react-redux";
import {logout} from "../actions/user";

let Main = props => {
    return (
        <PageWrapper>
            <div className={"header-menu"}>
                <span className={"username"}>{props.username}</span>
                <button
                    className={"sign-out-button"}
                    onClick={() => props.logout()}
                >
                    Sign out
                </button>
            </div>
        </PageWrapper>
    );
};

Main = connect(
    state => ({
        username: state.user.username
    }),
    {logout}
)(Main);

export default Main;