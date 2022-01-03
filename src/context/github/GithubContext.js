import { createContext, useReducer } from "react";
import githubReducer from "../../context/github/GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [{ users, loading }, dispatch] = useReducer(githubReducer, initialState);

    const clearSearch = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }


    const searchUsers = async (text) => {
        const param = new URLSearchParams({
            q: text,
        });
        const response = await fetch(`${GITHUB_URL}/search/users?${param}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const { items } = await response.json();

        dispatch({
            type: 'FETCH_USERS',
            payload: items
        })


    }

    return (
        <GithubContext.Provider value={{
            users,
            loading,
            clearSearch,
            searchUsers,
        }} >
            {children}
        </GithubContext.Provider >
    )
}

export default GithubContext;