// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-6">this page is not excisted</p>
      <Link href="/" className="text-indigo-600 hover:underline">
        back to the home page
      </Link>
    </div>
  );
}
