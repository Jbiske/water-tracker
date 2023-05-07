import { useState } from "react";

function Dashboard() {
  const [dailyWaterIntake, setDailyWaterIntake] = useState({});

  const addWaterIntake = (day, cups) => {
    setDailyWaterIntake((prev) => {
      const newIntake = { ...prev };
      newIntake[day] = (newIntake[day] || 0) + cups;
      // don't let water intake go below 0
      if (newIntake[day] < 0) {
        newIntake[day] = 0;
      }
      return newIntake;
    });
  };
  
  const removeWaterIntake = (day, cups) => {
    addWaterIntake(day, -cups);
  };

  const getTotalWaterIntake = () => {
    return Object.values(dailyWaterIntake).reduce((total, cups) => total + cups, 0);
  };

  return (
    <div>
      <h2>Daily Water Intake</h2>
      <p>Total cups drank today: {dailyWaterIntake[new Date().toLocaleDateString()] || 0}</p>
      <button onClick={() => addWaterIntake(new Date().toLocaleDateString(), 1)}>Add cup</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Cups Drank</th>
          </tr>
        </thead>
        <tbody>
  {Object.entries(dailyWaterIntake).map(([day, cups]) => (
    <tr key={day}>
      <td>{day}</td>
      <td>{cups}</td>
      <td>
        <button onClick={() => addWaterIntake(day, -1)}>Remove cup</button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
      <p>Total cups drank this week: {getTotalWaterIntake()}</p>
    </div>
  );
}

export default Dashboard;