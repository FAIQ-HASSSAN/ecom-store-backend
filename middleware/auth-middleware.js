import jwt from 'jsonwebtoken'

// in middleware we have req , res and next where next is a handler
function verifyToken(req,res,next) {
    const token = req.header('authorization');
    if(!token){
        res.status(401).send({
            error : "Access Denied"
        })
    }
    try {
        const decodeToken = jwt.verify(token,"secretkey");
        // adding a custom property (user) to the req object so we dont need to decode token again and again
        req.user = decodeToken;
        next();
    } catch (error) {
        res.status(401).send({
            error : error
        })
    }
}

function isAdmin(req,res,next) {
    try {
        if(req.user && req.user.isAdmin){
            next();
        }
        else{
            throw new Error("access denied");
        }
    } catch (error) {
        res.status(401).send({
            error : error.message || "unauthorized"
        })
    }
}

export {verifyToken , isAdmin};