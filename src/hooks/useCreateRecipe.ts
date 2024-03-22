import { useRecipes } from '@/hooks/useRecipes';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';

import type { Key } from 'swr';

export const useCreateRecipe = () => {
  const { recipes, mutate } = useRecipes();
  const id =
    recipes.length === 0
      ? 1
      : Math.max(...recipes.map((recipe) => recipe.id)) + 1;

  const { trigger, error, isMutating } = useSWRMutation<
    void,
    Error,
    Key,
    string
  >(`/api/recipes/${id}`, async (url: string, { arg }: { arg: string }) => {
    const recipe = {
      id,
      title: arg,
    };
    await axios.post(url, recipe);
  });

  const createRecipe = async (title: string) => {
    await trigger(title);
    await mutate();
  };

  return {
    createRecipe,
    error,
    isMutating,
  };
};
