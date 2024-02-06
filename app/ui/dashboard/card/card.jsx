// Import React Icons for visual representation
import { MdSupervisedUserCircle, MdAttachMoney, MdContacts } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ title, number, detail, icon }) => {
  // Determine which icon to display based on the icon prop
  const IconComponent = () => {
    // let iconClass = "icon"; 
    if (icon === "users") return <MdSupervisedUserCircle size={24} />;
    if (icon === "donations") return <MdAttachMoney size={24} />;
    if (icon === "contacts") return <MdContacts size={24} />;
    return null; // Default case if no icon matches
  };

  return (
    <div className={styles.container}>
      <IconComponent />
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.detail}>
          <span className="detailPercentage">{detail.percentage}</span> {detail.text}
        </span>
      </div>
    </div>
  );
};

export default Card;
