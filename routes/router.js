const router = require('express').Router();
const database = include('databaseConnection');
const dbModel = include('databaseAccessLayer');

router.get('/', async (req, res) => {
    console.log("Page hit");

    try {
        const result = await dbModel.getAllUsers();
        res.render('index', { allUsers: result });

        // Output the results of the query to the Heroku Logs
        console.log(result);
    } catch (err) {
        res.render('error', { message: 'Error reading from MySQL' });
        console.log("Error reading from MySQL");
    }
});

// ✅ Route to Add a User
router.post('/addUser', async (req, res) => {
    try {
        const success = await dbModel.addUser(req.body);
        if (success) {
            res.redirect("/");
        } else {
            res.render('error', { message: "Error writing to MySQL" });
        }
    } catch (err) {
        res.render('error', { message: "Error writing to MySQL" });
        console.log(err);
    }
});

// ✅ Route to Delete a User
router.get('/deleteUser', async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        const success = await dbModel.deleteUser(userId);
        if (success) {
            res.redirect("/");
        } else {
            res.render('error', { message: "Error writing to MySQL" });
        }
    }
});

module.exports = router;
