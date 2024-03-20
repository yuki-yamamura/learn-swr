import RecipeCount from '@/components/RecipeCount';
import RecipeForm from '@/components/RecipeForm';
import RecipeList from '@/components/RecipeList';

const Page = () => (
  <main>
    <div>
      <h2>My recipes</h2>
      <RecipeList />
      <RecipeCount />
    </div>
    <div>
      <h2>New recipe</h2>
      <RecipeForm />
    </div>
  </main>
);

export default Page;
