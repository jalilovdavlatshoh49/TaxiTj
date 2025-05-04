import Link from 'next/link';

export default function DriverButton() {
  return (
    <section className="mb-10 text-center">
      <Link href="/driver/register">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition">
          Регистрaтсия барои ронандаҳо
        </button>
      </Link>
    </section>
  );
}