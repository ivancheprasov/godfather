import PageWrapper from "../common/PageWrapper";
import ContentContainer from "../common/ContentContainer";
import OrderList from "./OrderList";
import HeaderMenu from "../common/HeaderMenu";

const Main = () => {
    return (
        <PageWrapper>
            <HeaderMenu/>
            <ContentContainer
                header={<span>Select an option</span>}
                body={<OrderList/>}
            />
        </PageWrapper>
    );
};

export default Main;