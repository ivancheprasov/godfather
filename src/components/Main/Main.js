import PageWrapper from "../common/PageWrapper";
import ContentContainer from "../common/ContentContainer";
import OrderList from "./OrderList";
import HeaderMenu from "../common/HeaderMenu";
import {useSelector} from "react-redux";
import MainFooter from "./MainFooter";

const Main = () => {
    const isAdmin = useSelector(state => state.user.isAdmin);
    return (
        <PageWrapper>
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
        </PageWrapper>
    );
};

export default Main;