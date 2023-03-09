// inserting data in mongo db
// use ansh;
// below line is collaction and samsumg 71a is document
db.items.insertOne({
    name: "samsung 71a",
    price: 55000,
    rating: 4.5,
    qty: 250,
    sold: 100
})

db.items.insertMany(
    [
        {
            name: "samsung 71a",
            price: 55000,
            rating: 4.5,
            qty: 250,
            sold: 100
        },
        {
            name: "iqoo",
            price: 23000,
            rating: 4.1,
            qty: 300,
            sold: 250
        },
        {
            name: "samsung s22 ultra",
            price: 125000,
            rating: 4.8,
            qty: 100,
            sold: 25,
            isbig: true
        }
    ]
)

