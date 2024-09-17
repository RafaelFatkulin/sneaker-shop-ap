import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center absolute inset-0 bg-white">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link
        href="/dashboard"
        className="text-primary underline transition-colors hover:text-blue-500"
      >
        Return to dashboard
      </Link>
    </div>
  );
}
