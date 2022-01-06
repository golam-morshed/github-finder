import { useContext } from 'react'
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
    const { users, loading } = useContext(GithubContext);


    if (!loading) {
        return (
            <div className='mt-8 grid grid-cols-1 gap-8 xl-grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}

            </div>
        )
    } else {
        return (<h2>Loading .....</h2>)
    }
}

export default UserResults
