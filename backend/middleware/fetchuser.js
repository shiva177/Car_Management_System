import Jwt from "jsonwebtoken";


const JWT_SECRET="kyahaalhaimahibhai";


const fetchUser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        return res.status(401).json({error:"Please authenticate using a valid token"})
    }
    try{
        const data=Jwt.verify(token,JWT_SECRET);
        req.user=data.id;
        next()
    }catch(error){
        return res.status(401).json({error:"Please authenticate using a valid token"})
    }
    
}

export default fetchUser;