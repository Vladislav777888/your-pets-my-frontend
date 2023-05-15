import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegestration,
} from 'redux/auth/auth.selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isRegestration = useSelector(selectIsRegestration);
  const user = useSelector(selectUser);

  return {
    isRegestration,
    isLoggedIn,
    isRefreshing,
    user,
  };
};
