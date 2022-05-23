const db = require('../helpers/databse')


exports.getById = async function getById (id) {
    let query = "SELECT * FROM dog WHERE code = ? and status = 1"
    let values = [id]
    let data = await db.run_query(query, values)
    return data
  }

  exports.add = async function add (article) {  
    let keys = Object.keys(article)
    let values = Object.values(article)  
    keys = keys.join(',')   
    let parm = ''
    for(i=0; i<values.length; i++){ parm +='?,'}
    parm=parm.slice(0,-1)
    let query = `INSERT INTO dog (${keys}) VALUES (${parm})`
    try{
      await db.run_insert(query, values)  
      return {"status": 201}
    } catch(error) {
      return error
    }
  }

  //list all the articles in the database
exports.getAll = async function getAll (page, limit, order) {
    // TODO: use page, limit, order to give pagination
    let query = "SELECT * FROM dog where status = 1;"
    let data = await db.run_query(query)  
    return data
  }

  exports.getByCneter = async function getByCneter (center) {
    let query = "SELECT * FROM dog WHERE center = ? and status =1 "
    let values = [center]
    let data = await db.run_query(query, values)
    return data
  }

  exports.searchByKey = async function searchByKey (key) {
    let query = `SELECT * FROM dog WHERE (name LIKE '%${key}%' or about LIKE '%${key}%') and status = 1`
    let data = await db.run_query(query)
    return data
  }


  exports.edit = async function edit (dogs) {  
    console.log(dogs)
    let parm = ''
    let id = dogs['id']
    delete dogs['id'];

    for(var i in dogs)
    parm +=`${i} = "${dogs[i]}",`

    parm=parm.slice(0,-1)

    let query = `UPDATE dog SET ${parm} WHERE id = ${id}`
    console.log(query);
    try{
      await db.run_update(query)  
      return {"status": 201}
    } catch(error) {
      return error
    }
}


    exports.removebyId = async function removebyId (id) {
        let query = "UPDATE dog SET status = 0 WHERE id = ?"
        let values = [id]
        let data = await db.run_update(query, values)
        return data
      }

