import React from "react";

import profile from "../profile/profile.json";
import statistics from "../statistics/statistics.json";
import friendData from "../friends/friends.json";
import transactions from "../transactions/transactions.json";

import { Profile } from "../profile/Profile";
import { Statistics } from "../statistics/Statistics";
import { FriendList } from "../friends/Friends";
import { TransactionHistory } from "../transactions/Transactions";

const App = () => {
  return (
    <>
      <Profile user={profile} />
      <Statistics stats={statistics} />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
