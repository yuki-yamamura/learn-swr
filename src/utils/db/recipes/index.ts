import fs from 'fs';
import path from 'path';

import type { Recipe } from '@/types/Recipe';

const jsonPath = path.join(process.cwd(), 'db/json/recipes.json');

export function readJson(): Recipe[] {
  const json = fs.readFileSync(jsonPath).toString();
  const data = JSON.parse(json) as Recipe[];

  return data;
}

export function writeJson(data: Pick<Recipe, 'title'>): Recipe {
  const recipes = readJson();
  const id = Math.max(...recipes.map((recipe) => recipe.id)) + 1;
  const { title } = data;

  const newRecipe = { id, title };
  const newRecipes = [...recipes, newRecipe];
  fs.writeFileSync(jsonPath, JSON.stringify(newRecipes));

  return newRecipe;
}
