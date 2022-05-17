import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { useUserContext } from '../Components/userContext';

const Logout: FC = () => {
  const { logout } = useUserContext();
  const router = useRouter();
  logout?.();
  router.push('/');

  return <></>;
};
export default Logout;
