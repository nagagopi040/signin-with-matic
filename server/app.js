var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

const PORT = process.env.PORT || 8080;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/auth/signin", (req, res) => {
    // Mock user
    const user = {
        username: "Dravid",
        phone: "9876543210",
        country: "India"
    }

    jwt.sign({ user }, "secretkey", (err, token) => {
        if (err) {
            res.send(err);
        } else {
            console.log("hi");
            res.json({
                token,
                message: "Signed in successfully, start playng. Enjoy!"
            });
        }
    });
})

app.get("/user", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if (err) {
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

    if (typeof bearerHeader !== undefined) {
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

app.listen(PORT, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> Node Server is running on port ${PORT}.`);
    }
})
