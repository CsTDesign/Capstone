import { Nav, Header, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Nav(store.Links, state)}
      ${Header(state)}
      ${Main(state)}
      ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".navMenu > ul").classList.toggle("hidden--mobile");
  });
  // suggest recipes based on ingredients selected
  if (state.view === "Recipes") {
    document.querySelector("#recipe-form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const ingredientList = event.target.elements;
      console.log("Input Element List", ingredientList);

      // Create empty array to hold ingredients selected
      const ingredients = [];

      // Iterate over ingredients selected
      for (let ingredient of ingredientList) {
        if (ingredient.checked) {
          ingredients.push(ingredient.value);
        }
      }

      // Create request body object to send to Spoonacular API
      const requestData = {
        diet: ingredientList.diet.value,
        alcohol: ingredientList.alcohol.value,
        bakingNeeds: ingredientList.bakingNeeds.value,
        bread: ingredientList.bread.value,
        cannedItems: ingredientList.cannedItems.value,
        condiments: ingredientList.condiments.value,
        cookingOil: ingredientList.cookingOil.value,
        dairy: ingredientList.dairy.value,
        dessert: ingredientList.dessert.value,
        dressing: ingredientList.dressing.value,
        drinks: ingredientList.drinks.value,
        fruit: ingredientList.fruit.value,
        grains: ingredientList.grains.value,
        meat: ingredientList.meat.value,
        nuts: ingredientList.nuts.value,
        saltyFoods: ingredientList.saltyFoods.value,
        seafood: ingredientList.seafood.value,
        seeds: ingredientList.seeds.value,
        soup: ingredientList.soup.value,
        spices: ingredientList.spices.value,
        supplements: ingredientList.supplements.value,
        sweeteners: ingredientList.sweeteners.value,
        vegetables: ingredientList.vegetables.value
      };
      // Log request body to console
      console.log("Request Body", requestData);

      axios
        // Make a POST request to the API to create a new recipe
        .post(`${process.env.SPOONACULAR_API_URL}/recipes`, requestData)
        .then(response => {
          //  Then push the new recipe onto the Recipe state recipes attribute, so it can be displayed in the recipe list
          store.Recipe.recipes.push(response.data);
          router.navigate("/Recipe");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      // Add a case for each view that needs data from an API
      case "Recipe":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.SPOONACULAR_API_URL}/recipes`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);
            store.Recipe.recipes = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
