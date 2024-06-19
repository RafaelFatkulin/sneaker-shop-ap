import { signOut } from "@/app/data/actions/auth-actions";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function LogoutButton() {
  return (
    <form action={signOut}>
      <Button type="submit" className="flex flex-row items-center gap-2">
        <LogOut className="w-6 h-6 hover:text-primary" />
        Logout
      </Button>
    </form>
  );
}
