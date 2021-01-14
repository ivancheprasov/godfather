import PropTypes from 'prop-types';
import "../../assets/list.scss";

const ListItem = props => {
    const {label, onClick} = props;
    return (
        <li>
            <div
                className={"list-item"}
                onClick={onClick}
            >
                {label}
            </div>
        </li>
    );
}

ListItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ListItem;
