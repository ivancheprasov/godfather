import { LinearProgress } from '@material-ui/core';
import "../assets/app.scss";
import {useSelector} from "react-redux";

export const PageWrapper = props => {
    const isFetching = useSelector(state => state.user.isFetching);
    return (
        <>
            {
                isFetching && <LinearProgress className={"progress-bar"}/>
            }
            {props.children}
        </>
    );
};