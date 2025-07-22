// EditUser.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserForm from '../../components/UserForm';
import { User } from '../../types/user';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('users') || '[]') as User[];
    const found = all.find((u) => u.id === id);
    if (found) setUser(found);
  }, [id]);

  const handleUpdate = (updatedUser: User) => {
    const all = JSON.parse(localStorage.getItem('users') || '[]') as User[];
    const updatedList = all.map((u) => (u.id === id ? updatedUser : u));
    localStorage.setItem('users', JSON.stringify(updatedList));
  };

  return user ? <UserForm onSubmit={handleUpdate} initialData={user} /> : <p>Loading...</p>;
};

export default EditUser;
