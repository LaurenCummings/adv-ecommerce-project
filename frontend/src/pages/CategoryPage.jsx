import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";

function CategoryPage() {
  const { fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("shoes");
  }, [fetchProductsByCategory])

  console.log("products:", products);

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage