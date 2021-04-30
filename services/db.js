//load modules
const mongoose=require('mongoose');
const config=require('config');
const autoIncrement=require('mongoose-sequence');

//get config
// var host=config.get('db.host');
// var port=config.get('db.port');
// var db=config.get('db.name');

//get Atlas config values
var uName=config.get('atlasDb.uName');
var pass=config.get('atlasDb.pass');
var cluster=config.get('atlasDb.clusterName');

//setup db connection
//mongoose.connect(`mongodb://${host}:${port}/${db}`);
mongoose.connect(`mongodb+srv://${uName}:${pass}@cluster0.kkcwp.mongodb.net/${cluster}?retryWrites=true&w=majority`)

//get connection object 
const conn=mongoose.connection;
const AutoIncrement=autoIncrement(conn)

//open db connection
conn.on('open',()=>{  
    console.log('DB connected...');
});

//exporting AutoIncrement variable.
module.exports={AutoIncrement}