import {connect} from "react-redux";
import {logout, setUserMessage} from "../../actions/user";
import "../../assets/app.scss";
import {useEffect} from "react";

const HeaderMenu = props => {
    const {username, userMessage, setUserMessage, logout, isMobile} = props;
    useEffect(() => setUserMessage(""), [setUserMessage]);
    return(
        <div className={"header-menu"}>
            <span className={`header-message ${!isMobile ? "desktop-header-message": ""}`}>{userMessage}</span>
            <div>
                <span className={"username"}>{username}</span>
                <button
                    className={"sign-out-button"}
                    onClick={() => logout()}
                >
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        username: state.user.username,
        userMessage: state.user.userMessage,
        isMobile: state.app.isMobile
    }),
    {logout, setUserMessage}
)(HeaderMenu);

