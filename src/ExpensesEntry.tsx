export const ExpenseEntry: React.FC<{
  name?: string;
  amount?: string;
  date?: string;
}> = ({ name = null, amount = null, date = null }) => {
  return (
    <li className="list-group-item border-0 border-bottom">
      <div className="d-flex">
        <div className="col-4">{name?.stringValue}</div>
        <div className="col-4">{amount?.stringValue}</div>
        <div className="col-4 pr-4">
          <span>{date?.stringValue}</span>
        </div>
        <div className="p-1 bg-danger"></div>
      </div>
    </li>
  );
};
