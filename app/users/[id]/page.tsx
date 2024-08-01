import { notFound } from "next/navigation";

interface Props {
  params: {
    id: number;
  };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserpageDetails{id}</div>;
};

export default UserDetailPage;
