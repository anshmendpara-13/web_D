// searching data in mongo db
// use ansh;

// this query will give all the objects with rating equal to 4.5
// filter objects
db.items.find({ rating: 4.5 })
db.items.find({ rating: { $gte: 4.1 } })
db.items.find({ rating: { $gt: 4.5 } })

// and operator using only(,)
db.items.find({ rating: { $gt: 4.5 }, price: { $gt: 50000 } })
db.items.find({ rating: { $lt: 4.5 }, price: { $gt: 10000 } })


// or operator using only({$or:[{},{},...]})
db.items.find({ $or: [{ rating: { $lt: 4.5 } }, { price: { $gt: 100000 } }] })

db.items.find({ rating: { $lt: 4.5 } }, { rating: 1 })
db.items.find({ rating: { $lt: 4.5 } }, { rating: 1, qty: 1 })