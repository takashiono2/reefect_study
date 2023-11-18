import { useEffect } from 'react';

const Profile = ({ showNationality }) => {
  console.log('再描写');
  useEffect(() => {
    const nationality = showNationality();
    console.log(nationality);
  },[showNationality]);
  return <h1>Profileコンポーネント</h1>;
};

export default Profile;