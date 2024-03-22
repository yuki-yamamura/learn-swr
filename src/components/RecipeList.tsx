import RecipeItem from './RecipeItem';
import { useRecipes } from '@/hooks/useRecipes';

const RecipeList = () => {
  const { recipes } = useRecipes();

  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </ul>
  );
};

export default RecipeList;
