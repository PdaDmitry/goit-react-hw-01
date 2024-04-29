import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const status = clsx(css.friendStatus, {
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });

  return (
    <div className={css.contFriendElem}>
      <img className={css.friendPhoto} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendNameText}>{name}</p>
      <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
