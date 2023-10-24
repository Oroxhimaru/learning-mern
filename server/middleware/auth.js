import jwt from "jsonwebtoken";


//Yeh code ek middleware hai jo JSON Web Token (JWT) ki authenticity ko verify karta hai. 
export const verifyToken = async (req, res, next) => {
  try {
     // Request headers se Authorization header se token extract kiya jaata hai
    let token =  req.header("Authorization");
 // Agar token mojood nahi hai, toh client ko "Access Denied" message ke saath 403 Forbidden status code bheja jaata 
    if (!token) {
        return res.status(403).send("Access Denied");
    }
    // Agar token "Bearer " se shuru hota hai, toh "Bearer " hata diya jaata hai taake sirf actual token bache
    if (token.startsWith("Bearer ")){
        token = token.slice(7, token.length).trimLeft();
    }
 // Token ko verify kiya jaata hai JWT_SECRET key ke saath
    const verified = jwt.verify(token, process.env.JWT_SECRET);
     // Verified user ki details ko request object mein add kiya jaata hai taki future route handlers unka istemal kar sakein   
    req.user = verified;
    next();
 
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};