import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
    { id: "create", label: "Create Product", icon: PlusCircle },
    { id: "products", label: "Products", icon: ShoppingBasket },
    { id: "analytics", label: "Analytics", icon: BarChart },
];

function AdminPage() {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1>
          Admin Dashboard
        </motion.h1>
      </div>
    </div>
  )
}

export default AdminPage