import { User } from '../types/user';
import { Link } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';

const UserListTable = ({
  users,
  onDelete,
}: {
  users: User[];
  onDelete: (id: string) => void;
}) => {
  return (
    <div className="mt-6 rounded-2xl bg-white shadow-md overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-4 text-left font-medium">Name</th>
            <th className="p-4 text-left font-medium">Age</th>
            <th className="p-4 text-left font-medium">Role</th>
            <th className="p-4 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t hover:bg-gray-50 transition">
              <td className="p-4">{u.name}</td>
              <td className="p-4">{u.age}</td>
              <td className="p-4 capitalize">{u.role}</td>
              <td className="p-4 space-x-2 flex items-center">
                <Link
                  to={`/users/edit/${u.id}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <Pencil size={16} /> 
                </Link>
                <button
                  type="button"
                  onClick={() => onDelete(u.id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer"
                >
                  <Trash2 size={16} /> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
