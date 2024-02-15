import CategoryItem from '../cartegory-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
