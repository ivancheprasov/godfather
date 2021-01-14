import PropTypes from 'prop-types';
import "../../assets/list.scss";

const InfoProperty = props => {
    const {label, value, wrapperStyle} = props;
    return (
        <div className={"list-info"} style={wrapperStyle}>
            <span className={"list-info-property"}>{label}</span>
            <span>{value}</span>
        </div>
    );
};

InfoProperty.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    wrapperStyle: PropTypes.object
};

export default InfoProperty;