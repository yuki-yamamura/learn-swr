import { createRecipe, deleteRecipe } from '@/utils/db/recipes';

import type { Recipe } from '@/types/Recipe';
import type { NextApiRequest, NextApiResponse } from 'next';

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const recipe = req.body as Recipe;
  createRecipe(recipe);

  res.json({ recipe });
}

function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  deleteRecipe(parseInt(id));

  res.status(204).end();
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST': {
      return handleGet(req, res);
    }
    case 'DELETE': {
      return handleDelete(req, res);
    }
  }
}
