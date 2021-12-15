import { useContext } from "react";
import { FormInput } from "../src/FormInput";
import { AppContext, dataStore } from "./App";

export const ExpensesForm: React.FC = () => {
  const { state, setState } = useContext(AppContext);

  const handlesubmit = (e: any) => {
    e.preventDefault();
    let expensesForm = state.form["expensesForm"];
    console.log(expensesForm, dataStore.create());
  };

  return (
    <div className={"container"}>
      <div className={"form-row"}>
        <form
          action="/action_page.php"
          method="get"
          onSubmit={handlesubmit}
          name="accounting"
        >
          <FormInput
            name="name"
            formName={"expensesForm"}
            required={false}
          ></FormInput>
          <FormInput
            name="amount"
            type="number"
            formName={"expensesForm"}
            required={false}
          ></FormInput>
          <FormInput
            name="date"
            type="date"
            formName={"expensesForm"}
            required={false}
          ></FormInput>
          <button className="btn btn-primary btn-sm">Submit</button>
        </form>
      </div>
    </div>
  );
};
