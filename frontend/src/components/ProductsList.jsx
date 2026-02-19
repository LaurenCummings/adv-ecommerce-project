import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

function ProductsList() {
  const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();
  
  console.log("products", products);

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
    >

    </motion.div>>
  )
}

export default ProductsList