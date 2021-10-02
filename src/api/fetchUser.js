function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Yousef",
                email: "yousefelgoharyx@gmail.com",
                token: "5asdasdo",
                pic: ""
            })
        }, 1000);
    })
}

export default fetchUser