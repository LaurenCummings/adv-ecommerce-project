import { useProductStore } from "../stores/useProductStore"

function CategoryPage() {
  const { fetchProductsByCategory } = useProductStore();

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage