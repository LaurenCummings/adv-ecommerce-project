import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useState } from "react";

const tabs = [
    { id: "create", label: "Create Product", icon: PlusCircle },
    { id: "products", label: "Products", icon: ShoppingBasket },
    { id: "analytics", label: "Analytics", icon: BarChart },
];

function AdminPage() {
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage