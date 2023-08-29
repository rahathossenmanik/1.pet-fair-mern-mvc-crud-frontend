import AllPets from '../pages/AllPets';
import Birds from '../pages/Birds';
import Cats from '../pages/Cats';
import Dogs from '../pages/Dogs';
import Horses from '../pages/Horses';
import PetForm from '../pages/PetForm';
import Reptiles from '../pages/Reptiles';

export const routes = [
  { path: '/', element: <AllPets /> },
  { path: '/dogs', element: <Dogs /> },
  { path: '/cats', element: <Cats /> },
  { path: '/horses', element: <Horses /> },
  { path: '/birds', element: <Birds /> },
  { path: '/reptiles', element: <Reptiles /> },
  { path: '/pets/register', element: <PetForm /> }
];
