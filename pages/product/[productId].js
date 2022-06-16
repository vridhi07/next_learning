import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return <>Details of Product {productId}</>;
}

export default ProductDetails;
