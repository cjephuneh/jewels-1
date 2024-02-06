import { addProduct } from "app/lib/actions";
import styles from "app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="name" name="name" required />
        
        <input type="text" placeholder="primaryemailaddress" name="primaryemailaddress" required />
        <input type="text" placeholder="primarycity" name="primarycity" required />
        <input type="text" placeholder="primarystreet" name="primarystreet" />
        <input type="number" placeholder="primaryzipcode" name="primaryzipcode" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
