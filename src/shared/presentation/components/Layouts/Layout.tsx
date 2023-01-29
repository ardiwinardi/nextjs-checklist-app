import { ReactNode, useContext } from 'react';
import { InternetConnectionContext } from '../../contexts/InternetConnectionContext';
import Alert from '../Alert';

type Props = {
  children: ReactNode;
};
export default function Layout(props: Props) {
  const { isOnline } = useContext(InternetConnectionContext);

  return (
    <main className="container mx-auto w-11/12 lg:w-8/12 xl:w-5/12 py-3">
      {!isOnline && <Alert>Not connected to the internet.</Alert>}
      {props.children}
    </main>
  );
}
