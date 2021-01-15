import PropTypes from 'prop-types';
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import * as families from "../../const/families";
import {connect} from "react-redux";
import {handleFamilyChange} from "../../actions/orderForm";
import {loadFamilyBudget} from "../../actions/data";
import {useEffect} from "react";

const ListFooter = props => {
    const {selectedFamily, handleFamilyChange, loadFamilyBudget, onSubmit, disabled} = props;
    useEffect(() => loadFamilyBudget(selectedFamily || families.Corleone), [loadFamilyBudget, selectedFamily]);
    return(
      <div className={"list-footer"}>
          <RadioGroup
              name="family"
              value={selectedFamily}
              defaultValue={families.Corleone}
              onChange={event => handleFamilyChange(event.target.value)}
          >
              <FormControlLabel value={families.Corleone} control={<Radio/>} label={"Corleone"}/>
              <FormControlLabel value={families.Tattalgia} control={<Radio/>} label={"Tattaglia"}/>
          </RadioGroup>
          <button
              className={"list-submit-button"}
              onClick={onSubmit}
              disabled={disabled}
          >
              Send
          </button>
      </div>
    );
};

ListFooter.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default connect(
    state => ({selectedFamily: state.orderForm.selectedFamily}),
    {handleFamilyChange, loadFamilyBudget}
)(ListFooter);