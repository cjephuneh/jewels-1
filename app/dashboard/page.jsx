"use client";

import { useEffect, useState } from 'react';
import styles from "../ui/dashboard/dashboard.module.css"; // Adjust path as necessary
import Card from "../ui/dashboard/card/card"; // Adjust path as necessary
import Transactions from "../ui/dashboard/transactions/transactions"; // Adjust path as necessary
import Chart from "../ui/dashboard/chart/chart"; // Adjust path as necessary
import Rightbar from "../ui/dashboard/rightbar/rightbar"; // Adjust path as necessary
import { fetchTotalUsers, fetchTotalDonations, fetchTotalConstituents } from "../lib/data"; // Adjust path as necessary

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalConstituents, setTotalConstituents] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const usersCount = await fetchTotalUsers();
      const donationsTotal = await fetchTotalDonations();
      const constituentsCount = await fetchTotalConstituents();
      
      setTotalUsers(usersCount);
      setTotalDonations(donationsTotal);
      setTotalConstituents(constituentsCount);
    };

    fetchData();
  }, []);

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
            number={`$${totalDonations.toFixed(2)}`}
            detail={{ percentage: "10%", text: "increase from last month" }}
            icon="donations"
          />
          <Card 
            title="Total Constituents" 
            number={totalConstituents}
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
