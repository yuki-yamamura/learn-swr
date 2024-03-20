import { writeJson } from '@/utils/db/recipes';

import type { Recipe } from '@/types/Recipe';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const newRecipe = writeJson(req.body as Pick<Recipe, 'title'>);

  res.json({ recipe: newRecipe });
}
