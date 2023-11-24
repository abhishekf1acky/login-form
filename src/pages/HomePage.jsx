import { useSelector } from 'react-redux';

const TableRow = ({ label, value }) => (
  <tr>
    <td className='font-semibold uppercase border border-gray-400 p-4'>
      {label}:
    </td>
    <td className='border border-gray-400 p-4'>{value}</td>
  </tr>
);

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl underline font-semibold'>About User</h1>;
      <article className='w-[95vw] max-w-xl mx-auto flex items-center justify-center bg-gray-200 rounded-md p-8'>
        <table className='w-full border-collapse border-2 border-gray-500'>
          <tbody>
            <TableRow label='Id' value={user.id} />
            <TableRow label='Username' value={user.username} />
            <TableRow
              label='FullName'
              value={`${user.firstName} ${user.lastName}`}
            />
            <TableRow label='Email' value={user.email} />
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default HomePage;
