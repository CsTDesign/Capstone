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
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create empty array to hold ingredients selected
      const ingredients = [];

      // Iterate over ingredients selected
      for (let input of inputList) {
        if (input.checked) {
          ingredients.push(input.value);
        }
      }
      console.log("Ingredients", ingredients);
      // Create request body object to send to Spoonacular API
      // const requestData = {
      //   diet: inputList.diet[0].value,
      //   alcohol: inputList.alcohol[0].value,
      //   bakingNeeds: inputList.bakingNeeds[0].value,
      //   bread: inputList.bread[0].value,
      //   cannedItems: inputList.cannedItems[0].value,
      //   condiments: inputList.condiments[0].value,
      //   cookingOil: inputList.cookingOil[0].value,
      //   dairy: inputList.dairy[0].value,
      //   dessert: inputList.dessert[0].value,
      //   dressing: inputList.dressing[0].value,
      //   drinks: inputList.drinks[0].value,
      //   fruit: inputList.fruit[0].value,
      //   grains: inputList.grains[0].value,
      //   meat: inputList.meat[0].value,
      //   nuts: inputList.nuts[0].value,
      //   saltyFoods: inputList.saltyFoods[0].value,
      //   seafood: inputList.seafood[0].value,
      //   seeds: inputList.seeds[0].value,
      //   soup: inputList.soup[0].value,
      //   spices: inputList.spices[0].value,
      //   supplements: inputList.supplements[0].value,
      //   sweeteners: inputList.sweeteners[0].value,
      //   vegetables: inputList.vegetables[0].value
      // };
      // Log request body to console
      // console.log("Request Body", requestData);

      axios
        // Make a POST request to the API to  a new recipe
        .get(
          `${process.env.SPOONACULAR_API_URL}?apiKey=${process.env.SPOONACULAR_API_KEY}&ingredients=${ingredients}`
        )
        .then(response => {
          //  Then push the new recipe onto the Recipe state recipes attribute, so it can be displayed in the recipe list
          console.log("data", response.data);
          store.Recipes.recipes.push(response.data);
          router.navigate("/Recipes");
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
