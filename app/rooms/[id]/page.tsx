
import { Suspense } from "react";
import RoomBooking from "@/components/RoomBooking";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function RoomPageContent({ params }: PageProps) {
  const { id } = await params;

  return <RoomBooking roomId={id} />;
}

export default function RoomPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p>Loading room details...</p>
        </div>
      }
    >
      <RoomPageContent params={params} />
    </Suspense>
  );
}
