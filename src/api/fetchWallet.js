function fetchWallet() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                funds: "450"
            })
        }, 1000);
    })
}

export default fetchWallet