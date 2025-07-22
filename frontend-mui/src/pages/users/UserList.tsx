import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/user';
import UserListTable from '../../components/UserListTable';
import { Plus } from 'lucide-react';
import Button from '../../ui/Button';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('users');
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  return (
    <div className="p-6 rounded-xl bg-white shadow-md animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">User Management</h1>
        <Link to="/users/add">
          <Button className="gap-2">
            <Plus size={18} />
            Add User
          </Button>
        </Link>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-20 text-gray-500 border border-dashed rounded-lg">
          <p className="text-lg">No users found</p>
          <p className="text-sm mt-2">Click "Add User" to create your first one.</p>
        </div>
      ) : (
        <UserListTable users={users} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default UserList;
