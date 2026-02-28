import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";

function CategoryPage() {
  const { fetchProductsByCategory, products } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("shoe");
  }, [fetchProductsByCategory])

  console.log("products:", products);

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage