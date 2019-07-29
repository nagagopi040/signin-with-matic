var express = require("express");
var cors = require("cors");
var http = require("http");
var jwt = require("jsonwebtoken");

var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.get("/user", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                ...authData,
            })
        }
    })
})

app.post("/auth/signin", (req, res) => {
    // Mock user
    const user = {
        name: "Dravid",
        phone: "9876543210",
        country: "India"
    }

    jwt.sign({ user }, "secretkey", (err, token) => {
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

// Format of token
// Authorization: Bearer <access_token>

// verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader && typeof bearerHeader !== undefined) {
        // Split at the space
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

http.createServer(app).listen(PORT, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> Node Server is running on port ${PORT}.`);
    }
})
