const app = new (require('express'))();
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 3000;

app.post("/auth/signin", (req, res) => {
    var { email, password } =  req.body;

    // Mock user
    const user = {
        username: "Dravid",
        phone: "9876543210",
        country: "India"
    }

    jwt.sign({user}, "secretkey", (err, token) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                token,
                message: "Signed in successfully, start playng. Enjoy!"
            });
        }
    });
})

app.get("/user", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                authData,
            })
        }
    })
})

// Format of token
// Authorization: Bearer <access_token>

// verify Token
function verifyToken(res, res, next) {
    // Get auth header value
    const bearerHeader = req.header["authorization"];

    if(typeof bearerHeader !== undefined){
        // Split at the space
        const bearer = bearerHeader.split(" ");
        const bearerToken =bearer[1];
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen(PORT, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> Node Server is running on port ${PORT}.`);
    }
})
