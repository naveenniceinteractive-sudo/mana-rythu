import { Suspense } from "react";
import OrderTrackingClient from "./OrderTrackingClient";

export default function OrdersPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0A1F15] text-white">
          Loading order details...
        </div>
      }
    >
      <OrderTrackingClient />
    </Suspense>
  );
}
