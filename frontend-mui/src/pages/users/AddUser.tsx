import UserForm from '../../components/UserForm';
import { v4 as uuid } from 'uuid';
import { User } from '../../types/user';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();

  const handleAdd = (user: User) => {
    const newUser = { ...user, id: uuid() }; // Avoid mutating prop
    const existing = JSON.parse(localStorage.getItem('users') || '[]');
    localStorage.setItem('users', JSON.stringify([...existing, newUser]));
    navigate('/users'); // Move after saving
  };

  return <UserForm onSubmit={handleAdd} />;
};

export default AddUser;
