import { Link } from "react-router-dom";

function CategoryItem( { category } ) {
  return (
    <div className="relative overflow-hidden h-96 w-full rounded-lg group">
        <Link to={"/category" + category.href}>
            <div className="w-full h-full cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-900 opacity-50 z-10"/>
                <img 
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                />
                <div>
                    <h3>{category.name}</h3>
                    <p>Explore {category.name}</p>
                </div>
            </div>
        </Link>
    </div>
  );
};

export default CategoryItem