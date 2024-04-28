import { getAllUser, addUser, getUserBynoktp, updatedata, deldata } from "../skins/skins.js";

export const getAllUserData = async (req, res) => {
    try {
      const data = await getAllUser();
      res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  };

  export const createUser = async (req, res) => {
    const { nopunggung, nama, noktp, kampus } = req.body;
    try {
      await addUser(nopunggung, nama, noktp, kampus);
      res.status(201).json({ msg: "ok" });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  };

  export const getbynoktp= async (req, res)=>{
    const noktp = req.params.noktp
    try{
        const data=await getUserBynoktp (noktp);
        res.status(200).json({data});
    }catch (error){
        res.status(400).json({msg:error});
    }
  }

  export const upddata = async ( req, res ) => {
    const noktp = req.params.noktp; 
    //console.log(noktp);
    const { nopunggung, nama, kampus }=req.body;
    try{
        const data = await getUserBynoktp(noktp);
        console.log(data)
        const oldnopunggung = data[0].nopunggung;
        const oldnama = data[0].nama;
        const oldkampus= data[0].kampus;
        
        if(nopunggung == ""){
            await updatedata(oldnopunggung, nama, noktp, kampus);
        }else if(nama == ""){
            await updatedata(nopunggung, oldnama, noktp, kampus);
        }else if(kampus == ""){
            await updatedata(nopunggung, nama, noktp, oldkampus);
        }else if(noktp == ""){
            await updatedata(nopunggung, nama, oldnoktp, kampus);
        }else {
            await updatedata(nopunggung, nama, noktp, kampus);
        }
        res.status(200).json({ msg: "ok" });
    }catch (error) {
        res.status(400).json({ msg:error });
    }
  };

  export const deletedata = async(req,res)=>{
    const noktp=req.params.noktp;
    try{
        await deldata(noktp);
        res.status(200).json({msg: "delete"});
    }catch (error){
        res.status(400).json({msg:error});
    }
  }