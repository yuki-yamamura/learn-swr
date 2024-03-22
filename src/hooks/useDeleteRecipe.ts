import axios from 'axios';
import { useSWRConfig } from 'swr';
import useSWRMutation from 'swr/mutation';

import type { Recipe } from '@/types/Recipe';

type Props = Pick<Recipe, 'id'>;

export const useDeleteRecipe = ({ id }: Props) => {
  const { mutate } = useSWRConfig();
  const { trigger, error, isMutating } = useSWRMutation<void, Error>(
    `/api/recipes/${id}`,
    async (url: string) => {
      await axios.delete(url);
    },
  );

  const deleteRecipe = async () => {
    await trigger();
    await mutate('/api/recipes');
  };

  return {
    deleteRecipe,
    error,
    isMutating,
  };
};
