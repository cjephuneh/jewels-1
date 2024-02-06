import { updateProduct } from "app/lib/actions";
import { fetchProduct } from "app/lib/data";
import styles from "app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
      <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Name</label>
          <input type="text" name="Name" placeholder={product.name} className={styles.input}/>
          <label>Email</label>
          <input type="text" name="Primary Email" placeholder={product.primaryemailaddress} className={styles.input}/>
          <label>Number of Donations</label>
          <input type="text" name="Number of Donations" placeholder={product.donationnumber} className={styles.input} />
          <label>Total Amount Donated</label>
          <input
            type="text"
            name="Donation Amount"
            placeholder={`$${product.donationamount}`}
            className={styles.input}
          />
          <label>First Donation</label>
          <input
            type="text"
            name="Last Donation Date"
            placeholder={`$${product.firstdonation}     ${product.firstdonationdate}`}
            className={styles.input}
          />
          <label>Largest Donation</label>
          <input
            type="text"
            name="Last Donation Date"
            placeholder={`$${product.largestdonation}     ${product.largestdonationdate}`}
            className={styles.input}
          />
          <label>Last Donation</label>
          <input
            type="text"
            name="Last Donation Date"
            placeholder={`$${product.latestdonation}     ${product.lastdate}`}
            className={styles.input}
          />
          <label>Account Number</label>
          <input
            type="number"
            name="Account Number"
            placeholder={product.accountnumber}
            className={styles.input}
          />          
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
