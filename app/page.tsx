import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Staysini</h1>
      <p className="text-xl mb-8">
        Find your perfect vacation home in Malaysia
      </p>
      <div className="space-x-4">
        <Link
          href="/listings"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Senarai Homestay Baru A
        </Link>
        <Link
          href="/submit-listing"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Daftar Homestay Anda
        </Link>
      </div>
    </div>
  );
}
