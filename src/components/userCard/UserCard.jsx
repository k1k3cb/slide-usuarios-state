import { useState } from 'react';
import { USERS } from '../../constants/users';

const UserCard = () => {
	const [userCount, setUserCount] = useState(0);

	return (
		<div>
			<img src={USERS[userCount].profileImage} alt={USERS[userCount].name} />
			<h1>{USERS[userCount].name}</h1>
			<p>Username: {USERS[userCount].username}</p>
			<p>Email: {USERS[userCount].email}</p>
			<button
				onClick={() => handleClickPrevious(userCount, setUserCount)}
				disabled={userCount <= 0}
			>
				Previous
			</button>
			<button
				onClick={() => handleClickNext(userCount, setUserCount)}
				disabled={userCount >= USERS.length - 1}
			>
				Next
			</button>
		</div>
	);
};
const handleClickNext = (userCount, setUserCount) => {
	setUserCount(userCount + 1);
};

const handleClickPrevious = (userCount, setUserCount) => {
	setUserCount(userCount - 1);
};
export default UserCard;
