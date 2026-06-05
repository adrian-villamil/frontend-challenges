export type CategoriesResponse = {
  categories: Category[];
};

export type Category = {
  idCategory:             string;
  strCategory:            string;
  strCategoryThumb:       string;
  strCategoryDescription: string;
};

export type RecipesResponse = {
  meals: Meal[] | null;
};

export type RecipeResponse = {
  meals: Meal[] | null | string;
};

type Range1To20 = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;

type IngredientFields = {
  [K in `strIngredient${Range1To20}`]: string | null | "";
};

type MeasureFields = {
  [K in `strMeasure${Range1To20}`]: string | null | "";
};

export type Meal = {
  strMeal:                      string;
  strMealThumb:                 string | null;
  idMeal:                       string;
  strArea:                      null | string;
  strCountry:                   string;
  strMealAlternate?:            string | null;
  strCategory?:                 string;
  strInstructions?:             string;
  strTags?:                     string | null;
  strYoutube?:                  string | null;
  strSource?:                   string | null;
  strImageSource?:              string | null;
  strCreativeCommonsConfirmed?: string | null;
  dateModified?:                string | null;
} & IngredientFields & MeasureFields;

export type CleanRecipe = {
  id:            string;
  name:          string;
  category?:     string;
  area:          string | null;
  instructions?: string;
  thumbnail:     string | null;
  youtube?:      string | null;
  ingredients: { name: string; measure: string }[];
};
