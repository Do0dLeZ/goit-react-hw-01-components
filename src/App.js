import React from 'react';

import Profile from './components/profile/Profile';
import Statistic from './components/statistic/Statistic';
import FriendsList from './components/friends/FriendsList';
import TransactionHistory from './components/transactions/TransactionHistory';

import GlobalFont from './base-style/fonts/fonts';

import userInfo from './json/user.json';
import statisticalData from './json/statistics.json';
import friendsList from './json/friends.json';
import transactionHistory from './json/transactions.json';

function App() {
  return (
    <div className="App">
      <GlobalFont />
      <Profile userInfo={userInfo} stats={userInfo.stats} />
      <Statistic title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friendsList} />
      <TransactionHistory transactions={transactionHistory} />
    </div>
  );
}

export default App;
