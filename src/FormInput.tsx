import { useContext, createRef, useEffect } from "react";
import { AppContext } from "./App";

export const FormInput: React.FC<{
  name: string;
  type?: string;
  formName: string;
  required: boolean;
}> = ({ name, type, formName, required = false }) => {
  const { state, setState } = useContext(AppContext);
  let ref = createRef<any>();

  useEffect(() => {
    if (state.form === undefined) {
      state.form = {};
      if (state.form[formName] === undefined) {
        state.form[formName] = {};
      }
      setState(state);
    }
  }, []);

  const onChangeHandler = () => {
    state.form[formName][ref.current.name] = ref.current?.value;
  };

  return (
    <div className="mb-3">
      <div className="form-group col-12">
        <label htmlFor={name} className="col-4 col-form-label">
          {name.toUpperCase()}
        </label>
        <input
          id={name}
          name={name}
          type={type || "text"}
          className="col-8 form-control"
          ref={ref}
          onChange={onChangeHandler}
          required={required}
        ></input>
      </div>
    </div>
  );
};
