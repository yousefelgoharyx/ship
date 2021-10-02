function fetchOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    recipient_name: "يوسف",
                    recipient_address: "بشاير الخير 5",
                    recipient_city: "الاسكندرية",
                    id: 1,
                }
            ])
        }, 1000);
    })
}

export default fetchOrders