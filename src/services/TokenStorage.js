class TokenStorage {
    get () {
        return localStorage.getItem("__siriusToken")
    }
    set(token) {
        localStorage.setItem("__siriusToken", token);
    }
}
const tokenStorage = new TokenStorage()
export {
    tokenStorage
}
