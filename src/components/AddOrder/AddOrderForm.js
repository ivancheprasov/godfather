import {Field, reduxForm} from "redux-form";
import SimpleInput from "../common/SimpleInput";
import "../../assets/addOrder.scss";

let AddOrderForm = () => {
    return (
        <form
            name={"add-order-form"}
            className={"add-order-form"}
        >
            <Field
                type={"text"}
                name={"cost"}
                component={SimpleInput}
                className={`add-order-input`}
                placeholder={"Cost"}
                maxLength={5}
            />
            <Field
                type={"text"}
                name={"income"}
                component={SimpleInput}
                className={`add-order-input`}
                placeholder={"Income"}
                maxLength={5}
            />
            <Field
                type={"text"}
                name={"lawyers_number"}
                component={SimpleInput}
                className={`add-order-input`}
                placeholder={"Number of Soldiers"}
                maxLength={5}
            />
            <Field
                type={"text"}
                name={"soldiers_number"}
                component={SimpleInput}
                className={`add-order-input`}
                placeholder={"Number of Lawyers"}
                maxLength={5}
            />
        </form>
    );
};

AddOrderForm = reduxForm({
    form: "add-order-form",
})(AddOrderForm);

export default AddOrderForm;