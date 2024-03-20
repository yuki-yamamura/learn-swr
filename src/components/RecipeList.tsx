import { useRecipes } from '@/hooks/useRecipes';

const RecipeList = () => {
  const { recipes } = useRecipes();

  return (
    <ul>
      {recipes.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
