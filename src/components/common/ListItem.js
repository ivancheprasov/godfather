import PropTypes from 'prop-types';
import ErrorIcon from "@material-ui/icons/Error";
import "../../assets/list.scss";
import {useSelector} from "react-redux";
import * as data from "../../const/data";

const ListItem = props => {
    const budget = useSelector(state => state.data.budget);
    const {label, family, onClick} = props;
    return (
        <li>
            <div
                className={"list-item"}
                onClick={onClick}
            >
                <div>
                    <span>{label}</span>
                    {
                        (family || (budget && budget < data.RECRUITMENT_COST)) &&
                        <ErrorIcon className={"list-item-error-icon"}/>
                    }
                </div>
            </div>
        </li>
    );
}

ListItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    family: PropTypes.string
};

export default ListItem;
