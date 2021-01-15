import PageWrapper from "../common/PageWrapper";
import HeaderMenu from "../common/HeaderMenu";
import ContentContainer from "../common/ContentContainer";
import ListFooter from "../common/ListFooter";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {giveOrder} from "../../actions/orderForm";
import {useEffect} from "react";
import SimpleOrderInfo from "./SimpleOrderInfo";

const SimpleOrderForm = props => {
    const {selectedFamily, selectedOrder, giveOrder} = props;
    const history = useHistory();
    useEffect(() => !selectedOrder && history.replace("/main"), [selectedOrder, history]);
    return (
        <PageWrapper>
            <HeaderMenu/>
            <ContentContainer
                header={<span>Order № {selectedOrder && selectedOrder.id}</span>}
                body={<SimpleOrderInfo/>}
                footer={
                    <ListFooter
                        onSubmit={
                            () => giveOrder(selectedFamily, selectedOrder.id)
                                .then(() => history.push("/main"))
                        }
                    />
                }
            />
        </PageWrapper>
    );
};

export default connect(
    state => ({
        selectedFamily: state.orderForm.selectedFamily,
        selectedOrder: state.orderForm.selectedOrder
    }),
    {giveOrder}
)(SimpleOrderForm);