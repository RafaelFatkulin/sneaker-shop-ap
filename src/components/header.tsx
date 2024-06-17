import Link from "next/link";

export function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Link className="text-2xl font-bold" href="/">
          Sneaker shop
        </Link>
        <Link className="text-lg" href="/signin">
          Sign In
        </Link>
      </div>
    </header>
  );
}
