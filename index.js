import axios, { all } from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const api_Url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static("public"));

let drinkIngredients = [];
let drinkMeasure = [];
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(api_Url);
    const random = response.data.drinks[0];
    res.render("index.ejs", {
      drinkName: random.strDrink,
      drinkCategory: random.strCategory,
      drinkMeasure: [
        random.strMeasure1,
        random.strMeasure2,
        random.strMeasure3,
        random.strMeasure4,
        random.strMeasure5,
        random.strMeasure6,
        random.strMeasure7,
        random.strMeasure8,
        random.strMeasure9,
        random.strMeasure10,
        random.strMeasure11,
        random.strMeasure12,
        random.strMeasure13,
        random.strMeasure14,
        random.strMeasure15,
      ],
      drinkIngredients: [
        random.strIngredient1,
        random.strIngredient2,
        random.strIngredient3,
        random.strIngredient4,
        random.strIngredient5,
        random.strIngredient6,
        random.strIngredient7,
        random.strIngredient8,
        random.strIngredient9,
        random.strIngredient10,
        random.strIngredient11,
        random.strIngredient12,
        random.strIngredient13,
        random.strIngredient14,
        random.strIngredient15,
      ],
      drinkInstructions: random.strInstructions,
      drinkImage: random.strDrinkThumb,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/submit", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
