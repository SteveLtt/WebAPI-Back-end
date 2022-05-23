const db = require('../helpers/databse')



exports.findByUsername = async function getByUsername(username) {
    const query = 'select * from user where username = ?'
    const user = await db.run_query(query, [username])
    return user
}


  exports.getAll = async function getAll () {
    // TODO: use page, limit, order to give pagination
    let query = "select * FROM user;"
    let data = await db.run_query(query)  
    return data
}


exports.add = async function add (user) {  
    let keys = Object.keys(user)
    let values = Object.values(user)  
    keys = keys.join(',')   
    let parm = ''
    for(i=0; i<values.length; i++){ parm +='?,'}
    parm=parm.slice(0,-1)
    let query = `INSERT INTO user (${keys}) VALUES (${parm})`
    try{
      await db.run_insert(query, values)  
      return {"status": 201}
    } catch(error) {
      return error
    }
  }


  exports.getSignUpCode = async function getSignUpCode (code) {
    let query = "SELECT * FROM sign_up_code WHERE code = ?"
    let values = [code]
    let data = await db.run_query(query, values)
    return data
  }