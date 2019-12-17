import React from "react";
import Profile from "./profile/Profile";
import user from "./user.json"
import Statistics from './statistics/Statistics'
import statisticalData from './statistical-data.json';
import FriendsList from './friendsList/FriendsList';
import friends from './friends.json'
import TransactionHistory from './transactionHistory/TransactionHistory'
import transactions from './transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="File upload" stats={statisticalData} />
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
