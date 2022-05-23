const db = require('../helpers/databse')


exports.getById = async function getById (id) {
    let query = "SELECT * FROM favorites INNER JOIN dog ON favorites.dog_id = dog.id WHERE favorites.user_id = ? and favorites.status = 1 "
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
    let query = `INSERT INTO favorites (${keys}) VALUES (${parm})`
    try{
      await db.run_insert(query, values)  
      return {"status": 201}
    } catch(error) {
      return error
    }
  }


  exports.edit = async function edit (dogs) {  
    console.log(dogs)
    let parm = ''
    let id = dogs['id']
    delete dogs['id'];

    for(var i in dogs)
    parm +=`${i} = "${dogs[i]}",`

    parm=parm.slice(0,-1)

    let query = `UPDATE favorites SET ${parm} WHERE id = ${id}`
    console.log(query);
    try{
      await db.run_update(query)  
      return {"status": 201}
    } catch(error) {
      return error
    }
  }