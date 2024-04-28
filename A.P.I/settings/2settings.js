import { getAllSuser, addSuser, getSuserBynoktp, updateduadata, delduadata } from "../skins/2skins.js";
// import { getUserBynoktp } from "../skins/skins.js";

export const getAllSupersuser = async (req, res)=>{
    try{
        const data = await getAllSuser();
        res.status(200).json({ data});
    }catch (error){
        res.status(400).json({msg:error});
    }
}

export const createSuser = async (req, res) => {
    const { alamat, noktp, nopunggung, nim } = req.body;
    try {
      await addSuser(alamat, noktp, nopunggung, nim);
      res.status(201).json({ msg: "ok" });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  };

export const getSuperBynoktp = async (req, res)=>{
    const noktp = req.params.noktp;
    try{
        const data = await getSuserBynoktp(noktp);
        res.status(200).json({data});
    }   catch (error){
        res.status(400).json({msg:error});
    }
}



// export const updateSuser = async (req, res)=>{
//     const noktp= req.params.noktp;
//     const {newSuser}= req.body;
//     try{
//         const data = await getSuserBynoktp(noktp);
//         const 
//     }
// }

export const updduadata = async ( req, res ) => {
    const noktp = req.params.noktp; 
    //console.log(noktp);
    const { alamat, nopunggung, nim }=req.body;
    try{
        const data = await getSuserBynoktp(noktp);
        console.log(data)
        const oldalamat = data[0].alamat;
        const oldnopunggung = data[0].nopunggung;
        const oldnim= data[0].nim;
        
        if(alamat == ""){
            await updateduadata(oldalamat, nopunggung, noktp, nim);
        }else if(nopunggung == ""){
            await updateduadata(alamat, oldnopunggung, noktp, nim);
        }else if(nim == ""){
            await updateduadata(alamat, nopunggung, noktp, oldnim);
        }else if(noktp == ""){
            await updateduadata(alamat, nopunggung, oldnoktp, nim);
        }else {
            await updateduadata(alamat, nopunggung, noktp, nim);
        }
        res.status(200).json({ msg: "ok" });
    }catch (error) {
        res.status(400).json({ msg:error });
    }
  };

  export const dltSuser = async (req, res)=>{
    const noktp= req.params.noktp;
    try{
        await delduadata(noktp);
        res.status(200).json({msg: "delete" });
    }   catch (error){
        res.status(400).json({msg:error});
    }
}