import { LogoutButton } from "@/components/logout-button";
import { getUserMeLoader } from "../data/services/get-user-me-loader";

export default async function DashboardRoute() {
  const { data, ok } = await getUserMeLoader();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Welcome to Dashboard {ok ? `, ${data.user.name}` : ""}</h1>
      <LogoutButton />
    </div>
  );
}
