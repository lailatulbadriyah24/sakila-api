const jwt = require('jsonwebtoken');
const {secret} = require('../../config/jwt.json');

const authorizationMiddleWare = (allowedRoles) => {
    return(req, res, next) => {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({message: 'Unauthorized - Token not provided'});
        }

        jwt.verify(token, secret, (err, decoded) => {
            if(err){
                return res.status(401).json({message: 'Unauthorized - Invalid Token'});
            }

            req.user = decoded;
            const userRole =  req.user ? req.user.role : 'guest';
            console.log('oioi', userRole);

            if(allowedRoles.includes(userRole)){
                next();
            }else{
                res.status(403).json({message: 'Forbidden'});
            }
        });
    };
};

module.exports = authorizationMiddleWare;