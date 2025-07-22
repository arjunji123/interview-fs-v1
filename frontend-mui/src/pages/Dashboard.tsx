import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const data = [
  { name: 'Jan', users: 30, sales: 400 },
  { name: 'Feb', users: 45, sales: 300 },
  { name: 'Mar', users: 60, sales: 500 },
  { name: 'Apr', users: 80, sales: 700 },
  { name: 'May', users: 90, sales: 600 },
];

const pieData = [
  { name: 'Active', value: 60 },
  { name: 'Inactive', value: 40 },
];

const COLORS = ['#3b82f6', '#6366f1'];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-2 text-black">Dashboard Overview</h1>
      <p className="text-gray-800 mb-6">Welcome back! Here's the event desk summary.</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 p-4 rounded-2xl shadow-lg text-white">
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="text-3xl font-bold mt-2">1,240</p>
        </div>
        <div className="bg-purple-600 p-4 rounded-2xl shadow-lg text-white">
          <h2 className="text-lg font-medium">Events Managed</h2>
          <p className="text-3xl font-bold mt-2">68</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg text-white">
          <h2 className="text-lg font-medium">Revenue</h2>
          <p className="text-3xl font-bold mt-2">₹1.2L</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg col-span-2">
          <h3 className="text-lg font-medium text-white mb-4">Users Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <h3 className="text-lg font-medium text-white mb-4">User Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
              {pieData.map((_, index) => (
  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}

              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
