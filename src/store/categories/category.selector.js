export const selectCategoriesMap = (state) =>
  state.categories.categoriesMap.reduce((acc, category) => {
    const { title, items } = category.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});
