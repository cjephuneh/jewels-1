import Image from "next/image";
import styles from "./transactions.module.css";

// Sample data
const transactionData = [
  {
    Date: "2024-01-30",
    Name: "Moshe Silver",
    Amount: "$9,000.00",
    Type: "Donation",
    Fund: "School",
    Campaign: "Matcher 2023",
    Appeal: "",
    "Account Number": 7654.0,
  },
  {
    Date: "2024-01-30",
    Name: "Sheldon Andrusier",
    Amount: "$2,000.00",
    Type: "Donation",
    Fund: "School",
    Campaign: "Matcher 2023",
    Appeal: "",
    "Account Number": 86.0,
  },
  {
    Date: "2024-01-30",
    Name: "Chana'la Iser",
    Amount: "$150.00",
    Type: "Donation",
    Fund: "School",
    Campaign: "Donation",
    Appeal: "",
    "Account Number": 10799.0,
  },
  {
    Date: "2024-01-30",
    Name: "Yitz Topper",
    Amount: "$1,800.00",
    Type: "Donation",
    Fund: "School",
    Campaign: "Matcher 2023",
    Appeal: "",
    "Account Number": 9236.0,
  },
];

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Fund</td>
            <td>Amount</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {transaction.Name}
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}>
              {transaction.Fund}
              </span>
              </td>
              <td>{transaction.Amount}</td>
              
              <td>{transaction.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
