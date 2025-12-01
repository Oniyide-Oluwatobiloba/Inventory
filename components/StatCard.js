function StatCard({ title, value, icon, color, trend }) {
  try {
    const colorClasses = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
    };

    return (
      <div className="stat-card" data-name="stat-card" data-file="components/StatCard.js">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
            <div className={`icon-${icon} text-xl`}></div>
          </div>
          {trend && (
            <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-green-600' : trend.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
              {trend}
            </span>
          )}
        </div>
        <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-1">{title}</h3>
        <p className="text-3xl font-bold text-[var(--text-primary)]">{value}</p>
      </div>
    );
  } catch (error) {
    console.error('StatCard component error:', error);
    return null;
  }
}