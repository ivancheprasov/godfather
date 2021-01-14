import PropTypes from 'prop-types';
import "../assets/app.scss";
import {useSelector} from "react-redux";

const ContentContainer = props => {
    const isMobile = useSelector(state => state.app.isMobile);
    const className = isMobile ? "mobile" : "desktop";
    const {header, body} = props;
    return (
        <div className={`content-container ${className}`}>
            {
                header &&
                <div className={`content-container-header ${className}`}>
                    {header}
                </div>
            }
            <div
                className={`content-container-body ${className}`}
                style={{height: !header && "calc(100% - 40px)"}}
            >
                {body}
            </div>
        </div>
    );
};

ContentContainer.propTypes = {
    header: PropTypes.element,
    body: PropTypes.element.isRequired
};

export default ContentContainer;