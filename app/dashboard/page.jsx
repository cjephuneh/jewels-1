"use client";

import styles from "../ui/dashboard/dashboard.module.css"; // Adjust path as necessary
import Card from "../ui/dashboard/card/card"; // Adjust path as necessary
import Transactions from "../ui/dashboard/transactions/transactions"; // Adjust path as necessary
import Chart from "../ui/dashboard/chart/chart"; // Adjust path as necessary
import Rightbar from "../ui/dashboard/rightbar/rightbar"; // Adjust path as necessary
import { fetchTotalUsers, fetchTotalDonations, fetchTotalProducts } from "app/lib/data"; // Update the import path


const Dashboard = async () => {
  // Fetch the data directly in the component
    const totalUsers = await fetchTotalUsers();
    const totalDonations = await fetchTotalDonations();
    const totalProducts = await fetchTotalProducts();


  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card 
            title="Total Users" 
            number={totalUsers}
            detail={{ percentage: "4%", text: "than previous week" }}
            icon="users"
          />
          <Card 
            title="Total Donations" 
            number={totalDonations}
            detail={{ percentage: "10%", text: "increase from last month" }}
            icon="donations"
          />
          <Card 
            title="Total Constituents" 
            number={totalProducts}
            detail={{ percentage: "2%", text: "more than last week" }}
            icon="contacts"
          />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
