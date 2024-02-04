import { addProduct } from "app/lib/actions";
import styles from "app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Name" name="Name" required />
        
        <input type="text" placeholder="Email" name="Primary Email" required />
        <input type="text" placeholder="City" name="Primary City" required />
        <input type="text" placeholder="Street" name="Primary Street" />
        <input type="number" placeholder="ZIP code" name="Primary ZIP code" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
