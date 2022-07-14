class Message{
    constructor(dbMariadb, tableName ){
        try{
            this.dbMariadb=dbMariadb
            this.tableName=tableName
            dbMariadb.schema.hasTable(tableName).then(function(exists) {
                if (!exists) {
                  return dbMariadb.schema.createTable(tableName, table=>{
                    table.increments('id').primary()
                    table.string('mail',50)
                    table.string('result')
                    table.string('message')
                  });
                }})  
        }catch(err){
            console.log('error constructor',err)    
        }
    }
   
    async getAllMessages(){
        let rows= await this.dbMariadb.from(this.tableName).select("*")
        rows.forEach((article)=>{ console.log(`${article['id']} ${article['mail']} ${article['result']}: ${article['message']}`) })
        return rows
    }

    async newMessages(mail, result, message){
        const elemento = {
            mail,
            result,
            message
        }
        const messages= await this.dbMariadb.from(this.tableName).insert(elemento)
        return messages
    }

}

module.exports= Message