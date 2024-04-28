import connect from "../confdb/confdb.js";

export const getAllUser=()=>{
    const query=connect.select('*') 
  .from('player'); 
  return query;
}

export const addUser = (nopunggung, nama, noktp, kampus)=>{
    const query=connect.insert({ nopunggung: nopunggung, nama: nama, noktp: noktp, kampus: kampus })
    .into("player");

    return query;
}

export const getUserBynoktp = (noktp)=>{
    const query = connect.select("*").from("player").where({noktp: noktp});
    return query;
}
export const updatedata = (nopunggung, nama, noktp,kampus)=>{
    const query = connect ("player")
  .update({ nopunggung: nopunggung, nama: nama, kampus: kampus })
  .where({ noktp: noktp });
  return query;
}
export const deldata=(noktp)=>{
    const query=connect("player").del().where ({noktp:noktp});
    return query;
}