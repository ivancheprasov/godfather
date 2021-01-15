import PageWrapper from "../common/PageWrapper";
import HeaderMenu from "../common/HeaderMenu";
import ContentContainer from "../common/ContentContainer";
import ListFooter from "../common/ListFooter";
import AddOrderForm from "./AddOrderForm";
import {connect} from "react-redux";
import {formValueSelector} from "redux-form";
import {addOrder} from "../../actions/orderForm";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";

const AddOrder = props => {
    const {formValues, selectedFamily, isAdmin, addOrder} = props;
    const history = useHistory();
    useEffect(() => !isAdmin && history.replace("/main"), [isAdmin, history]);
    const submit = () => addOrder(formValues, selectedFamily).then(() => history.replace("/main"));
    return (
        <PageWrapper>
            <HeaderMenu/>
            <ContentContainer
                header={<span>Add Order</span>}
                body={<AddOrderForm/>}
                footer={
                    <ListFooter
                        onSubmit={submit}
                    />
                }
            />
        </PageWrapper>
    )
};

const selector = formValueSelector('add-order-form')

export default connect(
    state => ({
        formValues: selector(state, "cost", "income", "lawyers_number", "soldiers_number"),
        selectedFamily: state.orderForm.selectedFamily,
        isAdmin: state.user.isAdmin
    }),
    {addOrder}
)(AddOrder);