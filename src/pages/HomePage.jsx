import { logout } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <button className='bg-blue-500 p-4' onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
};
export default HomePage;

// import { useState, useEffect } from 'react';
// import { FaTwitter } from 'react-icons/fa';
// import { FaLocationDot } from 'react-icons/fa6';
// import { AiOutlineLink } from 'react-icons/ai';
// import { BsFillBuildingsFill } from 'react-icons/bs';
// import { BiSearch } from 'react-icons/bi';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import useFetchData from '../hooks/useFetchData';

// const HomePage = () => {
//   const [username, setUsername] = useState('mraditya1999');
//   const { data: userData, error, isLoading, fetchData } = useFetchData();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await fetchData(
//         `https://api.github.com/users/${username}`,
//         'GET'
//       );
//       console.log(res);
//     };
//     fetchUser();
//   }, [username]);

//   if (error) {
//     toast.error(error.message);
//   }

//   const handleSearch = () => {
//     if (inputValue.trim() === '') {
//       toast.error('Please enter a GitHub username');
//       return;
//     }
//     setUsername(inputValue);
//   };

//   return (
//     <main className='bg-[#141d2f] text-white min-h-screen flex justify-center items-center'>
//       <div className='w-[90vw] max-w-[600px] mx-auto p-4'>
//         <h1 className='text-3xl text-center uppercase'>devfinder</h1>

//         <UserSearch onSearch={handleSearch} />

//         <div className='profile-container mt-8 bg-[#1e2a47] rounded-lg'>
//           {/* {isLoading && <Loader />} */}
//           {isLoading && <h1>Loader...</h1>}
//           {error && <ErrorMessage error={error} />}
//           {userData && userData.login && !isLoading && !error && (
//             <UserInfo userData={userData} />
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//     </main>
//   );
// };
// export default HomePage;

// const UserInfo = ({ userData }) => {
//   return (
//     <div className='flex flex-col sm:flex-row md:gap-8 justify-between p-6 py-3'>
//       <div className='md:w-[230px] flex justify-center items-center user-info'>
//         <img
//           src={userData.avatar_url}
//           alt='User Avatar'
//           className='w-56 rounded-full'
//         />
//       </div>

//       <div className='w-full h-full gap-4'>
//         <div className='user-details'>
//           <h2 className='text-2xl'>{userData.name || 'Not available'}</h2>
//           <div>
//             <p className='text-blue-500'>
//               @{userData.login || 'Not available'}
//             </p>
//             <p>{userData.bio || 'This profile has no bio'}</p>
//           </div>
//         </div>

//         <div className='grid grid-cols-2 gap-1 mt-2 text-sm'>
//           <Info icon={<FaLocationDot />} title={userData.location} />
//           <Info
//             icon={<AiOutlineLink />}
//             title={new Date(userData.created_at).toISOString().split('T')[0]}
//           />
//           <Info icon={<FaTwitter />} title={userData.twitter_username} />
//           <Info icon={<BsFillBuildingsFill />} title={userData.company} />
//         </div>

//         <div className='user-status mt-4 py-2 flex justify-center rounded-lg my-2 items-center gap-4 bg-[#141d2f]'>
//           <Stats title='Repos' value={userData.public_repos} />
//           <Stats title='Followers' value={userData.followers} />
//           <Stats title='Following' value={userData.following} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const UserSearch = ({ onSearch }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleSearch = () => {
//     onSearch(inputValue);
//   };

//   return (
//     <div className='flex justify-center mt-8 w-full rounded-lg bg-[#1e2a47] p-2 text-white'>
//       <div className='flex items-center gap-2 w-full px-4'>
//         <BiSearch className='text-lg' />
//         <input
//           type='text'
//           className='px-2 bg-transparent text-white border-none outline-none rounded-l-lg w-full placeholder-white'
//           placeholder='Search GitHub username...'
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//       </div>
//       <button
//         className='py-[6px] px-6 bg-blue-500 text-white rounded-md'
//         onClick={handleSearch}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// const Info = ({ icon, title }) => {
//   return (
//     <div className='flex gap-2 justify-start items-center'>
//       {icon}
//       <p>{title || 'Not available'}</p>
//     </div>
//   );
// };

// const Stats = ({ title, value }) => {
//   return (
//     <div className='status flex justify-center border rounded-lg px-4 flex-col items-center'>
//       <p className='text-sm font-semibold'>{title}</p>
//       <p className='text-lg font-semibold'>{value || 'N/A'}</p>
//     </div>
//   );
// };

// const ErrorMessage = ({ error }) => {
//   return (
//     <div className=' mt-4 min-h-[300px] flex items-center justify-center'>
//       <p className='text-red-500 text-lg uppercase text-center'>
//         {error.message}
//       </p>
//     </div>
//   );
// };
