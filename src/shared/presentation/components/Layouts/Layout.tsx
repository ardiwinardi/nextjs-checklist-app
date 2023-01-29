import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: ReactNode;
};
export default function Layout(props: Props) {
  return (
    <main className="container mx-auto w-11/12 lg:w-8/12 xl:w-5/12 py-3">
      {props.children}
      <ToastContainer />
    </main>
  );
}
