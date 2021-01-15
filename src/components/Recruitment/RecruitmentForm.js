import PageWrapper from "../common/PageWrapper";
import HeaderMenu from "../common/HeaderMenu";
import ContentContainer from "../common/ContentContainer";
import ListFooter from "../common/ListFooter";
import {connect} from "react-redux";
import {recruit, setSelectedSoldier} from "../../actions/orderForm";
import {useHistory} from "react-router-dom";
import SoldierList from "./SoldierList";
import SoldierInfo from "./SoldierInfo";
import {useEffect} from "react";

const RecruitmentForm = props => {
    const {selectedFamily, selectedSoldier, recruit, setSelectedSoldier} = props;
    useEffect(() => {
        setSelectedSoldier(null)
    }, [setSelectedSoldier]);
    const history = useHistory();
    return (
        <PageWrapper>
            <HeaderMenu/>
            <ContentContainer
                header={<span>Recruitment</span>}
                body={
                    selectedSoldier ?
                        <SoldierInfo/>
                        :
                        <SoldierList/>
                }
                footer={
                    <ListFooter
                        disabled={!selectedSoldier}
                        onSubmit={
                            () => recruit(selectedFamily, selectedSoldier.id)
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
        selectedSoldier: state.orderForm.selectedSoldier
    }),
    {recruit, setSelectedSoldier}
)(RecruitmentForm);