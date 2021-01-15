import PageWrapper from "../common/PageWrapper";
import ContentContainer from "../common/ContentContainer";
import OrderList from "./OrderList";
import HeaderMenu from "../common/HeaderMenu";
import {connect} from "react-redux";
import MainFooter from "./MainFooter";
import {useEffect} from "react";
import {setUserMessage} from "../../actions/user";

const Main = props => {
    const {isAdmin, isLoading, setUserMessage} = props;
    useEffect(() => setUserMessage(""), [setUserMessage]);
    return (
        <PageWrapper>
            {
                !isLoading &&
                    <>
                        <HeaderMenu/>
                        {
                            isAdmin ?
                                <ContentContainer
                                    header={<span>Select an option</span>}
                                    body={<OrderList/>}
                                    footer={<MainFooter/>}
                                />
                                :
                                <ContentContainer
                                    header={<span>Select an option</span>}
                                    body={<OrderList/>}
                                />
                        }
                    </>
            }
        </PageWrapper>
    );
};

export default connect(
    state => ({
        isAdmin: state.user.isAdmin,
        isLoading: state.app.isLoading
    }),
    {setUserMessage}
)(Main);