import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"

function Home() {
    return (

        <div className="h-full flex flex-col pb-5">
            <div className="shrink">
                <UserSearch />
            </div>
            <div className="flex-1 overflow-y-auto">
                <UserResults />
            </div>

        </div>
    )
}

export default Home
