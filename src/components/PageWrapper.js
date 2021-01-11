import {LinearProgress} from '@material-ui/core';
import "../assets/app.scss";
import {useSelector} from "react-redux";

export const PageWrapper = props => {
    const isFetching = useSelector(state => state.app.isFetching);
    return (
        <>
            <LinearProgress className={"progress-bar"} style={{visibility: !isFetching && "hidden"}}/>
            {props.children}
        </>
    );
};