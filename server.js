const {MongoClient}=require("mongodb")
const db_path="mongodb://localhost:27017"

MongoClient.connect(db_path,(err,client)=>{
    
    if(err) throw err

    const testdb=client.db("testdb")
    console.log(testdb)

    const people=testdb.collection("people")
    // people.insertMany([
    //     {name:"mohit",love:"anubha"},
    //     {name:"anubha",love:"mohit"}
    // ],(err,res)=>{
    //     console.log(res)
    // })
    people.find({}).toArray((err,res)=>{
        if(err)throw err
        console.log(res)
    })
})
