import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          StaySini
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/listings"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Senarai Homestay
              </Link>
            </li>
            <li>
              <Link
                href="/submit-listing"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Daftar Homestay Anda
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
