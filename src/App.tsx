import React from 'react';

import { AuthProvider } from './providers/AuthProvider/AuthProvider'
import { RootRoutes } from './routes/RootRoutes';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <RootRoutes />
    </AuthProvider>
  );
}

export default App;
