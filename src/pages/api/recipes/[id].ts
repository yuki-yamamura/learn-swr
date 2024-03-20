import { writeJson } from '@/utils/db/recipes';

import type { Recipe } from '@/types/Recipe';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const recipe = req.body as Recipe;
  writeJson(recipe);

  res.json({ recipe });
}
