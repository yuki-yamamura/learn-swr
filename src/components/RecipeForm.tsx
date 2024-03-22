import { useCreateRecipe } from '@/hooks/useCreateRecipe';
import { useRef, useState } from 'react';

const RecipeForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultTitle = '';
  const [title, setTitle] = useState(defaultTitle);
  const { createRecipe } = useCreateRecipe();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    if (!inputRef.current) return;
    if (title === defaultTitle) return;
    e.preventDefault();

    await createRecipe(title);

    setTitle(defaultTitle);
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} value={title} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default RecipeForm;
