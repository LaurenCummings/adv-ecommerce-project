import { Link } from "react-router-dom";

function CategoryItem( { category } ) {
  return (
    <div>
        <Link>
            <div>
                <div />
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