import {connect} from "react-redux";
import {logout} from "../../actions/user";
import "../../assets/app.scss";

const HeaderMenu = props => {
    return(
        <div className={"header-menu"}>
            <span className={"username"}>{props.username}</span>
            <button
                className={"sign-out-button"}
                onClick={() => props.logout()}
            >
                Sign out
            </button>
        </div>
    );
};

export default connect(
    state => ({
        username: state.user.username
    }),
    {logout}
)(HeaderMenu);

