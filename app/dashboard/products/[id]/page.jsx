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
          <input type="text" name="Name" placeholder={product.Name}/>
          <label>Email</label>
          <input type="text" name="Primary Email" placeholder={product.email} />
          <label>Street Address</label>
          <input type="text" name="Primary Street" placeholder={product.street} />
          <label>City</label>
          <input
            type="text"
            name="Primary City"
            placeholder={product.city}
          />
          <label>State</label>
          <input
            type="text"
            name="Primary State"
            placeholder={product.state}
          />
          <label>ZIP code</label>
          <input
            type="number"
            name="Primary ZIP code"
            placeholder={product.zip}
          />          
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
