import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ items }) {
  return (
    <ul>
      {items.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
