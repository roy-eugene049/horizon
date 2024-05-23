import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
const loggedIn = { firstName: 'Roy', lastName: 'Eugene', email: 'info@eccosync.co.ke' };

  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type="greeting"
                title="welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and Manage your account and transactions efficiently."
                />

                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                />
            </header>
        </div>

        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 222.2 }, {currentBalance: 777.7}]}
        />
    </section>
  )
}

export default Home