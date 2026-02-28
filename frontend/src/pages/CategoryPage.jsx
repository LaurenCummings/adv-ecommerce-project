import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { fetchProductsByCategory, products } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("shoes");
  }, [fetchProductsByCategory])

  console.log("products:", products);

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage