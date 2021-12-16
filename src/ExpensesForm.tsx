import { useContext, useState } from "react";
import { FormInput } from "../src/FormInput";
import { AppContext } from "./App";
import { dataStore } from "./dataStore";

export const ExpensesForm: React.FC = () => {
  const { state, setState } = useContext(AppContext);

  const handlesubmit = (e: any) => {
    e.preventDefault();
    let { name, amount, date } = state.form["expensesForm"];
    // dataStore.create(name, amount, date);
    state.config.isUpdated = true;
    setState(state);
    console.log("handlesubmit", state.config.isUpdated);
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
            formName={"expensesForm"}
            required={false}
          ></FormInput>
          <FormInput
            name="date"
            formName={"expensesForm"}
            required={false}
          ></FormInput>
          <button className="btn btn-primary btn-sm">Submit</button>
        </form>
      </div>
    </div>
  );
};
