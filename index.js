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

      axios
        // Make a POST request to the API to  a new recipe
        .get(
          `${process.env.SPOONACULAR_API_URL}?apiKey=${process.env.SPOONACULAR_API_KEY}&ingredients=${ingredients}`
        )
        .then(response => {
          //  Then push the new recipe onto the Recipe state recipes attribute, so it can be displayed in the recipe list
          console.log("data", response.data);
          for (let item of response.data) {
            store.Recipes.recipes.push(item);
          }
          // store.Recipes.recipes.push(response.data);
          router.navigate("/Recipes");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  if (state.view === "Contact") {
    document.querySelector("#fs-frm").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const emailInputList = event.target.elements;
      console.log("Input Email Element List", emailInputList);

      // Create a request body object to send to Formspree
      const requestData = {
        fullName: emailInputList.fullName.value,
        emailAddress: emailInputList.emailAddress.value,
        message: emailInputList.message.value
      };

      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new contact
        .post(`${process.env.IMEALPREP_API_URL}/contacts`, requestData)
        .then(response => {
          // Then push the new contact onto the Contact state contacts attribute, so it can be displayed in the contact list
          store.Contact.contacts.push(response.data);
          router.navigate("/Contact");
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
