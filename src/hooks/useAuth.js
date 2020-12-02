import { useContext } from 'react';
import { AuthContext } from '../utils/contexts';

const useAuth = () => useContext(AuthContext);

export default useAuth;