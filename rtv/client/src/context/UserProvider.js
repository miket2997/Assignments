import React, { useCallback, useState } from "react";
import axios from "axios";


export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        comments: [],
        errMsg: ""
    };

    const [userState, setUserState] = useState(initState);
    const [allIssues, setAllIssues] = useState([]);
   

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: "",
            token: "",
            issues: [],
            comments: []
        })
    };

    const getAllIssues = useCallback(() => {
        userAxios.get("/api/issues")
        .then(res => {
            setAllIssues(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }, [])

    
    const getUserIssues = useCallback(() => {
        userAxios.get("/api/issues/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }, []);

    function addIssue(newIssue){
        userAxios.post("/api/issues", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function deleteIssue(issueId){
        userAxios.delete(`/api/issues/${issueId}`)
        .then(() => {
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id !== issueId)
            }))
            getUserIssues()
        })
        .catch(err => console.log(err.response.data.errMsg))
    };

    function editIssue(issueId, updatedIssue){
        userAxios.put(`/api/issues/${issueId}`, updatedIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => {
                    if(issue._id === issueId){
                        return res.data
                    } else {
                        return issue
                    }
                })
            }))
            getUserIssues()
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function upVote(issueId){
        userAxios.post(`/api/issues/${issueId}/upvote`)
        .then(res => {
            const updatedIssue = res.data;
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => issue._id === updatedIssue._id ? updatedIssue : issue)
            }))
            getAllIssues()
            console.log(res)
        })
        .catch(err => console.log(err.response.data))
    };

    function deleteUpVote(issueId){
        userAxios.delete(`api/issues/${issueId}/upvote`)
        .then(res => {
            const updatedIssue = res.data;
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id === updatedIssue._id ? updatedIssue : issue)
            }))
            getAllIssues()
            console.log(res)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function downVote(issueId){
        userAxios.post(`/api/issues/${issueId}/downvote`)
        .then(res => {
            const updatedIssue = res.data;
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => issue._id === updatedIssue._id ? updatedIssue : issue)
            }))
            getAllIssues()
            console.log(res)
        })
        .catch(err => console.log(err.response.data))
    };

    function deleteDownVote(issueId){
        userAxios.delete(`/api/issues/${issueId}/downvote`)
        .then(res => {
            const updatedIssue = res.data;
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id === updatedIssue._id ? updatedIssue : issue)
            }))
            getAllIssues()
            console.log(res)
        })
    }

    const getUserComments = useCallback(() => {
        userAxios.get("/api/comments/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                comments: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }, []);

    function addComment(issueId, newComment){
        userAxios.post(`/api/comments/${issueId}`, newComment)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                comments: [...prevState.comments, res.data]
            }))
            getAllIssues()
        })
    };

    function deleteComment(commentId) {
        userAxios.delete(`/api/comments/${commentId}`)
        .then(res => {
          setUserState(prevState => ({
            ...prevState,
            comments: prevState.comments.filter(comment => comment._id !== commentId)
          }))
          getAllIssues()
        })
        .catch(err => console.log(err.response.data.errMsg))
      };


      function editComment(commentId, updatedComment){
        userAxios.put(`/api/comments/${commentId}`, updatedComment)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => {
                    const updatedIssue = {...issue};
                    updatedIssue.comments = updatedIssue.comments.map(comment => {
                        if(comment._id === commentId){
                            return res.data
                        } else {
                            return comment
                        }
                    })
                    return updatedIssue
                })
            }))
            getAllIssues()
        })
        .catch(err => {
            console.log(err)
            setUserState(prevState => ({
                ...prevState,
                errMsg: err.response.data.errMsg
            }))
        })
      }
      

    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    };

    function resetAuthError(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            addIssue,
            addComment,
            resetAuthError,
            getAllIssues,
            allIssues,
            getUserIssues,
            deleteComment,
            upVote,
            downVote,
            editComment,
            getUserComments,
            deleteIssue,
            deleteUpVote,
            deleteDownVote,
            editIssue
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

