import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const eventHandler=(event)=>{
        console.log(event.target.value);
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={eventHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1" onChange={eventHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-01-01"
            onChange={eventHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
