import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/userSlice.js';

function UserList() {
  // достаём массив пользователей из состояния Redux
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  if (users.length === 0) {
    return <p className="empty">Список пользователей пуст</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user">
          <div className="user__avatar">{user.name[0]}</div>
          <div className="user__info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>
              {user.city} · {user.age} лет
            </p>
          </div>
          <button
            className="user__remove"
            onClick={() => dispatch(removeUser(user.id))}
            title="Удалить"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
