import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';

export default function App() {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
}
