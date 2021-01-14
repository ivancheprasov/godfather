import PropTypes from 'prop-types';
import "../../assets/app.scss";
import {useSelector} from "react-redux";

const ContentContainer = props => {
    const isMobile = useSelector(state => state.app.isMobile);
    const className = isMobile ? "mobile" : "desktop";
    const {header, body, footer} = props;
    const style =
        header ?
            footer ?
                {height: `calc(70% - 40px)`, padding: "20px 0"}
                :
                {height: `calc(90% - 22px)`, paddingTop: "20px"}
            :
            footer ?
                {height: `calc(80% - 22px)`, paddingBottom: "20px"}
                :
                {height: `calc(100% - 4px)`}
    ;
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
                style={style}
            >
                {body}
            </div>
            {
                footer &&
                <div className={`content-container-footer ${className}`}>
                    {footer}
                </div>
            }
        </div>
    );
};

ContentContainer.propTypes = {
    header: PropTypes.element,
    body: PropTypes.element.isRequired,
    footer: PropTypes.element
};

export default ContentContainer;