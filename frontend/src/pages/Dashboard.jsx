import { BarChart, Clock, Star, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Resumes Improved', value: '12', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Average Score', value: '88/100', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { name: 'Score Increase', value: '+24%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  const recentActivity = [
    { id: 1, name: 'Software Engineer Resume', date: '2 hours ago', score: 92 },
    { id: 2, name: 'Product Manager Draft', date: 'Yesterday', score: 85 },
    { id: 3, name: 'Marketing Specialist', date: '3 days ago', score: 78 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center">
            <div className={`${stat.bg} p-4 rounded-lg mr-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">View all</button>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <li key={activity.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">
                  {activity.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-gray-900">Score: {activity.score}</div>
                <div className="text-xs text-green-600 font-medium">Excellent</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
