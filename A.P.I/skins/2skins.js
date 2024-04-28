import connect from "../confdb/confdb.js";

export const getAllSuser=()=>{
    const query=connect.select('*') 
  .from('todo'); 
  return query;
}

export const addSuser = (alamat, noktp, nopunggung, nim)=>{
    const query=connect.insert({ alamat: alamat, noktp: noktp, nopunggung: nopunggung, nim: nim })
    .into("todo");

    return query;
}

export const getSuserBynoktp = (noktp)=>{
    const query = connect.select("*").from("todo").where({noktp: noktp});
    return query;
}
export const updateduadata = (alamat, noktp, nopunggung, nim)=>{
    const query = connect ("todo")
  .update({ alamat: alamat, nopunggung: nopunggung, nim: nim })
  .where({ noktp: noktp });
  return query;
}
export const delduadata=(noktp)=>{
    const query=connect("todo").del().where ({noktp:noktp});
    return query;
}