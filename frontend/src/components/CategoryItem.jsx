import { Link } from "react-router-dom";

function CategoryItem( { category } ) {
  return (
    <div>
        <Link>
            <div>
                <div />
                <img />
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