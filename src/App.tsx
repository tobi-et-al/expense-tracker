import React, {
  createContext,
  createRef,
  useContext,
  useEffect,
  useState
} from "react";
import "./styles.css";
import { ExpensesForm } from "./ExpensesForm";
import { ExpensesList } from "./ExpensesList";

export type AppContextType = {};

export const defaultContextValue = {
  config: {
    title: "Expense Tracker",
    isUpdated: true
  }
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider: React.FC<{ children: any }> = ({ children }) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const TitleComponent: React.FC = () => {
  const { state } = useContext(AppContext);
  return <h1>{state.config.title}</h1>;
};

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <TitleComponent></TitleComponent>
        <ExpensesForm></ExpensesForm>
        <ExpensesList></ExpensesList>
      </div>
    </AppProvider>
  );
}
