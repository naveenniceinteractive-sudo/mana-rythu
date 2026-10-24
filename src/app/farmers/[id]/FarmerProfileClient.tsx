export default function FarmerProfileClient({
  id,
}: {
  id: string;
}) {
  return (
    <div className="min-h-screen bg-[#0A1F15] text-white p-6">
      <h1 className="text-2xl font-bold">
        Farmer Profile
      </h1>
      <p>Farmer ID: {id}</p>
    </div>
  );
}