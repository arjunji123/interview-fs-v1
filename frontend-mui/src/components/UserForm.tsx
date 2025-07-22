import React, { useEffect, useState } from 'react';
import { User } from '../types/user';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSubmit: (user: User) => void;
  initialData?: User | null;
}

const UserForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<User>({
    id: '',
    name: '',
    age: '',
    role: '',
    gender: 'male',
    active: true,
    dob: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
     navigate('/users');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {initialData ? `Edit: ${formData.name}` : 'Add New User'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 px-8">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Age</label>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter role (e.g. Admin, Manager)"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">Active</label>
          <input
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between gap-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            {initialData ? 'Update User' : 'Add User'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/users')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
