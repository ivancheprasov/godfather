import PageWrapper from "./PageWrapper";
import HeaderMenu from "./HeaderMenu";
import ContentContainer from "./ContentContainer";

const Recruitment = props => {
    return(
        <PageWrapper>
            <HeaderMenu/>
            <ContentContainer
                header={<span>Recruitment</span>}
                body={null}
            />
        </PageWrapper>
    )
};

export default Recruitment;