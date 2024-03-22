import axios from 'axios';
import { useSWRConfig } from 'swr';
import useSWRMutation from 'swr/mutation';

import type { Recipe } from '@/types/Recipe';

type Props = Pick<Recipe, 'id'>;

export const useDeleteRecipe = ({ id }: Props) => {
  const { mutate } = useSWRConfig();
  const { trigger } = useSWRMutation(`/api/recipes/${id}`, async (url) => {
    await axios.delete(url);
  });

  const deleteRecipe = async () => {
    await trigger();
    await mutate('/api/recipes');
  };

  return {
    deleteRecipe,
  };
};
