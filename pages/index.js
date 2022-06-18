import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ productId = 100 }) {
  return (
    <div>
      <div className={styles.container}>Home Page</div>
      <div>
        {" "}
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
      <div>
        {" "}
        <Link href="/product/1">
          <a>Product1</a>
        </Link>
      </div>{" "}
      <div>
        <Link href="/product/2">
          <a>Product2</a>
        </Link>
      </div>{" "}
      <div>
        {" "}
        <Link href="/product/3" replace>
          <a>Product3</a>
        </Link>
      </div>{" "}
      <div>
        {" "}
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </div>{" "}
    </div>
  );
}
