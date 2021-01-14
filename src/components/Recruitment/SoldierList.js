import {connect} from "react-redux";
import ListItem from "../common/ListItem";
import {loadSoldiers} from "../../actions/data";
import {setSelectedSoldier} from "../../actions/orderForm";
import "../../assets/list.scss";
import {useEffect} from "react";

const SoldierList = props => {
    const {soldiers, setSelectedSoldier, loadSoldiers} = props;
    useEffect(() => loadSoldiers(), [loadSoldiers]);
    return (
        <div className={"list"}>
            {
                soldiers.map(
                    (soldier, key) =>
                        <ListItem
                            key={key}
                            label={soldier.name}
                            onClick={() => setSelectedSoldier(soldier)}
                        />
                )
            }
        </div>
    );
}

export default connect(
    state => ({soldiers: state.data.soldiers}),
    {loadSoldiers, setSelectedSoldier}
)(SoldierList);