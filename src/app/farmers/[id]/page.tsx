import React, { Suspense } from "react";
import { featuredFarmers } from "@/data/farmers";
import FarmerProfileClient from "./FarmerProfileClient";

export function generateStaticParams() {
  return featuredFarmers.map((f) => ({ id: f.id }));
}

export default async function FarmerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A1F15] text-white flex items-center justify-center">Loading farmer profile...</div>}>
      <FarmerProfileClient id={id} />
    </Suspense>
  );
}
