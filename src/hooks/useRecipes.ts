import axios from 'axios';
import useSWR from 'swr';

import type { Recipe } from '@/types/Recipe';

export function useRecipes(): {
  recipes: Recipe[];
  error: Error | undefined;
  isLoading: boolean;
} {
  const { data, error, isLoading } = useSWR<Recipe[], Error>(
    '/api/recipes',
    async (url: string) => {
      const res = await axios.get<{ recipes: Recipe[] }>(url);

      return res.data.recipes;
    },
  );

  return {
    recipes: data ?? [],
    error,
    isLoading,
  };
}
