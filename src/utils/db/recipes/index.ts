import fs from 'fs';
import path from 'path';

import type { Recipe } from '@/types/Recipe';

const jsonPath = path.join(process.cwd(), 'db/json/recipes.json');

export function readJson(): Recipe[] {
  const json = fs.readFileSync(jsonPath).toString();
  const data = JSON.parse(json) as Recipe[];

  return data;
}

export function writeJson(recipe: Recipe): void {
  const recipes = readJson();

  const newRecipes = [...recipes, recipe];
  fs.writeFileSync(jsonPath, JSON.stringify(newRecipes));
}
