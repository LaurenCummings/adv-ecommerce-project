import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";

const categories = ["jean", "t-shirt", "shoe", "glasses", "jacket", "suit", "bag"];

function CreateProductForm() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    countInStock: "",
    image: "",
  });

  return (
    <div>CreateProductForm</div>
  )
}

export default CreateProductForm