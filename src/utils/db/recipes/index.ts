import fs from 'fs';
import path from 'path';

import type { Recipe } from '@/types/Recipe';

const jsonPath = path.join(process.cwd(), 'db/json/recipes.json');

export function getRecipes(): Recipe[] {
  const json = fs.readFileSync(jsonPath).toString();
  const data = JSON.parse(json) as Recipe[];

  return data;
}

export function createRecipe(recipe: Recipe): void {
  const recipes = getRecipes();
  const newRecipes = [...recipes, recipe];

  fs.writeFileSync(jsonPath, JSON.stringify(newRecipes));
}

export function deleteRecipe(id: number): void {
  const recipes = getRecipes();
  const newRecipes = recipes.filter((recipe) => recipe.id !== id);

  fs.writeFileSync(jsonPath, JSON.stringify(newRecipes));
}
