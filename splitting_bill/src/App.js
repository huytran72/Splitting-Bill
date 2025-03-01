const initialFriends = [
  {
    id: 118836,
    name: "Kethy",
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
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
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
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} €
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} €
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯 Friend name </label>
      <input type="text" />

      <label> Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with </h2>

      <label>💰 Bill value</label>
      <input type="number" />

      <label>👯 Your expense</label>
      <input type="text" />

      <label>📝 Description</label>
      <input type="text" />

      <Button>Split bill</Button>
    </form>
  );
}
