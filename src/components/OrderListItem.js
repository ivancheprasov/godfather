import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import "../assets/order.scss";

const OrderListItem = props => {
    const {label, path} = props;
    return (
        <li>
            <Link
                className={"order-list-item"}
                to={path}
            >
                {label}
            </Link>
        </li>
    );
}

OrderListItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default OrderListItem;
