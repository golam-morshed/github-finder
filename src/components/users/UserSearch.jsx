import { useContext, useState } from "react";
import githubContext from "../../context/github/GithubContext";



function UserSearch() {
    const [text, setText] = useState("");
    const { users, searchUsers, clearSearch } = useContext(githubContext);


    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") return;
        searchUsers(text);
    }
    const onChange = (e) => {
        setText(e.target.value);
    }

    const clearUsers = (e) => {
        e.preventDefault();
        setText("");
        clearSearch();
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6 mt-1 ml-1 gap-8">
            <div>
                <form onSubmit={onSubmit} className='form'>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type='text'
                                name='text'
                                placeholder='Search Users...'
                                value={text}
                                onChange={onChange}
                                className="w-full pr-40 bg-gray-200 input text-black"
                            />
                            <button
                                type='submit'
                                value='Search'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-dark'>
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div >
            <div>
                {users.length > 0 && (
                    <button
                        className='btn btn-light'
                        onClick={clearUsers}
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    )
};

export default UserSearch
