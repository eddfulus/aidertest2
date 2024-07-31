import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Malaysia Vacation Rentals
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/listings">Listings</Link></li>
            <li><Link href="/submit-listing">Submit Listing</Link></li>
            <li><Link href="/signin">Sign In</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
