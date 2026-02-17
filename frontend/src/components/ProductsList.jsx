import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

function ProductsList() {
  const { deleteProduct } = useProductStore();

  return (
    <div>ProductsList</div>
  )
}

export default ProductsList