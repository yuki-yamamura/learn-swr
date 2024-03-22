import { useRecipes } from '@/hooks/useRecipes';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';

export const useCreateRecipe = () => {
  const { recipes, mutate } = useRecipes();
  const id =
    recipes.length === 0
      ? 1
      : Math.max(...recipes.map((recipe) => recipe.id)) + 1;

  const { trigger } = useSWRMutation(
    `/api/recipes/${id}`,
    async (url, { arg }: { arg: string }) => {
      const recipe = {
        id,
        title: arg,
      };
      await axios.post(url, recipe);
    },
  );

  const createRecipe = async (title: string) => {
    await trigger(title);
    await mutate();
  };

  return {
    createRecipe,
  };
};
