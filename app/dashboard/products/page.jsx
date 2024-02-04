import Image from "next/image";
import Link from "next/link";
import styles from "app/ui/dashboard/products/products.module.css";
import Search from "app/ui/dashboard/search/search";
import Pagination from "app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "app/lib/data";
import { deleteProduct } from "app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  try {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, products } = await fetchProducts(q, page);

    console.log("Fetched products:", products); // Log fetched products to the console

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product..." />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>City</td>
              <td>Account Number</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product.img || "/noproduct.jpg"}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    {product.Name}
                  </div>
                </td>
                <td>{product.email}</td>
                <td>{product.city}</td>
                <td>{product.account}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product._id} />
                      <button
                        className={`${styles.button} ${styles.delete}`}
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error); // Log any errors to the console
    throw error; // Re-throw the error to handle it further if needed
  }
};

export default ProductsPage;
