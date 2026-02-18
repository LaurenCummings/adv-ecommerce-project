import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";

function ProductsList() {
  const { deleteProduct, toggleFeaturedProduct, products, fetchAllProducts } = useProductStore();

  return (
    <div>ProductsList</div>
  )
}

export default ProductsList