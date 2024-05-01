import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.contProfile}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.textName}>{name}</p>
        <p className={css.taxtTag}>@{tag}</p>
        <p className={css.textLocation}>{location}</p>
      </div>
      <ul className={css.contSocialReviews}>
        <li className={css.socialReviewsItem}>
          <span className={css.textFollowers}>Followers</span>
          <span className={css.subText}>{followers}</span>
        </li>
        <li className={css.socialReviewsItem}>
          <span className={css.textViews}>Views</span>
          <span className={css.subText}>{views}</span>
        </li>
        <li className={css.socialReviewsItem}>
          <span className={css.textLikes}>Likes</span>
          <span className={css.subText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
