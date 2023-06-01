import React, { useState, useContext } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    if (totalExpenses > value) {
      alert("Expense cannot be greater than the budget. Total expenses");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: value,
      });
      setIsEditing(false);
    }
  };
  return (
    <div class="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        // For part 1 render component inline rather than create a seperate one
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
