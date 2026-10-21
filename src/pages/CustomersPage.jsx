import React from 'react';
import AccountsPage from './AccountsPage.jsx';
export default function CustomersPage({onNavigate}){return <AccountsPage mode="manage" onDone={()=>onNavigate('dashboard')}/>}