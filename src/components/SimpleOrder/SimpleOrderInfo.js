import {useSelector} from "react-redux";
import InfoProperty from "../common/InfoProperty";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const SimpleOrderInfo = () => {
    const selectedOrder = useSelector(state => state.orderForm.selectedOrder);
    const history = useHistory();
    useEffect(() => !selectedOrder && history.replace("/main"), [selectedOrder, history]);
    const order = selectedOrder || {};
    const {cost, income, soldiers_number, lawyers_number, description} = order;
    return (
        <>
            <InfoProperty label={"Cost:"} value={cost}/>
            <InfoProperty label={"Income:"} value={income}/>
            <InfoProperty label={"Soldiers Required:"} value={soldiers_number}/>
            <InfoProperty label={"Lawyers Required:"} value={lawyers_number}/>
            {
                description &&
                <InfoProperty
                    label={"Description:"}
                    value={description}
                    wrapperStyle={{margin: 0}}
                />
            }
        </>
    );
};

export default SimpleOrderInfo;