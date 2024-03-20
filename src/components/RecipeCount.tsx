import { useRecipes } from '@/hooks/useRecipes';

const RecipeCount = () => {
  const { recipes } = useRecipes();
  const text = `counts: ${recipes.length}`;

  return <div>{text}</div>;
};

export default RecipeCount;
