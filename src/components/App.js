import {useSelector} from "react-redux";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Auth from "./Auth";
import Main from "./Main";

const App = props => {
    const isAuthorized = useSelector(state => state.user.isAuthorized);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent);
    return (
        <BrowserRouter>
            <Route path={"/auth"}>
                <Auth isMobile={isMobile}/>
            </Route>
            <Route path={"/main"}>
                <Main isMobile={isMobile}/>
            </Route>
            {
                isAuthorized ?
                    <Redirect to={"/main"}/>
                    :
                    <Redirect to={"/auth"}/>
            }
        </BrowserRouter>
    );
}

export default App;