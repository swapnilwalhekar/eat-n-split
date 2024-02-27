import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Purushottam",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 100,
  },
  {
    id: 933372,
    name: "Tushar",
    image: "https://i.pravatar.cc/48?u=9333722",
    balance: -100,
  },
  {
    id: 499476,
    name: "Anil",
    image: "https://i.pravatar.cc/48?u=1188365",
    balance: 0,
  },
  {
    id: 11883,
    name: "Bhairav",
    image: "https://i.pravatar.cc/48?u=11883027",
    balance: -130,
  },
  {
    id: 93337,
    name: "Ashish",
    image: "https://i.pravatar.cc/48?u=9333723",
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

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
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
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
