import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage, LoginPage, ProtectedRoute } from './pages';
import { store } from './store/store';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;
