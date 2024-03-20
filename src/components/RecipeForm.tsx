import { useRecipes } from '@/hooks/useRecipes';
import axios from 'axios';
import { useRef } from 'react';

const RecipeForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { recipes, mutate } = useRecipes();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;

    const id =
      recipes.length === 0
        ? 1
        : Math.max(...recipes.map((recipe) => recipe.id)) + 1;
    const recipe = {
      id,
      title: inputRef.current.value,
    };
    await axios.post(`/api/recipes/${id}`, recipe);
    await mutate();

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default RecipeForm;
