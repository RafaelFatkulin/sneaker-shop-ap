import { LogoutButton } from "@/components/logout-button";

export default function DashboardRoute() {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1>Dashboard</h1>
        <LogoutButton />
      </div>
    );
  }