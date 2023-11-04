import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "title1",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e1",
      title: "title3",
      amount: 100,
      date: new Date(2023, 7, 14),
    },
    {
      id: "e1",
      title: "title1",
      amount: 100,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e1",
      title: "title2",
      amount: 100,
      date: new Date(2021, 7, 14),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
      <NewExpense />
    </div>
  );
}

export default App;
