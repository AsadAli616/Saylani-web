import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    id: 1,
    user: "John Doe",
    action: "added 100 meals",
    stall: "Karachi Central",
    time: "2 hours ago"
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "updated stall info",
    stall: "Lahore North",
    time: "4 hours ago"
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "reported an issue",
    stall: "Islamabad East",
    time: "6 hours ago"
  },
  {
    id: 4,
    user: "Sarah Brown",
    action: "added new volunteers",
    stall: "Peshawar South",
    time: "8 hours ago"
  }
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map(activity => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${activity.id}.png`} alt="Avatar" />
            <AvatarFallback>
              {activity.user
                .split(" ")
                .map(n => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user}</p>
            <p className="text-sm text-muted-foreground">
              {activity.action} at {activity.stall}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
}
