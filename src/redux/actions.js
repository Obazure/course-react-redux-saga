import {CREATE_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader(message) {
    return {
        type: SHOW_LOADER,
        payload: message
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return {
        type: SHOW_ALERT,
        payload: text
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function throwAlert(text) {
    return async (dispatch) => {
        dispatch(showAlert(text))
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     dispatch(showLoader())
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         .then(async res => {
    //             if (res.status !== 200) throw res
    //             return await res.json()
    //         })
    //         .catch(async error => {
    //             const errorMessage = await error.toString()
    //             dispatch(throwAlert(errorMessage))
    //             return []
    //         })
    //     dispatch({type: FETCH_POSTS, payload: response})
    //     dispatch(hideLoader())
    // }
}