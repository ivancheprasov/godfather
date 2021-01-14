import {useSelector} from "react-redux";
import OrderListItem from "./OrderListItem";


const OrderList = () => {
    const orders = useSelector(state => state.data.orders);
    return(
      <div className={"order-list"}>
          <OrderListItem label={"recruitment"} path={"/recruit"}/>
          {
              orders && orders.map((order, key) => <OrderListItem key={key} label={order.id} path={`/orders/${order.id}`}/>)
          }
      </div>
    );
};

export default OrderList;