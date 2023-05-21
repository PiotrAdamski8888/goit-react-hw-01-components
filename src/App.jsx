import React from 'react';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from 'components/Statistic/Statistic';
import statsData from './data/stats.json';
import FriendList from './components/Friends/FriendList';
import friends from './data/friends.json';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statsData} />
    <FriendList title="FriendList" friends={friends} />
    <TransactionHistory title="Transaction history" transactions={transactions} />
  </div>
);
export default App;
