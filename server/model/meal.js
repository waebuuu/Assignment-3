let mongoose = require('mongoose')

// create a model class
let mealModel = mongoose.Schema({
    meal: String,
    description: String,
    portion: Number,
    cals: Number,
    protein: Number,
    carbs: Number,
    fats: Number
},
{
    collection:"meals"
}
);

module.exports = mongoose.model('Meal',mealModel);