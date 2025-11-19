let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect to our meal model
let Meal = require('../model/meal');


// GET route for displaying the data from DB --> Read Operation
router.get('/',async(req,res,next)=>{
    try{
        const MealList = await Meal.find();
        res.render('Meals/list',{
            title:'Meals',
            MealList:MealList
        })
    }
    catch(err)
    {
        console.log(err);
        res.render('Meals/list',
            {
                error:'Error on the Server'
            }
        )
    }
});

// GET route for displaying the Add Page --> Create Operation
router.get('/add',async(req,res,next)=>{
    try
    {
        res.render('Meals/add',{
            title:'Add Meal',
        });
    }
    catch(err)
    {
        console.log(err);
        res.render('Meals/list',
            {
                error:'Error on the Server'
            }
        )
    }
})

// POST route for processing the Add Page --> Create Operation
router.post('/add',async(req,res,next)=>{
    try
    {
        let newMeal = Meal({
            "meal":req.body.meal,
            "description":req.body.description,
            "portion":req.body.portion,
            "cals":req.body.cals,
            "protein":req.body.protein,
            "carbs":req.body.carbs,
            "fats":req.body.fats,
            "tags":req.body.tags
        })
        Meal.create(newMeal).then(()=>{
            res.redirect('/meals')
        });
    }
     catch(err)
    {
        console.log(err);
        res.render('Meals/list',
            {
                error:'Error on the Server'
            }
        )
    }
})

// GET route for displaying the Edit Page --> Update Operation
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        const mealToEdit = await Meal.findById(id);
        res.render("Meals/edit",
            {
                title: 'Edit Meal',
                Meal: mealToEdit,
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})

// POST route for processing the Edit Page --> Update Operation
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let updateMeal = Meal({
            "_id":id,
            "meal":req.body.meal,
            "description":req.body.description,
            "portion":req.body.portion,
            "cals":req.body.cals,
            "protein":req.body.protein,
            "carbs":req.body.carbs,
            "fats":req.body.fats,
            "tags":req.body.tags
        })
        Meal.findByIdAndUpdate(id,updateMeal).then(()=>{
            res.redirect("/meals")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }

})

// GET route to perform Delete Operation
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        Meal.deleteOne({_id:id}).then(()=>{
            res.redirect("/meals")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
    
})
module.exports = router;