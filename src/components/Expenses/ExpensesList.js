import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpenesesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => {
        return (
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
            key={e.id}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
