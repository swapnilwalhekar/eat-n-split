import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Purushottam",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 100,
  },
  {
    id: 933372,
    name: "Tushar",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: -100,
  },
  {
    id: 499476,
    name: "Anil",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 11883,
    name: "Bhairav",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -130,
  },
  {
    id: 93337,
    name: "Ashish",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 120,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

// const Button = ({ children, onClick }) => {
//   return (
//     <button className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// const Friend = ({ friend, onSelection, selectedFriend }) => {
//   let isSelected = selectedFriend?.id === friend.id;

//   return (
//     <li className={isSelected ? "selected" : ""}>
//       <img src={friend.image} alt={friend.name} />
//       <h3>{friend.name}</h3>

//       {friend.balance < 0 && (
//         <p className="red">
//           You owe {friend.name} {Math.abs(friend.balance)}₹
//         </p>
//       )}
//       {friend.balance > 0 && (
//         <p className="green">
//           Owes you {friend.name} {Math.abs(friend.balance)}₹
//         </p>
//       )}
//       {friend.balance === 0 && <p>You and {friend.name} are even</p>}
//       <Button onClick={() => onSelection(friend)}>
//         {isSelected ? "Close" : "Select"}
//       </Button>
//     </li>
//   );
// };

// const FriendsList = ({ friends, onSelection, selectedFriend }) => {
//   return (
//     <ul>
//       {friends.map((friend) => (
//         <Friend
//           friend={friend}
//           key={friend.id}
//           onSelection={onSelection}
//           selectedFriend={selectedFriend}
//         />
//       ))}
//     </ul>
//   );
// };

// const FormAddFriend = ({ onAddFriend }) => {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("https://i.pravatar.cc/48");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !image) return;

//     const id = crypto.randomUUID();
//     const newFriend = {
//       id: id,
//       name: name,
//       image: `${image}?=${id}`,
//       balance: 0,
//     };

//     onAddFriend(newFriend);

//     setName("");
//     setImage("https://i.pravatar.cc/48");
//   };

//   return (
//     <form className="form-add-friend" onSubmit={handleSubmit}>
//       <label>👩🏻‍🤝‍🧑🏻Friend name</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label>🌆Image url</label>
//       <input
//         type="text"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />

//       <Button>Add</Button>
//     </form>
//   );
// };

// const FormSlitBill = ({ selectedFriend }) => {
//   const [bill, setBill] = useState("");
//   const [paidByUser, setPaidbyUser] = useState("");
//   const [whoIsPaying, setWhoIsPaying] = useState("user");

//   const paidByFriend = bill ? bill - paidByUser : "";

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!bill || !paidByFriend) return;
//     console.log("oko:");
//   };

//   return (
//     <form className="form-split-bill" onSubmit={handleSubmit}>
//       <h2>Split a bill with {selectedFriend.name}</h2>
//       <label>💰 Bill value</label>
//       <input
//         type="text"
//         value={bill}
//         onChange={(e) => setBill(Number(e.target.value))}
//       />
//       <label>👨‍🎤 Your expense</label>
//       <input
//         type="text"
//         value={paidByUser}
//         onChange={(e) =>
//           setPaidbyUser(
//             Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
//           )
//         }
//       />
//       <label>💸 {selectedFriend.name}'s expense</label>
//       <input type="text" value={paidByFriend} disabled />
//       <label>🤑 Who is paying bill</label>
//       <select
//         value={whoIsPaying}
//         onChange={(e) => setWhoIsPaying(e.target.value)}
//       >
//         <option value="user">You</option>
//         <option value="friend">{selectedFriend.name}</option>
//       </select>
//       <Button>Split bill</Button>
//     </form>
//   );
// };
