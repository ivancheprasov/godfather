import {useHistory} from "react-router-dom";
import "../../assets/main.scss";

const MainFooter = () => {
    const history = useHistory();
    return (
        <div className={"main-footer"}>
            <button className={"add-order-button"} onClick={() => history.push("/add")}>Add Order</button>
        </div>
    );
};

export default MainFooter;