const express = require("express");
const router = express.Router();
const User = require("../storage/user");
const decorator = require("../pkg/routerDecorator");
const md5 = require("md5");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const NM = 'router.user';
const userNotFound = 'User Not Found';

/* 
create user
body - {
    username: String,
    password: String,
    name: String,
    age: Number
}
response (201): {
    id: String
}
*/
router.post("/api/v1/user", decorator(`${NM}.createUser`,
    async (req, res, next) => {
        let data = {
            ...req.body
        }

        const user = await User.createUser(data)
        res.json({
            message: 'success',
            data: user
        })
    }
));

/* 
update user
body - {
    id: String
    username: String,
    password: String,
    name: String,
    age: Number
}
response (200): {
    ok: true
}
*/
router.put("/api/v1/user/:id", decorator(`${NM}.updateUser`,
    async (req, res, next) => {
        //@TODO:: validate id
        let data = {
            ...req.body,
            id: req.params.id
        }

        const user = await User.updateUser(data)
        
        if (!user.ok) {
            res.json({
                message: 'failed',
                data: {error: userNotFound}
            })
            return
        }

        res.json({
            message: 'success',
            data: user
        })
    }
));

/* 
get user
param - {
    id: String
}
response (200): {
    
}
*/
router.get("/api/v1/user/:id", decorator(`${NM}.getSingleUser`,
    async (req, res, next) => {
        let data = {
            id: req.params.id
        }

        const user = await User.getSingleUser(data)
        if (!user) {
            res.json({
                message: 'failed',
                data: {error: userNotFound}
            })
            return
        }
        res.json({
            message: 'success',
            data: user
        })
    }
));

/* 
get user
query- {
    offset: Number,
    limit: Number,
    sort Enum('asc', 'desc')
}
response (200): {
    
}
*/
router.get("/api/v1/users", decorator(`${NM}.getListUser`,
    async (req, res, next) => {
        let data = {
            ...req.query
        }

        const users = await User.getListUser(data)
        res.json({
            message: 'success',
            data: users
        })
    }
));

/* 
get user
param- {
   id: String
}
response (200): {
    ok: true
}
*/
router.delete("/api/v1/user/:id", decorator(`${NM}.deleteUser`,
    async (req, res, next) => {
        let data = {
            id: req.params.id
        }

        const user = await User.deleteUser(data)
        if (!user.ok) {
            res.json({
                message: 'failed',
                data: {error: userNotFound}
            })
            return
        }

        res.json({
            message: 'success',
            data: user
        })
    }
));


module.exports = router;