import mongoose from "mongoose";

const connectionDB = ()=>{
    return mongoose.connect("mongodb://uvgrwlywjk60guqctv0v:34q53S51i2ORNXVHF4gj@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/b31vo6ysvek3zsl?replicaSet=rs0")
    .then(()=>{
        console.log("Connected to DataBase");
    })
    .catch((err)=>{
        console.log({msg:"Faild to connect ton database" , err});
    })
}

export default connectionDB