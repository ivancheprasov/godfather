import PageWrapper from "./PageWrapper";
import ContentContainer from "./ContentContainer";
import OrderList from "./OrderList";
import HeaderMenu from "./HeaderMenu";

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