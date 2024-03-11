import { CATEGORIES_ACTION_MAP } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_MAP.SET_CATEGORIES_MAP, categoriesMap);
