// use ansh
// show collections
db.items.find({ price: 55000 })

// deleting item from the mongodb database
db.items.deleteOne({ price: 50000 })

// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match

db.items.deleteMany({ price: 125000 })

// deleteMany will delete all entry form the database