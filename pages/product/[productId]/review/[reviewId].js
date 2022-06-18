import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      Details of Product {productId} {reviewId}
    </>
  );
}

export default Review;
