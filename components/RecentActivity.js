function RecentActivity() {
  try {
    const [activities, setActivities] = React.useState([]);

    React.useEffect(() => {
      loadActivities();
    }, []);

    const loadActivities = async () => {
      try {
        const data = await getRecentActivities();
        setActivities(data);
      } catch (error) {
        console.error('Error loading activities:', error);
      }
    };

    return (
      <div className="card" data-name="recent-activity" data-file="components/RecentActivity.js">
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <p className="text-[var(--text-secondary)] text-center py-8">No recent activity</p>
          ) : (
            activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-[var(--border-color)] last:border-0 last:pb-0">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'add' ? 'bg-green-100' : activity.type === 'remove' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <div className={`icon-${activity.type === 'add' ? 'plus' : activity.type === 'remove' ? 'minus' : 'refresh-cw'} text-lg ${
                    activity.type === 'add' ? 'text-green-600' : activity.type === 'remove' ? 'text-red-600' : 'text-blue-600'
                  }`}></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{activity.description}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{activity.time}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('RecentActivity component error:', error);
    return null;
  }
}