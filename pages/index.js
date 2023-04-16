import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Ini HomePage</h1>
      <Link href="/dashboard">
        <h1 style={{ color: "red" }}>Pergi Ke Dashboard</h1>
      </Link>
    </div>
  );
}
