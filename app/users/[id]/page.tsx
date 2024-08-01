interface Props {
  params: {
    id: number;
  };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserpageDetails{id}</div>;
};

export default UserDetailPage;
