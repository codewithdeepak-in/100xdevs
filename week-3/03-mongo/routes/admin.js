const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db');

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // check if a user with this username already exists
    const isUserExits =  await Admin.findOne({username: username});
    if(isUserExits) {
        res.json({ error: 'User with this username already exists'});
    }else{
        const admin = new Admin({
            username,
            password
        })
        await admin.save()
        res.json({ message: 'Admin created successfully'})
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully'
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const course = await Course.find({});
        res.json(course);
    }catch(err){
        res.status(404).json({
            error: err.message,
            status: 404
        });
    }

});

module.exports = router;