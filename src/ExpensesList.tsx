import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./App";
import { dataStore } from "./dataStore";
import { ExpenseEntry } from "./ExpensesEntry";

export const ExpensesList: React.FC = () => {
  const { state, setState } = useContext(AppContext);

  const [list, setList] = useState([]);

  useEffect(() => {
    dataStore.get().then((e) => {
      let docs = e.documents.filter((e) => {
        console.log(e.fields);
        return (
          e.fields.type?.stringValue !== undefined &&
          e.fields.type?.stringValue === "expenseEntry"
        );
      });
      setList(docs);
      console.log(docs, list);
    });
  }, []);

  return (
    <div className={"border-top border-light pt-3 mt-3"}>
      <div className={"container"}>
        <ul className="list-group">
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
