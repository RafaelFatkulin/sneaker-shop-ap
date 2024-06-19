import Link from "next/link";
import { Button } from "./ui/button";
import { getUserMeLoader } from "@/app/data/services/get-user-me-loader";
import { LogoutButton } from "./logout-button";

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      url: string;
    };
    ctaButton: {
      id: number;
      text: string;
      url: string;
    };
  };
}

interface AuthUserProps {
  username: string;
  email: string;
}

export function LoggedInUser({
  userData,
}: {
  readonly userData: AuthUserProps;
}) {
  return (
    <div className="flex gap-2">
      <Link
        href="/dashboard/account"
        className="font-semibold hover:text-primary"
      >
        {userData.username}
      </Link>
      <LogoutButton />
    </div>
  );
}

export async function Header() {
  const user = await getUserMeLoader();

  return (
    <header className="py-4">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Link className="text-2xl font-bold" href="/">
          Sneaker Shop
        </Link>

        <div className="flex items-center gap-4">
          {user.ok ? (
            <LoggedInUser userData={user.data} />
          ) : (
            <Button asChild>
              <Link className="text-lg" href='/signin'>
                SignIn
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
