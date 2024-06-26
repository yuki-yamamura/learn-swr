import { getRecipes } from '@/utils/db/recipes';

import type { Recipe } from '@/types/Recipe';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<{ recipes: Recipe[] }>,
) {
  const recipes = getRecipes();

  res.json({
    recipes,
  });
}
