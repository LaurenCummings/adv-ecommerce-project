import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";

function CategoryPage() {
  const { fetchProductsByCategory } = useProductStore();

  useEffect(() => {

  }, [fetchProductsByCategory])

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage