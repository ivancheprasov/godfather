import {useSelector} from "react-redux";
import InfoProperty from "../common/InfoProperty";

const SoldierInfo = () => {
    const selectedSoldier = useSelector(state => state.orderForm.selectedSoldier);
    const {name, age, family, is_busy} = selectedSoldier;
    return (
        <>
            <InfoProperty label={"Name:"} value={name}/>
            {
                age &&
                <InfoProperty label={"Age:"} value={age}/>
            }
            <InfoProperty label={"Family:"} value={family || "Unemployed"}/>
            {
                is_busy != null &&
                <InfoProperty
                    label={"Is busy:"}
                    value={is_busy ? "Yes" : "No"}
                    wrapperStyle={{margin: 0}}
                />
            }
        </>
    );
};

export default SoldierInfo;