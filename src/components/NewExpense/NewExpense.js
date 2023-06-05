import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingFunction = () => {
    setIsEditing(true);
  };

  const stopEditingFunction = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingFunction}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingFunction}
        />
      )}
    </div>
  );
};

export default NewExpense;
