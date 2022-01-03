import { Link } from "react-router-dom"

function UserItem({ user: { login, avatar_url }, handleUserDetails }) {
    return (
        <div className="card shadow-md compact side bg-base-100">
            <Link to={`/user/${login}`} onClick={handleUserDetails} className="group flex-row items-center space-x-4 card-body bg-gray-600 hover:bg-gray-900 shadow-lg text-white-500 transition-all ease-in-out duration-150 ">

                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <p className="group-hover:text-red-400 text-base-content text-opacity-40">Visit profile</p>
                </div>

            </Link>
        </div>
    )
}

export default UserItem
