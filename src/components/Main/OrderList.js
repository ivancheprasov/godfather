import {connect} from "react-redux";
import ListItem from "../common/ListItem";
import {loadOrders} from "../../actions/data";
import "../../assets/list.scss";
import {setSelectedOrder} from "../../actions/orderForm";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";

const OrderList = props => {
    const {orders, setSelectedOrder, loadOrders} = props;
    useEffect(() => loadOrders(), [loadOrders]);
    const history = useHistory();
    return (
        <div className={"list"}>
            <ListItem label={"Recruitment"} onClick={() => history.push("/recruit")}/>
            {
                orders.map(
                    (order, key) =>
                        <ListItem
                            key={key}
                            label={`Order № ${order.id}`}
                            onClick={
                                () => {
                                    setSelectedOrder(order);
                                    history.push(`/orders/${order.id}`);
                                }
                            }
                        />
                )
            }
        </div>
    );
}

export default connect(
    state => ({orders: state.data.orders}),
    {loadOrders, setSelectedOrder}
)(OrderList);