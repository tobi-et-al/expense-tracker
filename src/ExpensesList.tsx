import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./App";
import { dataStore } from "./dataStore";
import { ExpenseEntry } from "./ExpensesEntry";

export const ExpensesList: React.FC = () => {
  const { state, setState } = useContext(AppContext);
  const [list, setList] = useState([]);
  const [isUpdated] = useState(state.config.isUpdated);
  console.log("ExpensesList", state);

  // useEffect(() => {
  //   dataStore.get().then((e) => {
  //     let docs = e.documents.filter((e) => {
  //       return (
  //         e.fields.type?.stringValue !== undefined &&
  //         e.fields.type?.stringValue === "expenseEntry"
  //       );
  //     });
  //     setList(docs);
  //     console.log("useEffect b4", state.config.isUpdated);
  //     state.config.isUpdated = false;
  //     setState(state);
  //     console.log("useEffect ata", state.config.isUpdated);
  //   });
  // }, [state.config.isUpdated === true]);

  return (
    <div className={"border-top border-light pt-3 mt-3"}>
      <div className={"container"}>
        <ul className="list-group">
          {isUpdated && <div>here</div>}
          {list.map((data, index) => (
            <ExpenseEntry
              key={index}
              name={data.fields?.name}
              amount={data.fields?.amount}
              date={data.fields?.date}
            ></ExpenseEntry>
          ))}
        </ul>
      </div>
    </div>
  );
};
