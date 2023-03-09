// show dbs
// use ansh
// show collections

db.items.updateOne({ name: "iqoo" }, { $set: { price: 56000 } })

db.items.updateMany({ name: "iqoo" }, { $set: { pirce: 12, rating: 2 } })