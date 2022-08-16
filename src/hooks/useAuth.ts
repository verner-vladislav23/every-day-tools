import React from 'react';

import { AuthContext } from '../providers';

export const useAuth = () => React.useContext(AuthContext);