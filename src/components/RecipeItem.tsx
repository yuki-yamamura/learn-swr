import { useDeleteRecipe } from '@/hooks/useDeleteRecipe';
import { TrashIcon } from 'lucide-react';

import type { Recipe } from '@/types/Recipe';

type Props = {
  recipe: Recipe;
};

const RecipeItem = ({ recipe }: Props) => {
  const { deleteRecipe } = useDeleteRecipe(recipe);

  return (
    <li>
      <span>{recipe.title}</span>
      <TrashIcon size={14} onClick={deleteRecipe} />
    </li>
  );
};

export default RecipeItem;
