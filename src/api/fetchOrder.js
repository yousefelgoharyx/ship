function fetchOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                recipient_name: "يوسف",
                recipient_phone: "01225371649",
                recipient_address: "بشاير الخير 5",
                recipient_city: "الاسكندرية",
                product: "عدد 3 ستيكر رياكت",
                merchant_name: "ITGO",
                merchant_address:"سموحة",
                merchant_phone: "012536587215",
                price: "45 EGP"
            })
        }, 1000);
    })
}

export default fetchOrder