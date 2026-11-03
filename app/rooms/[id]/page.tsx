
import RoomBooking from "@/components/RoomBooking";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RoomPage({ params }: PageProps) {
  const { id } = await params;

  return <RoomBooking roomId={id} />;
}
