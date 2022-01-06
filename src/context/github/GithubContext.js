import { createContext, useReducer } from "react";
import githubReducer from "../../context/github/GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [{ users, user, loading }, dispatch] = useReducer(githubReducer, initialState);

    const clearSearch = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    const clearUserDetail = () => {
        dispatch({
            type: 'CLEAR_USER',
        })
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    const getUser = async (login) => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        if (response.status === 404) {
            window.location = `/notfound`;
        } else {

            const userData = await response.json();

            dispatch({
                type: 'GET-USER',
                payload: userData
            })
        }


    }


    const searchUsers = async (text) => {
        const param = new URLSearchParams({
            q: text,
        });
        setLoading();
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
            user,
            loading,
            clearSearch,
            searchUsers,
            getUser,
            clearUserDetail,
            setLoading,
        }} >
            {children}
        </GithubContext.Provider >
    )
}

export default GithubContext;