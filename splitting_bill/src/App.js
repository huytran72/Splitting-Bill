const initialFriends = [
  {
    id: 118836,
    name: "Kenny",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -11,
  },
  {
    id: 933372,
    name: "Katie",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 43,
  },
  {
    id: 499476,
    name: "Kevin",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return <li>{friend.name}</li>;
}
