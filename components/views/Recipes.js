import html from "html-literal";
export default () => html`
  <main>
    <h2>RECIPE FINDER</h2>
    <p>
      No matter the diet or ingredients, iMealPrep can help make the search for
      delicious meal prep recipes easier.
    </p>
    <hr />
    <form id="recipe-form" action="https://api.spoonacular.com/recipes/findByIngredients" method="get">
      <fieldset class="recipe">
        <legend>Dietary Preferences</legend>
        <input
          type="checkbox"
          name="gluten-free"
          id="gluten-free"
          value="Gluten Free"
        />
        <label for="gluten-free">Gluten Free</label>
        <input
          type="checkbox"
          name="ketogenic"
          id="ketogenic"
          value="Ketogenic"
        />
        <label for="ketogenic">Ketogenic</label>
        <input
          type="checkbox"
          name="lacto-vegetarian"
          id="lacto-vegetarian"
          value="Lacto-Vegetarian"
        />
        <label for="lacto-vegetarian">Lacto-Vegetarian</label>
        <input
          type="checkbox"
          name="low-fodmap"
          id="low-fodmap"
          value="Low FODMAP"
        />
        <label for="low-fodmap">Low FODMAP</label>
        <input
          type="checkbox"
          name="ovo-vegetarian"
          id="ovo-vegetarian"
          value="Ovo-Vegetarian"
        />
        <label for="ovo-vegetarian">Ovo-Vegetarian</label>
        <input type="checkbox" name="paleo" id="paleo" value="Paleo" />
        <label for="paleo">Paleo</label>
        <input
          type="checkbox"
          name="pescetarian"
          id="pescetarian"
          value="Pescetarian"
        />
        <label for="pescetarian">Pescetarian</label>
        <input type="checkbox" name="primal" id="primal" value="Primal" />
        <label for="primal">Primal</label>
        <input type="checkbox" name="vegan" id="vegan" value="Vegan" />
        <label for="vegan">Vegan</label>
        <input
          type="checkbox"
          name="vegetarian"
          id="vegetarian"
          value="Vegetarian"
        />
        <label for="vegetarian">Vegetarian</label>
        <input type="checkbox" name="whole-30" id="whole-30" value="Whole 30" />
        <label for="whole-30">Whole 30</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Alcohol</legend>
        <input type="checkbox" name="absinthe" id="absinthe" value="Absinthe" />
        <label for="absinthe">Absinthe</label>
        <input type="checkbox" name="amaretto" id="amaretto" value="Amaretto" />
        <label for="amaretto">Amaretto</label>
        <input type="checkbox" name="aperol" id="aperol" value="Aperol" />
        <label for="aperol">Aperol</label>
        <input type="checkbox" name="armagnac" id="armagnac" value="Armagnac" />
        <label for="armagnac">Armagnac</label>
        <input type="checkbox" name="beer" id="beer" value="Beer" />
        <label for="beer">Beer</label>
        <input
          type="checkbox"
          name="benedictine"
          id="benedictine"
          value="B&#233;n&#233;dictine"
        />
        <label for="benedictine">B&#233;n&#233;dictine</label>
        <input type="checkbox" name="bitters" id="bitters" value="Bitters" />
        <label for="bitters">Bitters</label>
        <input
          type="checkbox"
          name="bloody-mary-mix"
          id="bloody-mary-mix"
          value="Bloody Mary Mix"
        />
        <label for="bloody-mary-mix">Bloody Mary Mix</label>
        <input type="checkbox" name="brandy" id="brandy" value="Brandy" />
        <label for="brandy">Brandy</label>
        <input
          type="checkbox"
          name="cachaca"
          id="cachaca"
          value="Cacha&#231;a"
        />
        <label for="cachaca">Cacha&#231;a</label>
        <input
          type="checkbox"
          name="champagne"
          id="champagne"
          value="Champagne"
        />
        <label for="champagne">Champagne</label>
        <input type="checkbox" name="cider" id="cider" value="Cider" />
        <label for="cider">Cider</label>
        <input type="checkbox" name="cognac" id="cognac" value="Cognac" />
        <label for="cognac">Cognac</label>
        <input
          type="checkbox"
          name="cooking-wine"
          id="cooking-wine"
          value="Cooking Wine"
        />
        <label for="cooking-wine">Cooking Wine</label>
        <input type="checkbox" name="cordial" id="cordial" value="Cordial" />
        <label for="cordial">Cordial</label>
        <input
          type="checkbox"
          name="creme-de-menthe"
          id="creme-de-menthe"
          value="Cr&#232;me de Menthe"
        />
        <label for="creme-de-menthe">Cr&#232;me de Menthe</label>
        <input
          type="checkbox"
          name="curacao"
          id="curacao"
          value="Cura&#231;ao"
        />
        <label for="curacao">Cura&#231;ao</label>
        <input
          type="checkbox"
          name="daiquiri-mix"
          id="daiquiri-mix"
          value="Daiquiri Mix"
        />
        <label for="daiquiri-mix">Daiquiri Mix</label>
        <input type="checkbox" name="gin" id="gin" value="Gin" />
        <label for="gin">Gin</label>
        <input type="checkbox" name="grappa" id="grappa" value="Grappa" />
        <label for="grappa">Grappa</label>
        <input
          type="checkbox"
          name="irish-cream"
          id="irish-cream"
          value="Irish Cream"
        />
        <label for="irish-cream">Irish Cream</label>
        <input
          type="checkbox"
          name="kirschwasser"
          id="kirschwasser"
          value="Kirschwasser"
        />
        <label for="kirschwasser">Kirschwasser</label>
        <input type="checkbox" name="liqueur" id="liqueur" value="Liqueur" />
        <label for="liqueur">Liqueur</label>
        <input type="checkbox" name="mezcal" id="mezcal" value="Mezcal" />
        <label for="mezcal">Mezcal</label>
        <input
          type="checkbox"
          name="moonshine"
          id="moonshine"
          value="Moonshine"
        />
        <label for="moonshine">Moonshine</label>
        <input
          type="checkbox"
          name="pina-colada-mix"
          id="pina-colada-mix"
          value="Pi&#241;a Colada Mix"
        />
        <label for="pina-colada-mix">Pi&#241;a Colada Mix</label>
        <input
          type="checkbox"
          name="port-wine"
          id="port-wine"
          value="Port Wine"
        />
        <label for="port-wine">Port Wine</label>
        <input type="checkbox" name="prosecco" id="prosecco" value="Prosecco" />
        <label for="prosecco">Prosecco</label>
        <input
          type="checkbox"
          name="rice-wine"
          id="rice-wine"
          value="Rice Wine"
        />
        <label for="rice-wine">Rice Wine</label>
        <input type="checkbox" name="rose" id="rose" value="Ros&#233;" />
        <label for="rose">Ros&#233;</label>
        <input type="checkbox" name="rum" id="rum" value="Rum" />
        <label for="rum">Rum</label>
        <input type="checkbox" name="sake" id="sake" value="Sake" />
        <label for="sake">Sake</label>
        <input type="checkbox" name="sangria" id="sangria" value="Sangria" />
        <label for="sangria">Sangria</label>
        <input type="checkbox" name="schnapps" id="schnapps" value="Schnapps" />
        <label for="schnapps">Schnapps</label>
        <input type="checkbox" name="sherry" id="sherry" value="Sherry" />
        <label for="sherry">Sherry</label>
        <input type="checkbox" name="tequila" id="tequila" value="Tequila" />
        <label for="tequila">Tequila</label>
        <input type="checkbox" name="vermouth" id="vermouth" value="Vermouth" />
        <label for="vermouth">Vermouth</label>
        <input type="checkbox" name="vodka" id="vodka" value="Vodka" />
        <label for="vodka">Vodka</label>
        <input type="checkbox" name="whiskey" id="whiskey" value="Whiskey" />
        <label for="whiskey">Whiskey</label>
        <input type="checkbox" name="wine" id="wine" value="Wine" />
        <label for="wine">Wine</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Baking Needs</legend>
        <input type="checkbox" name="agar-gum" id="agar-gum" value="Agar Gum" />
        <label for="agar-gum">Agar Gum</label>
        <input
          type="checkbox"
          name="baking-chips"
          id="baking-chips"
          value="Baking Chips"
        />
        <label for="baking-chips">Baking Chips</label>
        <input
          type="checkbox"
          name="baking-powder"
          id="baking-powder"
          value="Baking Powder"
        />
        <label for="baking-powder">Baking Powder</label>
        <input
          type="checkbox"
          name="baking-soda"
          id="baking-soda"
          value="Baking Soda"
        />
        <label for="baking-soda">Baking Soda</label>
        <input
          type="checkbox"
          name="biscuit-dough"
          id="biscuit-dough"
          value="Biscuit Dough"
        />
        <label for="biscuit-dough">Biscuit Dough</label>
        <input
          type="checkbox"
          name="buckwheat"
          id="buckwheat"
          value="Buckwheat"
        />
        <label for="buckwheat">Buckwheat</label>
        <input type="checkbox" name="cake-mix" id="cake-mix" value="Cake Mix" />
        <label for="cake-mix">Cake Mix</label>
        <input
          type="checkbox"
          name="carob-bean-gum"
          id="carob-bean-gum"
          value="Carob Bean Gum"
        />
        <label for="carob-bean-gum">Carob Bean Gum</label>
        <input
          type="checkbox"
          name="chocolate-chips"
          id="chocolate-chips"
          value="Chocolate Chips"
        />
        <label for="chocolate-chips">Chocolate Chips</label>
        <input
          type="checkbox"
          name="cookie-dough"
          id="cookie-dough"
          value="Cookie Dough"
        />
        <label for="cookie-dough">Cookie Dough</label>
        <input
          type="checkbox"
          name="cookie-mix"
          id="cookie-mix"
          value="Cookie Mix"
        />
        <label for="cookie-mix">Cookie Mix</label>
        <input
          type="checkbox"
          name="corn-starch"
          id="corn-starch"
          value="Corn Starch"
        />
        <label for="corn-starch">Corn Starch</label>
        <input type="checkbox" name="cornmeal" id="cornmeal" value="Cornmeal" />
        <label for="cornmeal">Cornmeal</label>
        <input
          type="checkbox"
          name="cream-of-tartar"
          id="cream-of-tartar"
          value="Cream of Tartar"
        />
        <label for="cream-of-tartar">Cream of Tartar</label>
        <input
          type="checkbox"
          name="dumpling-wrapper"
          id="dumpling-wrapper"
          value="Dumpling Wrapper"
        />
        <label for="dumpling-wrapper">Dumpling Wrapper</label>
        <input
          type="checkbox"
          name="egg-roll-wrapper"
          id="egg-roll-wrapper"
          value="Egg Roll Wrapper"
        />
        <label for="egg-roll-wrapper">Egg Roll Wrapper</label>
        <input type="checkbox" name="egg-wrap" id="egg-wrap" value="Egg Wrap" />
        <label for="egg-wrap">Egg Wrap</label>
        <input
          type="checkbox"
          name="flaxseed-meal"
          id="flaxseed-meal"
          value="Flaxseed Meal"
        />
        <label for="flaxseed-meal">Flaxseed Meal</label>
        <input type="checkbox" name="flour" id="flour" value="Flour" />
        <label for="flour">Flour</label>
        <input
          type="checkbox"
          name="gelatin"
          id="gelatin"
          value="Gelatin &#40;Jell-O&#41;"
        />
        <label for="gelatin">Gelatin &#40;Jell-O&#41;</label>
        <input type="checkbox" name="guar-gum" id="guar-gum" value="Guar Gum" />
        <label for="guar-gum">Guar Gum</label>
        <input
          type="checkbox"
          name="meringue-powder"
          id="meringue-powder"
          value="Meringue Powder"
        />
        <label for="meringue-powder">Meringue Powder</label>
        <input type="checkbox" name="millet" id="millet" value="Millet" />
        <label for="millet">Millet</label>
        <input
          type="checkbox"
          name="muffin-mix"
          id="muffin-mix"
          value="Muffin Mix"
        />
        <label for="muffin-mix">Muffin Mix</label>
        <input
          type="checkbox"
          name="pancake-mix"
          id="pancake-mix"
          value="Pancake Mix"
        />
        <label for="pancake-mix">Pancake Mix</label>
        <input type="checkbox" name="pectin" id="pectin" value="Pectin" />
        <label for="pectin">Pectin</label>
        <input
          type="checkbox"
          name="pie-crust"
          id="pie-crust"
          value="Pie Crust"
        />
        <label for="pie-crust">Pie Crust</label>
        <input
          type="checkbox"
          name="pizza-dough"
          id="pizza-dough"
          value="Pizza Dough"
        />
        <label for="pizza-dough">Pizza Dough</label>
        <input
          type="checkbox"
          name="potato-starch"
          id="potato-starch"
          value="Potato Starch"
        />
        <label for="potato-starch">Potato Starch</label>
        <input
          type="checkbox"
          name="psyllium-husk"
          id="psyllium-husk"
          value=""
        />
        <label for="psyllium-husk">Psyllium Husk</label>
        <input
          type="checkbox"
          name="puff-pastry"
          id="puff-pastry"
          value="Puff Pastry"
        />
        <label for="puff-pastry">Puff Pastry</label>
        <input
          type="checkbox"
          name="rice-flour"
          id="rice-flour"
          value="Rice Flour"
        />
        <label for="rice-flour">Rice Flour</label>
        <input
          type="checkbox"
          name="rice-paper"
          id="rice-paper"
          value="Rice Paper"
        />
        <label for="rice-paper">Rice Paper</label>
        <input
          type="checkbox"
          name="sourdough-starter"
          id="sourdough-starter"
          value="Sourdough Starter"
        />
        <label for="sourdough-starter">Sourdough Starter</label>
        <input type="checkbox" name="spelt" id="spelt" value="Spelt" />
        <label for="spelt">Spelt</label>
        <input
          type="checkbox"
          name="sprinkles"
          id="sprinkles"
          value="Sprinkles"
        />
        <label for="sprinkles">Sprinkles</label>
        <input
          type="checkbox"
          name="tapioca-starch"
          id="tapioca-starch"
          value="Tapioca Starch"
        />
        <label for="tapioca-starch">Tapioca Starch</label>
        <input
          type="checkbox"
          name="tortilla-dough"
          id="tortilla-dough"
          value="Tortilla Dough"
        />
        <label for="tortilla-dough">Tortilla Dough</label>
        <input
          type="checkbox"
          name="vital-wheat-gluten"
          id="vital-wheat-gluten"
          value="Vital Wheat Gluten"
        />
        <label for="vital-wheat-gluten">Vital Wheat Gluten</label>
        <input
          type="checkbox"
          name="whipped-cream-stabilizer"
          id="whipped-cream-stabilizer"
          value="Whipped Cream Stabilizer"
        />
        <label for="whipped-cream-stabilizer">Whipped Cream Stabilizer</label>
        <input type="checkbox" name="wonton" id="wonton" value="Wonton" />
        <label for="wonton">Wonton</label>
        <input
          type="checkbox"
          name="xanthan-gum"
          id="xanthan-gum"
          value="Xanthan Gum"
        />
        <label for="xanthan-gum">Xanthan Gum</label>
        <input type="checkbox" name="yeast" id="yeast" value="Yeast" />
        <label for="yeast">Yeast</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Bread</legend>
        <input
          type="checkbox"
          name="artisan-roll"
          id="artisan-roll"
          value="Artisan Roll"
        />
        <label for="artisan-roll">Artisan Roll</label>
        <input type="checkbox" name="bagel" id="bagel" value="Bagel" />
        <label for="bagel">Bagel</label>
        <input type="checkbox" name="baguette" id="baguette" value="Baguette" />
        <label for="baguette">Baguette</label>
        <input type="checkbox" name="brioche" id="brioche" value="Brioche" />
        <label for="brioche">Brioche</label>
        <input type="checkbox" name="challah" id="challah" value="Challah" />
        <label for="challah">Challah</label>
        <input
          type="checkbox"
          name="croissant"
          id="croissant"
          value="Croissant"
        />
        <label for="croissant">Croissant</label>
        <input type="checkbox" name="ezekiel" id="ezekiel" value="Ezekiel" />
        <label for="ezekiel">Ezekiel</label>
        <input
          type="checkbox"
          name="flatbread"
          id="flatbread"
          value="Flatbread"
        />
        <label for="flatbread">Flatbread</label>
        <input type="checkbox" name="focaccia" id="focaccia" value="Focaccia" />
        <label for="focaccia">Focaccia</label>
        <input
          type="checkbox"
          name="garlic-bread"
          id="garlic-bread"
          value="Garlic Bread"
        />
        <label for="garlic-bread">Garlic Bread</label>
        <input
          type="checkbox"
          name="hawaiian-roll"
          id="hawaiian-roll"
          value="Hawaiian Roll"
        />
        <label for="hawaiian-roll">Hawaiian Roll</label>
        <input
          type="checkbox"
          name="italian-bread"
          id="italian-bread"
          value="Italian Bread"
        />
        <label for="italian-bread">Italian Bread</label>
        <input
          type="checkbox"
          name="milk-bread"
          id="milk-bread"
          value="Milk Bread"
        />
        <label for="milk-bread">Milk Bread</label>
        <input type="checkbox" name="muffin" id="muffin" value="Muffin" />
        <label for="muffin">Muffin</label>
        <input
          type="checkbox"
          name="pita-bread"
          id="pita-bread"
          value="Pita Bread"
        />
        <label for="pita-bread">Pita Bread</label>
        <input
          type="checkbox"
          name="potato-bread"
          id="potato-bread"
          value="Potato Bread"
        />
        <label for="potato-bread">Potato Bread</label>
        <input
          type="checkbox"
          name="pretzel-bun"
          id="pretzel-bun"
          value="Pretzel Bun"
        />
        <label for="pretzel-bun">Pretzel Bun</label>
        <input
          type="checkbox"
          name="pumpernickel"
          id="pumpernickel"
          value="Pumpernickel"
        />
        <label for="pumpernickel">Pumpernickel</label>
        <input type="checkbox" name="roti" id="roti" value="Roti" />
        <label for="roti">Roti</label>
        <input
          type="checkbox"
          name="rye-bread"
          id="rye-bread"
          value="Rye Bread"
        />
        <label for="rye-bread">Rye Bread</label>
        <input
          type="checkbox"
          name="seed-bread"
          id="seed-bread"
          value="Seed Bread"
        />
        <label for="seed-bread">Seed Bread</label>
        <input
          type="checkbox"
          name="sourdough-bread"
          id="sourdough-bread"
          value="Sourdough Bread"
        />
        <label for="sourdough-bread">Sourdough Bread</label>
        <input
          type="checkbox"
          name="sprouted-bread"
          id="sprouted-bread"
          value="Sprouted Bread"
        />
        <label for="sprouted-bread">Sprouted Bread</label>
        <input
          type="checkbox"
          name="sweet-bread"
          id="sweet-bread"
          value="Sweet Bread"
        />
        <label for="sweet-bread">Sweet Bread</label>
        <input
          type="checkbox"
          name="wheat-bread"
          id="wheat-bread"
          value="Wheat Bread"
        />
        <label for="wheat-bread">Wheat Bread</label>
        <input
          type="checkbox"
          name="white-bread"
          id="white-bread"
          value="White Bread"
        />
        <label for="white-bread">White Bread</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Canned Items</legend>
        <input
          type="checkbox"
          name="baked-beans"
          id="baked-beans"
          value="Baked Beans"
        />
        <label for="baked-beans">Baked Beans</label>
        <input
          type="checkbox"
          name="black-olives"
          id="black-olives"
          value="Black Olives"
        />
        <label for="black-olives">Black Olives</label>
        <input
          type="checkbox"
          name="candied-jalapeno"
          id="candied-jalapeno"
          value="Candied Jalape&#241;o"
        />
        <label for="candied-jalapeno">Candied Jalape&#241;o</label>
        <input
          type="checkbox"
          name="canned-anchovy"
          id="canned-anchovy"
          value="Canned Anchovy"
        />
        <label for="canned-anchovy">Canned Anchovy</label>
        <input
          type="checkbox"
          name="canned-apple"
          id="canned-apple"
          value="Canned Apple"
        />
        <label for="canned-apple">Canned Apple</label>
        <input
          type="checkbox"
          name="canned-apricot"
          id="canned-apricot"
          value="Canned Apricot"
        />
        <label for="canned-apricot">Canned Apricot</label>
        <input
          type="checkbox"
          name="canned-artichoke"
          id="canned-artichoke"
          value="Canned Artichoke"
        />
        <label for="canned-artichoke">Canned Artichoke</label>
        <input
          type="checkbox"
          name="canned-asparagus"
          id="canned-asparagus"
          value="Canned Asparagus"
        />
        <label for="canned-asparagus">Canned Asparagus</label>
        <input
          type="checkbox"
          name="canned-beans"
          id="canned-beans"
          value="Canned Beans"
        />
        <label for="canned-beans">Canned Beans</label>
        <input
          type="checkbox"
          name="canned-black-eyed-peas"
          id="canned-black-eyed-peas"
          value="Canned Black-Eyed Peas"
        />
        <label for="canned-black-eyed-peas">Canned Black-Eyed Peas</label>
        <input
          type="checkbox"
          name="canned-carrot"
          id="canned-carrot"
          value="Canned Carrot"
        />
        <label for="canned-carrot">Canned Carrot</label>
        <input
          type="checkbox"
          name="canned-cherry"
          id="canned-cherry"
          value="Canned Cherry"
        />
        <label for="canned-cherry">Canned Cherry</label>
        <input
          type="checkbox"
          name="canned-chicken"
          id="canned-chicken"
          value="Canned Chicken"
        />
        <label for="canned-chicken">Canned Chicken</label>
        <input
          type="checkbox"
          name="canned-chickpeas"
          id="canned-chickpeas"
          value="Canned Chickpeas"
        />
        <label for="canned-chickpeas">Canned Chickpeas</label>
        <input
          type="checkbox"
          name="canned-corn"
          id="canned-corn"
          value="Canned Corn"
        />
        <label for="canned-corn">Canned Corn</label>
        <input
          type="checkbox"
          name="canned-green-beans"
          id="canned-green-beans"
          value="Canned Green Beans"
        />
        <label for="canned-green-beans">Canned Green Beans</label>
        <input
          type="checkbox"
          name="canned-mandarin-orange"
          id="canned-mandarin-orange"
          value="Canned Mandarin Orange"
        />
        <label for="canned-mandarin-orange">Canned Mandarin Orange</label>
        <input
          type="checkbox"
          name="canned-mushroom"
          id="canned-mushroom"
          value="Canned Mushroom"
        />
        <label for="canned-mushroom">Canned Mushroom</label>
        <input
          type="checkbox"
          name="canned-peach"
          id="canned-peach"
          value="Canned Peach"
        />
        <label for="canned-peach">Canned Peach</label>
        <input
          type="checkbox"
          name="canned-peas"
          id="canned-peas"
          value="Canned Peas"
        />
        <label for="canned-peas">Canned Peas</label>
        <input
          type="checkbox"
          name="canned-pie-filling"
          id="canned-pie-filling"
          value="Canned Pie Filling"
        />
        <label for="canned-pie-filling">Canned Pie Filling</label>
        <input
          type="checkbox"
          name="canned-pineapple"
          id="canned-pineapple"
          value="Canned Pineapple"
        />
        <label for="canned-pineapple">Canned Pineapple</label>
        <input
          type="checkbox"
          name="canned-potato"
          id="canned-potato"
          value="Canned Potato"
        />
        <label for="canned-potato">Canned Potato</label>
        <input
          type="checkbox"
          name="canned-pumpkin"
          id="canned-pumpkin"
          value="Canned Pumpkin"
        />
        <label for="canned-pumpkin">Canned Pumpkin</label>
        <input
          type="checkbox"
          name="canned-sardines"
          id="canned-sardines"
          value="Canned Sardines"
        />
        <label for="canned-sardines">Canned Sardines</label>
        <input
          type="checkbox"
          name="canned-sweet-potato"
          id="canned-sweet-potato"
          value="Canned Sweet Potato"
        />
        <label for="canned-sweet-potato">Canned Sweet Potato</label>
        <input
          type="checkbox"
          name="canned-tomato"
          id="canned-tomato"
          value="Canned Tomato"
        />
        <label for="canned-tomato">Canned Tomato</label>
        <input
          type="checkbox"
          name="canned-tuna"
          id="canned-tuna"
          value="Canned Tuna"
        />
        <label for="canned-tuna">Canned Tuna</label>
        <input
          type="checkbox"
          name="canned-yam"
          id="canned-yam"
          value="Canned Yam"
        />
        <label for="canned-yam">Canned Yam</label>
        <input type="checkbox" name="capers" id="capers" value="Capers" />
        <label for="capers">Capers</label>
        <input
          type="checkbox"
          name="chili-beans"
          id="chili-beans"
          value="Chili Beans"
        />
        <label for="chili-beans">Chili Beans</label>
        <input
          type="checkbox"
          name="chipotle-in-adobo-sauce"
          id="chipotle-in-adobo-sauce"
          value="Chipotle in Adobo Sauce"
        />
        <label for="chipotle-in-adobo-sauce">Chipotle in Adobo Sauce</label>
        <input
          type="checkbox"
          name="corn-relish"
          id="corn-relish"
          value="Corn Relish"
        />
        <label for="corn-relish">Corn Relish</label>
        <input
          type="checkbox"
          name="corned-beef"
          id="corned-beef"
          value="Corned Beef"
        />
        <label for="corned-beef">Corned Beef</label>
        <input
          type="checkbox"
          name="creamed-corn"
          id="creamed-corn"
          value="Creamed Corn"
        />
        <label for="creamed-corn">Creamed Corn</label>
        <input
          type="checkbox"
          name="diced-green-chiles"
          id="diced-green-chiles"
          value="Diced Green Chiles"
        />
        <label for="diced-green-chiles">Diced Green Chiles</label>
        <input
          type="checkbox"
          name="dill-pickle-relish"
          id="dill-pickle-relish"
          value="Dill Pickle Relish"
        />
        <label for="dill-pickle-relish">Dill Pickle Relish</label>
        <input
          type="checkbox"
          name="fruit-cocktail"
          id="fruit-cocktail"
          value="Fruit Cocktail"
        />
        <label for="fruit-cocktail">Fruit Cocktail</label>
        <input
          type="checkbox"
          name="green-olives"
          id="green-olives"
          value="Green Olives"
        />
        <label for="green-olives">Green Olives</label>
        <input
          type="checkbox"
          name="kalamata-olives"
          id="kalamata-olives"
          value="Kalamata Olives"
        />
        <label for="kalamata-olives">Kalamata Olives</label>
        <input
          type="checkbox"
          name="maraschino-cherry"
          id="maraschino-cherry"
          value="Maraschino Cherry"
        />
        <label for="maraschino-cherry">Maraschino Cherry</label>
        <input
          type="checkbox"
          name="onion-paste"
          id="onion-paste"
          value="Onion Paste"
        />
        <label for="onion-paste">Onion Paste</label>
        <input type="checkbox" name="pickle" id="pickle" value="Pickle" />
        <label for="pickle">Pickle</label>
        <input
          type="checkbox"
          name="pickle-juice"
          id="pickle-juice"
          value="Pickle Juice"
        />
        <label for="pickle-juice">Pickle Juice</label>
        <input
          type="checkbox"
          name="pickled-beet"
          id="pickled-beet"
          value="Pickled Beet"
        />
        <label for="pickled-beet">Pickled Beet</label>
        <input
          type="checkbox"
          name="pickled-ginger"
          id="pickled-ginger"
          value="Pickled Ginger"
        />
        <label for="pickled-ginger">Pickled Ginger</label>
        <input
          type="checkbox"
          name="pickled-onion"
          id="pickled-onion"
          value="Pickled Onion"
        />
        <label for="pickled-onion">Pickled Onion</label>
        <input
          type="checkbox"
          name="pickled-peppers"
          id="pickled-peppers"
          value="Pickled Peppers"
        />
        <label for="pickled-peppers">Pickled Peppers</label>
        <input
          type="checkbox"
          name="pork-beans"
          id="pork-beans"
          value="Pork & Beans"
        />
        <label for="pork-beans">Pork & Beans</label>
        <input
          type="checkbox"
          name="refried-beans"
          id="refried-beans"
          value="Refried Beans"
        />
        <label for="refried-beans">Refried Beans</label>
        <input type="checkbox" name="relish" id="relish" value="Relish" />
        <label for="relish">Relish</label>
        <input
          type="checkbox"
          name="sauerkraut"
          id="sauerkraut"
          value="Sauerkraut"
        />
        <label for="sauerkraut">Sauerkraut</label>
        <input type="checkbox" name="spam" id="spam" value="Spam" />
        <label for="spam">Spam</label>
        <input
          type="checkbox"
          name="sun-dried-tomatoes-in-oil"
          id="sun-dried-tomatoes-in-oil"
          value="Sun-Dried Tomatoes in Oil"
        />
        <label for="sun-dried-tomatoes-in-oil">Sun-Dried Tomatoes in Oil</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Condiments, Sauces, Spreads, & Dips</legend>
        <input
          type="checkbox"
          name="alfredo-sauce"
          id="alfredo-sauce"
          value="Alfredo Sauce"
        />
        <label for="alfredo-sauce">Alfredo Sauce</label>
        <input
          type="checkbox"
          name="bacon-jam"
          id="bacon-jam"
          value="Bacon Jam"
        />
        <label for="bacon-jam">Bacon Jam</label>
        <input
          type="checkbox"
          name="balsamic-glaze"
          id="balsamic-glaze"
          value="Balsamic Glaze"
        />
        <label for="balsamic-glaze">Balsamic Glaze</label>
        <input
          type="checkbox"
          name="barbecue-sauce"
          id="barbecue-sauce"
          value="Barbecue Sauce"
        />
        <label for="barbecue-sauce">Barbecue Sauce</label>
        <input type="checkbox" name="bean-dip" id="bean-dip" value="Bean Dip" />
        <label for="bean-dip">Bean Dip</label>
        <input
          type="checkbox"
          name="bechamel"
          id="bechamel"
          value="B&#233;chamel"
        />
        <label for="bechamel">B&#233;chamel</label>
        <input
          type="checkbox"
          name="bolognese-sauce"
          id="bolognese-sauce"
          value="Bolognese Sauce"
        />
        <label for="bolognese-sauce">Bolognese Sauce</label>
        <input
          type="checkbox"
          name="brown-mustard"
          id="brown-mustard"
          value="Brown Mustard"
        />
        <label for="brown-mustard">Brown Mustard</label>
        <input
          type="checkbox"
          name="buffalo-sauce"
          id="buffalo-sauce"
          value="Buffalo Sauce"
        />
        <label for="buffalo-sauce">Buffalo Sauce</label>
        <input
          type="checkbox"
          name="butter-chicken"
          id="butter-chicken"
          value="Butter Chicken"
        />
        <label for="butter-chicken">Butter Chicken</label>
        <input
          type="checkbox"
          name="chamoy-sauce"
          id="chamoy-sauce"
          value="Chamoy Sauce"
        />
        <label for="chamoy-sauce">Chamoy Sauce</label>
        <input
          type="checkbox"
          name="cheese-dip"
          id="cheese-dip"
          value="Cheese Dip"
        />
        <label for="cheese-dip">Cheese Dip</label>
        <input
          type="checkbox"
          name="cheese-spread"
          id="cheese-spread"
          value="Cheese Spread"
        />
        <label for="cheese-spread">Cheese Spread</label>
        <input
          type="checkbox"
          name="chili-paste"
          id="chili-paste"
          value="Chili Paste"
        />
        <label for="chili-paste">Chili Paste</label>
        <input
          type="checkbox"
          name="chili-sauce"
          id="chili-sauce"
          value="Chili Sauce"
        />
        <label for="chili-sauce">Chili Sauce</label>
        <input
          type="checkbox"
          name="chimichurri-sauce"
          id="chimichurri-sauce"
          value="Chimichurri Sauce"
        />
        <label for="chimichurri-sauce">Chimichurri Sauce</label>
        <input type="checkbox" name="chutney" id="chutney" value="Chutney" />
        <label for="chutney">Chutney</label>
        <input
          type="checkbox"
          name="cocktail-sauce"
          id="cocktail-sauce"
          value="Cocktail Sauce"
        />
        <label for="cocktail-sauce">Cocktail Sauce</label>
        <input
          type="checkbox"
          name="coconut-aminos"
          id="coconut-aminos"
          value="Coconut Aminos"
        />
        <label for="coconut-aminos">Coconut Aminos</label>
        <input
          type="checkbox"
          name="corn-salsa"
          id="corn-salsa"
          value="Corn Salsa"
        />
        <label for="corn-salsa">Corn Salsa</label>
        <input
          type="checkbox"
          name="crab-paste"
          id="crab-paste"
          value="Crab Paste"
        />
        <label for="crab-paste">Crab Paste</label>
        <input
          type="checkbox"
          name="cranberry-sauce"
          id="cranberry-sauce"
          value="Cranberry Sauce"
        />
        <label for="cranberry-sauce">Cranberry Sauce</label>
        <input
          type="checkbox"
          name="crisp-onion-spread"
          id="crisp-onion-spread"
          value="Crisp Onion Spread"
        />
        <label for="crisp-onion-spread">Crisp Onion Spread</label>
        <input
          type="checkbox"
          name="deviled-ham"
          id="deviled-ham"
          value="Deviled Ham"
        />
        <label for="deviled-ham">Deviled Ham</label>
        <input
          type="checkbox"
          name="dijon-mustard"
          id="dijon-mustard"
          value="Dijon Mustard"
        />
        <label for="dijon-mustard">Dijon Mustard</label>
        <input
          type="checkbox"
          name="duck-sauce"
          id="duck-sauce"
          value="Duck Sauce"
        />
        <label for="duck-sauce">Duck Sauce</label>
        <input
          type="checkbox"
          name="enchilada-sauce"
          id="enchilada-sauce"
          value="Enchilada Sauce"
        />
        <label for="enchilada-sauce">Enchilada Sauce</label>
        <input
          type="checkbox"
          name="fish-sauce"
          id="fish-sauce"
          value="Fish Sauce"
        />
        <label for="fish-sauce">Fish Sauce</label>
        <input
          type="checkbox"
          name="french-onion-dip"
          id="french-onion-dip"
          value="French Onion Dip"
        />
        <label for="french-onion-dip">French Onion Dip</label>
        <input
          type="checkbox"
          name="garlic-butter"
          id="garlic-butter"
          value="Garlic Butter"
        />
        <label for="garlic-butter">Garlic Butter</label>
        <input
          type="checkbox"
          name="garlic-paste"
          id="garlic-paste"
          value="Garlic Paste"
        />
        <label for="garlic-paste">Garlic Paste</label>
        <input
          type="checkbox"
          name="giardiniera"
          id="giardiniera"
          value="Giardiniera"
        />
        <label for="giardiniera">Giardiniera</label>
        <input
          type="checkbox"
          name="ginger-paste"
          id="ginger-paste"
          value="Ginger Paste"
        />
        <label for="ginger-paste">Ginger Paste</label>
        <input
          type="checkbox"
          name="gochujang"
          id="gochujang"
          value="Gochujang"
        />
        <label for="gochujang">Gochujang</label>
        <input
          type="checkbox"
          name="grape-must"
          id="grape-must"
          value="Grape Must"
        />
        <label for="grape-must">Grape Must</label>
        <input type="checkbox" name="gravy" id="gravy" value="Gravy" />
        <label for="gravy">Gravy</label>
        <input
          type="checkbox"
          name="guacamole"
          id="guacamole"
          value="Guacamole"
        />
        <label for="guacamole">Guacamole</label>
        <input type="checkbox" name="hoisin" id="hoisin" value="Hoisin" />
        <label for="hoisin">Hoisin</label>
        <input
          type="checkbox"
          name="hollandaise"
          id="hollandaise"
          value="Hollandaise"
        />
        <label for="hollandaise">Hollandaise</label>
        <input
          type="checkbox"
          name="honey-mustard"
          id="honey-mustard"
          value="Honey Mustard"
        />
        <label for="honey-mustard">Honey Mustard</label>
        <input
          type="checkbox"
          name="horseradish-sauce"
          id="horseradish-sauce"
          value="Horseradish Sauce"
        />
        <label for="horseradish-sauce">Horseradish Sauce</label>
        <input
          type="checkbox"
          name="hot-pepper-jelly"
          id="hot-pepper-jelly"
          value="Hot Pepper Jelly"
        />
        <label for="hot-pepper-jelly">Hot Pepper Jelly</label>
        <input
          type="checkbox"
          name="hot-sauce"
          id="hot-sauce"
          value="Hot Sauce"
        />
        <label for="hot-sauce">Hot Sauce</label>
        <input type="checkbox" name="hummus" id="hummus" value="Hummus" />
        <label for="hummus">Hummus</label>
        <input type="checkbox" name="ketchup" id="ketchup" value="Ketchup" />
        <label for="ketchup">Ketchup</label>
        <input type="checkbox" name="kung-pao" id="kung-pao" value="Kung Pao" />
        <label for="kung-pao">Kung Pao</label>
        <input
          type="checkbox"
          name="mango-salsa"
          id="mango-salsa"
          value="Mango Salsa"
        />
        <label for="mango-salsa">Mango Salsa</label>
        <input
          type="checkbox"
          name="marinara-sauce"
          id="marinara-sauce"
          value="Marinara Sauce"
        />
        <label for="marinara-sauce">Marinara Sauce</label>
        <input type="checkbox" name="mustard" id="mustard" value="Mustard" />
        <label for="mustard">Mustard</label>
        <input
          type="checkbox"
          name="mustard-paste"
          id="mustard-paste"
          value="Mustard Paste"
        />
        <label for="mustard-paste">Mustard Paste</label>
        <input
          type="checkbox"
          name="oyster-sauce"
          id="oyster-sauce"
          value="Oyster Sauce"
        />
        <label for="oyster-sauce">Oyster Sauce</label>
        <input
          type="checkbox"
          name="pad-thai-sauce"
          id="pad-thai-sauce"
          value="Pad Thai Sauce"
        />
        <label for="pad-thai-sauce">Pad Thai Sauce</label>
        <input
          type="checkbox"
          name="peanut-butter"
          id="peanut-butter"
          value="Peanut Butter"
        />
        <label for="peanut-butter">Peanut Butter</label>
        <input
          type="checkbox"
          name="peri-peri"
          id="peri-peri"
          value="Peri Peri"
        />
        <label for="peri-peri">Peri Peri</label>
        <input type="checkbox" name="pesto" id="pesto" value="Pesto" />
        <label for="pesto">Pesto</label>
        <input
          type="checkbox"
          name="pico-de-gallo"
          id="pico-de-gallo"
          value="Pico de Gallo"
        />
        <label for="pico-de-gallo">Pico de Gallo</label>
        <input
          type="checkbox"
          name="pineapple-salsa"
          id="pineapple-salsa"
          value="Pineapple Salsa"
        />
        <label for="pineapple-salsa">Pineapple Salsa</label>
        <input type="checkbox" name="queso" id="queso" value="Queso" />
        <label for="queso">Queso</label>
        <input
          type="checkbox"
          name="remoulade"
          id="remoulade"
          value="Remoulade"
        />
        <label for="remoulade">Remoulade</label>
        <input type="checkbox" name="salsa" id="salsa" value="Salsa" />
        <label for="salsa">Salsa</label>
        <input
          type="checkbox"
          name="salsa-verde"
          id="salsa-verde"
          value="Salsa Verde"
        />
        <label for="salsa-verde">Salsa Verde</label>
        <input type="checkbox" name="schezwan" id="schezwan" value="Schezwan" />
        <label for="schezwan">Schezwan</label>
        <input
          type="checkbox"
          name="shrimp-paste"
          id="shrimp-paste"
          value="Shrimp Paste"
        />
        <label for="shrimp-paste">Shrimp Paste</label>
        <input
          type="checkbox"
          name="sloppy-joe-sauce"
          id="sloppy-joe-sauce"
          value="Sloppy Joe Sauce"
        />
        <label for="sloppy-joe-sauce">Sloppy Joe Sauce</label>
        <input type="checkbox" name="sofrito" id="sofrito" value="Sofrito" />
        <label for="sofrito">Sofrito</label>
        <input
          type="checkbox"
          name="soy-sauce"
          id="soy-sauce"
          value="Soy Sauce"
        />
        <label for="soy-sauce">Soy Sauce</label>
        <input
          type="checkbox"
          name="spinach-dip"
          id="spinach-dip"
          value="Spinach Dip"
        />
        <label for="spinach-dip">Spinach Dip</label>
        <input
          type="checkbox"
          name="sriracha-sauce"
          id="sriracha-sauce"
          value="Sriracha Sauce"
        />
        <label for="sriracha-sauce">Sriracha Sauce</label>
        <input
          type="checkbox"
          name="steak-sauce"
          id="steak-sauce"
          value="Steak Sauce"
        />
        <label for="steak-sauce">Steak Sauce</label>
        <input
          type="checkbox"
          name="stewed-tomato"
          id="stewed-tomato"
          value="Stewed Tomato"
        />
        <label for="stewed-tomato">Stewed Tomato</label>
        <input
          type="checkbox"
          name="stir-fry-sauce"
          id="stir-fry-sauce"
          value="Stir-Fry Sauce"
        />
        <label for="stir-fry-sauce">Stir-Fry Sauce</label>
        <input
          type="checkbox"
          name="sweet-sour-sauce"
          id="sweet-sour-sauce"
          value="Sweet & Sour Sauce"
        />
        <label for="sweet-sour-sauce">Sweet & Sour Sauce</label>
        <input
          type="checkbox"
          name="taco-sauce"
          id="taco-sauce"
          value="Taco Sauce"
        />
        <label for="taco-sauce">Taco Sauce</label>
        <input type="checkbox" name="tahini" id="tahini" value="Tahini" />
        <label for="tahini">Tahini</label>
        <input type="checkbox" name="tamari" id="tamari" value="Tamari" />
        <label for="tamari">Tamari</label>
        <input type="checkbox" name="tapenade" id="tapenade" value="Tapenade" />
        <label for="tapenade">Tapenade</label>
        <input
          type="checkbox"
          name="tartar-sauce"
          id="tartar-sauce"
          value="Tartar Sauce"
        />
        <label for="tartar-sauce">Tartar Sauce</label>
        <input
          type="checkbox"
          name="teriyaki-sauce"
          id="teriyaki-sauce"
          value="Teriyaki Sauce"
        />
        <label for="teriyaki-sauce">Teriyaki Sauce</label>
        <input
          type="checkbox"
          name="thai-chili-paste"
          id="thai-chili-paste"
          value="Thai Chili Paste"
        />
        <label for="thai-chili-paste">Thai Chili Paste</label>
        <input
          type="checkbox"
          name="thai-chili-sauce"
          id="thai-chili-sauce"
          value="Thai Chili Sauce"
        />
        <label for="thai-chili-sauce">Thai Chili Sauce</label>
        <input
          type="checkbox"
          name="thai-peanut-sauce"
          id="thai-peanut-sauce"
          value="Thai Peanut Sauce"
        />
        <label for="thai-peanut-sauce">Thai Peanut Sauce</label>
        <input
          type="checkbox"
          name="tikka-masala"
          id="tikka-masala"
          value="Tikka Masala"
        />
        <label for="tikka-masala">Tikka Masala</label>
        <input type="checkbox" name="tzatziki" id="tzatziki" value="Tzatziki" />
        <label for="tzatziki">Tzatziki</label>
        <input
          type="checkbox"
          name="vodka-sauce"
          id="vodka-sauce"
          value="Vodka Sauce"
        />
        <label for="vodka-sauce">Vodka Sauce</label>
        <input
          type="checkbox"
          name="wasabi-sauce"
          id="wasabi-sauce"
          value="Wasabi Sauce"
        />
        <label for="wasabi-sauce">Wasabi Sauce</label>
        <input
          type="checkbox"
          name="whipped-cream-cheese"
          id="whipped-cream-cheese"
          value="Whipped Cream Cheese"
        />
        <label for="whipped-cream-cheese">Whipped Cream Cheese</label>
        <input
          type="checkbox"
          name="wholegrain-mustard"
          id="wholegrain-mustard"
          value="Wholegrain Mustard"
        />
        <label for="wholegrain-mustard">Wholegrain Mustard</label>
        <input
          type="checkbox"
          name="worcestershire-sauce"
          id="worcestershire-sauce"
          value="Worcestershire Sauce"
        />
        <label for="worcestershire-sauce">Worcestershire Sauce</label>
        <input
          type="checkbox"
          name="yum-yum-sauce"
          id="yum-yum-sauce"
          value="Yum-Yum Sauce"
        />
        <label for="yum-yum-sauce">Yum-Yum Sauce</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Cooking Oils & Fats</legend>
        <input
          type="checkbox"
          name="almond-oil"
          id="almond-oil"
          value="Almond Oil"
        />
        <label for="almond-oil">Almond Oil</label>
        <input
          type="checkbox"
          name="avocado-oil"
          id="avocado-oil"
          value="Avocado Oil"
        />
        <label for="avocado-oil">Avocado Oil</label>
        <input
          type="checkbox"
          name="bacon-grease"
          id="bacon-grease"
          value="Bacon Grease"
        />
        <label for="bacon-grease">Bacon Grease</label>
        <input
          type="checkbox"
          name="beef-dripping"
          id="beef-dripping"
          value="Beef Dripping"
        />
        <label for="beef-dripping">Beef Dripping</label>
        <input type="checkbox" name="beef-fat" id="beef-fat" value="Beef Fat" />
        <label for="beef-fat">Beef Fat</label>
        <input
          type="checkbox"
          name="butter-spray"
          id="butter-spray"
          value="Butter Spray"
        />
        <label for="butter-spray">Butter Spray</label>
        <input
          type="checkbox"
          name="cacao-butter"
          id="cacao-butter"
          value="Cacao Butter"
        />
        <label for="cacao-butter">Cacao Butter</label>
        <input
          type="checkbox"
          name="canola-cottonseed-oil"
          id="canola-cottonseed-oil"
          value="Canola &#40;Cottonseed&#41; Oil"
        />
        <label for="canola-cottonseed-oil"
          >Canola &#40;Cottonseed&#41; Oil</label
        >
        <input
          type="checkbox"
          name="castor-oil"
          id="castor-oil"
          value="Castor Oil"
        />
        <label for="castor-oil">Castor Oil</label>
        <input
          type="checkbox"
          name="chicken-dripping"
          id="chicken-dripping"
          value="Chicken Dripping"
        />
        <label for="chicken-dripping">Chicken Dripping</label>
        <input
          type="checkbox"
          name="chili-oil"
          id="chili-oil"
          value="Chili Oil"
        />
        <label for="chili-oil">Chili Oil</label>
        <input
          type="checkbox"
          name="coconut-oil"
          id="coconut-oil"
          value="Coconut Oil"
        />
        <label for="coconut-oil">Coconut Oil</label>
        <input type="checkbox" name="corn-oil" id="corn-oil" value="Corn Oil" />
        <label for="corn-oil">Corn Oil</label>
        <input type="checkbox" name="crisco" id="crisco" value="Crisco" />
        <label for="crisco">Crisco</label>
        <input type="checkbox" name="duck-fat" id="duck-fat" value="Duck Fat" />
        <label for="duck-fat">Duck Fat</label>
        <input
          type="checkbox"
          name="extra-virgin-olive-oil"
          id="extra-virgin-olive-oil"
          value="Extra Virgin Olive Oil"
        />
        <label for="extra-virgin-olive-oil">Extra Virgin Olive Oil</label>
        <input
          type="checkbox"
          name="flaxseed-oil"
          id="flaxseed-oil"
          value="Flaxseed Oil"
        />
        <label for="flaxseed-oil">Flaxseed Oil</label>
        <input
          type="checkbox"
          name="ginger-oil"
          id="ginger-oil"
          value="Ginger Oil"
        />
        <label for="ginger-oil">Ginger Oil</label>
        <input
          type="checkbox"
          name="goose-fat"
          id="goose-fat"
          value="Goose Fat"
        />
        <label for="goose-fat">Goose Fat</label>
        <input
          type="checkbox"
          name="grapeseed-oil"
          id="grapeseed-oil"
          value="Grapeseed Oil"
        />
        <label for="grapeseed-oil">Grapeseed Oil</label>
        <input
          type="checkbox"
          name="hempseed-oil"
          id="hempseed-oil"
          value="Hempseed Oil"
        />
        <label for="hempseed-oil">Hempseed Oil</label>
        <input type="checkbox" name="lamb-fat" id="lamb-fat" value="Lamb Fat" />
        <label for="lamb-fat">Lamb Fat</label>
        <input type="checkbox" name="lard" id="lard" value="Lard" />
        <label for="lard">Lard</label>
        <input
          type="checkbox"
          name="lemon-oil"
          id="lemon-oil"
          value="Lemon Oil"
        />
        <label for="lemon-oil">Lemon Oil</label>
        <input
          type="checkbox"
          name="macadamia-oil"
          id="macadamia-oil"
          value="Macadamia Oil"
        />
        <label for="macadamia-oil">Macadamia Oil</label>
        <input
          type="checkbox"
          name="medium-chain-triglyceride"
          id="medium-chain-triglyceride"
          value="Medium-Chain Triglyceride"
        />
        <label for="medium-chain-triglyceride">Medium-Chain Triglyceride</label>
        <input
          type="checkbox"
          name="mustard-oil"
          id="mustard-oil"
          value="Mustard Oil"
        />
        <label for="mustard-oil">Mustard Oil</label>
        <input
          type="checkbox"
          name="olive-oil"
          id="olive-oil"
          value="Olive Oil"
        />
        <label for="olive-oil">Olive Oil</label>
        <input type="checkbox" name="palm-oil" id="palm-oil" value="Palm Oil" />
        <label for="palm-oil">Palm Oil</label>
        <input
          type="checkbox"
          name="peanut-oil"
          id="peanut-oil"
          value="Peanut Oil"
        />
        <label for="peanut-oil">Peanut Oil</label>
        <input
          type="checkbox"
          name="pork-dripping"
          id="pork-dripping"
          value="Pork Dripping"
        />
        <label for="pork-dripping">Pork Dripping</label>
        <input type="checkbox" name="pork-fat" id="pork-fat" value="Pork Fat" />
        <label for="pork-fat">Pork Fat</label>
        <input
          type="checkbox"
          name="rapeseed-oil"
          id="rapeseed-oil"
          value="Rapeseed Oil"
        />
        <label for="rapeseed-oil">Rapeseed Oil</label>
        <input
          type="checkbox"
          name="safflower-oil"
          id="safflower-oil"
          value="Safflower Oil"
        />
        <label for="safflower-oil">Safflower Oil</label>
        <input type="checkbox" name="schmaltz" id="schmaltz" value="Schmaltz" />
        <label for="schmaltz">Schmaltz</label>
        <input
          type="checkbox"
          name="sesame-oil"
          id="sesame-oil"
          value="Sesame Oil"
        />
        <label for="sesame-oil">Sesame Oil</label>
        <input
          type="checkbox"
          name="shea-butter"
          id="shea-butter"
          value="Shea Butter"
        />
        <label for="shea-butter">Shea Butter</label>
        <input
          type="checkbox"
          name="soybean-oil"
          id="soybean-oil"
          value="Soybean Oil"
        />
        <label for="soybean-oil">Soybean Oil</label>
        <input
          type="checkbox"
          name="sunflower-oil"
          id="sunflower-oil"
          value="Sunflower Oil"
        />
        <label for="sunflower-oil">Sunflower Oil</label>
        <input type="checkbox" name="tallow" id="tallow" value="Tallow" />
        <label for="tallow">Tallow</label>
        <input
          type="checkbox"
          name="truffle-oil"
          id="truffle-oil"
          value="Truffle Oil"
        />
        <label for="truffle-oil">Truffle Oil</label>
        <input
          type="checkbox"
          name="walnut-oil"
          id="walnut-oil"
          value="Walnut Oil"
        />
        <label for="walnut-oil">Walnut Oil</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Dairy & Cheese</legend>
        <input
          type="checkbox"
          name="american-cheese"
          id="american-cheese"
          value="American Cheese"
        />
        <label for="american-cheese">American Cheese</label>
        <input
          type="checkbox"
          name="asadero-cheese"
          id="asadero-cheese"
          value="Asadero Cheese"
        />
        <label for="asadero-cheese">Asadero Cheese</label>
        <input
          type="checkbox"
          name="asiago-cheese"
          id="asiago-cheese"
          value="Asiago Cheese"
        />
        <label for="asiago-cheese">Asiago Cheese</label>
        <input
          type="checkbox"
          name="bleu-cheese"
          id="bleu-cheese"
          value="Bleu Cheese"
        />
        <label for="bleu-cheese">Bleu Cheese</label>
        <input type="checkbox" name="brie" id="brie" value="Brie" />
        <label for="brie">Brie</label>
        <input type="checkbox" name="butter" id="butter" value="Butter" />
        <label for="butter">Butter</label>
        <input
          type="checkbox"
          name="buttermilk"
          id="buttermilk"
          value="Buttermilk"
        />
        <label for="buttermilk">Buttermilk</label>
        <input
          type="checkbox"
          name="buttermilk-powder"
          id="buttermilk-powder"
          value="Buttermilk Powder"
        />
        <label for="buttermilk-powder">Buttermilk Powder</label>
        <input type="checkbox" name="cajeta" id="cajeta" value="Cajeta" />
        <label for="cajeta">Cajeta</label>
        <input
          type="checkbox"
          name="camembert"
          id="camembert"
          value="Camembert"
        />
        <label for="camembert">Camembert</label>
        <input
          type="checkbox"
          name="chantilly-cream"
          id="chantilly-cream"
          value="Chantilly Cream"
        />
        <label for="chantilly-cream">Chantilly Cream</label>
        <input type="checkbox" name="cheddar" id="cheddar" value="Cheddar" />
        <label for="cheddar">Cheddar</label>
        <input
          type="checkbox"
          name="cheese-powder"
          id="cheese-powder"
          value="Cheese Powder"
        />
        <label for="cheese-powder">Cheese Powder</label>
        <input
          type="checkbox"
          name="coffee-creamer"
          id="coffee-creamer"
          value="Coffee Creamer"
        />
        <label for="coffee-creamer">Coffee Creamer</label>
        <input
          type="checkbox"
          name="colby-jack"
          id="colby-jack"
          value="Colby Jack"
        />
        <label for="colby-jack">Colby Jack</label>
        <input
          type="checkbox"
          name="cotija-cheese"
          id="cotija-cheese"
          value="Cojita Cheese"
        />
        <label for="cotija-cheese">Cotija Cheese</label>
        <input
          type="checkbox"
          name="cottage-cheese"
          id="cottage-cheese"
          value="Cottage Cheese"
        />
        <label for="cottage-cheese">Cottage Cheese</label>
        <input
          type="checkbox"
          name="cream-cheese"
          id="cream-cheese"
          value="Cream Cheese"
        />
        <label for="cream-cheese">Cream Cheese</label>
        <input type="checkbox" name="curds" id="curds" value="Curds" />
        <label for="curds">Curds</label>
        <input type="checkbox" name="custard" id="custard" value="Custard" />
        <label for="custard">Custard</label>
        <input
          type="checkbox"
          name="dulce-de-leche"
          id="dulce-de-leche"
          value="Dulce de Leche"
        />
        <label for="dulce-de-leche">Dulce De Leche</label>
        <input type="checkbox" name="egg" id="egg" value="Egg" />
        <label for="egg">Egg</label>
        <input
          type="checkbox"
          name="evaporated-milk"
          id="evaporated-milk"
          value="Evaporated Milk"
        />
        <label for="evaporated-milk">Evaporated Milk</label>
        <input type="checkbox" name="feta" id="feta" value="Feta" />
        <label for="feta">Feta</label>
        <input type="checkbox" name="fontina" id="fontina" value="Fontina" />
        <label for="fontina">Fontina</label>
        <input type="checkbox" name="frosting" id="frosting" value="Frosting" />
        <label for="frosting">Frosting</label>
        <input
          type="checkbox"
          name="frozen-yogurt"
          id="frozen-yogurt"
          value="Frozen Yogurt"
        />
        <label for="frozen-yogurt">Frozen Yogurt</label>
        <input type="checkbox" name="ganache" id="ganache" value="Ganache" />
        <label for="ganache">Ganache</label>
        <input type="checkbox" name="ghee" id="ghee" value="Ghee" />
        <label for="ghee">Ghee</label>
        <input
          type="checkbox"
          name="goat-cheese"
          id="goat-cheese"
          value="Goat Cheese"
        />
        <label for="goat-cheese">Goat Cheese</label>
        <input
          type="checkbox"
          name="goat-milk"
          id="goat-milk"
          value="Goat Milk"
        />
        <label for="goat-milk">Goat Milk</label>
        <input
          type="checkbox"
          name="gouda-cheese"
          id="gouda-cheese"
          value="Gouda Cheese"
        />
        <label for="gouda-cheese">Gouda Cheese</label>
        <input
          type="checkbox"
          name="gruyere-cheese"
          id="gruyere-cheese"
          value="Gruyere Cheese"
        />
        <label for="gruyere-cheese">Gruyere Cheese</label>
        <input
          type="checkbox"
          name="greek-yogurt"
          id="greek-yogurt"
          value="Greek Yogurt"
        />
        <label for="greek-yogurt">Greek Yogurt</label>
        <input
          type="checkbox"
          name="half-half"
          id="half-half"
          value="Half & Half"
        />
        <label for="half-half">Half & Half</label>
        <input type="checkbox" name="halloumi" id="halloumi" value="Halloumi" />
        <label for="halloumi">Halloumi</label>
        <input type="checkbox" name="havarti" id="havarti" value="Havarti" />
        <label for="havarti">Havarti</label>
        <input
          type="checkbox"
          name="heavy-cream"
          id="heavy-cream"
          value="Heavy Cream"
        />
        <label for="heavy-cream">Heavy Cream</label>
        <input
          type="checkbox"
          name="ice-cream"
          id="ice-cream"
          value="Ice Cream"
        />
        <label for="ice-cream">Ice Cream</label>
        <input
          type="checkbox"
          name="jarlsberg-cheese"
          id="jarlsberg-cheese"
          value="Jarlsberg Cheese"
        />
        <label for="jarlsberg-cheese">Jarlsberg Cheese</label>
        <input type="checkbox" name="kefir" id="kefir" value="Kefir" />
        <label for="kefir">Kefir</label>
        <input
          type="checkbox"
          name="marble-cheese"
          id="marble-cheese"
          value="Marble Cheese"
        />
        <label for="marble-cheese">Marble Cheese</label>
        <input
          type="checkbox"
          name="margarine"
          id="margarine"
          value="Margarine"
        />
        <label for="margarine">Margarine</label>
        <input
          type="checkbox"
          name="marscapone"
          id="marscapone"
          value="Marscapone"
        />
        <label for="marscapone">Marscapone</label>
        <input type="checkbox" name="milk" id="milk" value="Milk" />
        <label for="milk">Milk</label>
        <input
          type="checkbox"
          name="milk-powder"
          id="milk-powder"
          value="Milk Powder"
        />
        <label for="milk-powder">Milk Powder</label>
        <input
          type="checkbox"
          name="monterey-jack"
          id="monterey-jack"
          value="Monterey Jack"
        />
        <label for="monterey-jack">Monterey Jack</label>
        <input
          type="checkbox"
          name="mozzarella"
          id="mozzarella"
          value="Mozzarella"
        />
        <label for="mozzarella">Mozzarella</label>
        <input type="checkbox" name="muenster" id="muenster" value="Muenster" />
        <label for="muenster">Muenster</label>
        <input
          type="checkbox"
          name="neufchatel"
          id="neufchatel"
          value="Neufchatel"
        />
        <label for="neufchatel">Neufchatel</label>
        <input type="checkbox" name="parmesan" id="parmesan" value="Parmesan" />
        <label for="parmesan">Parmesan</label>
        <input type="checkbox" name="pecorino" id="pecorino" value="Pecorino" />
        <label for="pecorino">Pecorino</label>
        <input
          type="checkbox"
          name="pepperjack"
          id="pepperjack"
          value="Pepperjack"
        />
        <label for="pepperjack">Pepperjack</label>
        <input
          type="checkbox"
          name="provolone"
          id="provolone"
          value="Provolone"
        />
        <label for="provolone">Provolone</label>
        <input
          type="checkbox"
          name="quark"
          id="quark"
          value="Quark &#40;Tvorog&#41;"
        />
        <label for="quark">Quark &#40;Tvorog&#41;</label>
        <input type="checkbox" name="rennet" id="rennet" value="Rennet" />
        <label for="rennet">Rennet</label>
        <input type="checkbox" name="ricotta" id="ricotta" value="Ricotta" />
        <label for="ricotta">Ricotta</label>
        <input type="checkbox" name="sherbet" id="sherbet" value="Sherbet" />
        <label for="sherbet">Sherbet</label>
        <input
          type="checkbox"
          name="shortening"
          id="shortening"
          value="Shortening"
        />
        <label for="shortening">Shortening</label>
        <input type="checkbox" name="skyr" id="skyr" value="Skyr" />
        <label for="skyr">Skyr</label>
        <input
          type="checkbox"
          name="sour-cream"
          id="sour-cream"
          value="Sour Cream"
        />
        <label for="sour-cream">Sour Cream</label>
        <input
          type="checkbox"
          name="starter-culture"
          id="starter-culture"
          value="Starter Culture"
        />
        <label for="starter-culture">Starter Culture</label>
        <input
          type="checkbox"
          name="swiss-cheese"
          id="swiss-cheese"
          value="Swiss Cheese"
        />
        <label for="swiss-cheese">Swiss Cheese</label>
        <input type="checkbox" name="whey" id="whey" value="Whey" />
        <label for="whey">Whey</label>
        <input
          type="checkbox"
          name="whipped-cream"
          id="whipped-cream"
          value="Whipped Cream"
        />
        <label for="whipped-cream">Whipped Cream</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Dessert</legend>
        <input
          type="checkbox"
          name="apple-butter"
          id="apple-butter"
          value="Apple Butter"
        />
        <label for="apple-butter">Apple Butter</label>
        <input
          type="checkbox"
          name="apple-jelly"
          id="apple-jelly"
          value="Apple Jelly"
        />
        <label for="apple-jelly">Apple Jelly</label>
        <input
          type="checkbox"
          name="applesauce"
          id="applesauce"
          value="Applesauce"
        />
        <label for="applesauce">Applesauce</label>
        <input
          type="checkbox"
          name="apricot-jam"
          id="apricot-jam"
          value="Apricot Jam"
        />
        <label for="apricot-jam">Apricot Jam</label>
        <input
          type="checkbox"
          name="baking-chocolate"
          id="baking-chocolate"
          value="Baking Chocolate"
        />
        <label for="baking-chocolate">Baking Chocolate</label>
        <input type="checkbox" name="biscotti" id="biscotti" value="Biscotti" />
        <label for="biscotti">Biscotti</label>
        <input
          type="checkbox"
          name="blackberry-preserves"
          id="blackberry-preserves"
          value="Blackberry Preserves"
        />
        <label for="blackberry-preserves">Blackberry Preserves</label>
        <input
          type="checkbox"
          name="blueberry-jam"
          id="blueberry-jam"
          value="Blueberry Jam"
        />
        <label for="blueberry-jam">Blueberry Jam</label>
        <input
          type="checkbox"
          name="butterscotch"
          id="butterscotch"
          value="Butterscotch"
        />
        <label for="butterscotch">Butterscotch</label>
        <input
          type="checkbox"
          name="cacao-nib"
          id="cacao-nib"
          value="Cacao Nib"
        />
        <label for="cacao-nib">Cacao Nib</label>
        <input
          type="checkbox"
          name="candied-fruit"
          id="candied-fruit"
          value="Candied Fruit"
        />
        <label for="candied-fruit">Candied Fruit</label>
        <input
          type="checkbox"
          name="candied-ginger"
          id="candied-ginger"
          value="Candied Ginger"
        />
        <label for="candied-ginger">Candied Ginger</label>
        <input
          type="checkbox"
          name="candy-cane"
          id="candy-cane"
          value="Candy Cane"
        />
        <label for="candy-cane">Candy Cane</label>
        <input
          type="checkbox"
          name="candy-coating"
          id="candy-coating"
          value="Candy Coating"
        />
        <label for="candy-coating">Candy Coating</label>
        <input
          type="checkbox"
          name="candy-corn"
          id="candy-corn"
          value="Candy Corn"
        />
        <label for="candy-corn">Candy Corn</label>
        <input type="checkbox" name="caramels" id="caramels" value="Caramels" />
        <label for="caramels">Caramels</label>
        <input
          type="checkbox"
          name="caramel-sauce"
          id="caramel-sauce"
          value="Caramel Sauce"
        />
        <label for="caramel-sauce">Caramel Sauce</label>
        <input
          type="checkbox"
          name="chocolate-candy"
          id="chocolate-candy"
          value="Chocolate Candy"
        />
        <label for="chocolate-candy">Chocolate Candy</label>
        <input
          type="checkbox"
          name="chocolate-hazelnut-spread"
          id="chocolate-hazelnut-spread"
          value="Chocolate Hazelnut Spread &#40;Nutella&#41;"
        />
        <label for="chocolate-hazelnut-spread"
          >Chocolate Hazelnut Spread &#40;Nutella&#41;</label
        >
        <input
          type="checkbox"
          name="chocolate-peanut-butter"
          id="chocolate-peanut-butter"
          value="Chocolate Peanut Butter"
        />
        <label for="chocolate-peanut-butter">Chocolate Peanut Butter</label>
        <input
          type="checkbox"
          name="chocolate-sauce"
          id="chocolate-sauce"
          value="Chocolate Sauce"
        />
        <label for="chocolate-sauce">Chocolate Sauce</label>
        <input
          type="checkbox"
          name="cocoa-powder"
          id="cocoa-powder"
          value="Cocoa Powder"
        />
        <label for="cocoa-powder">Cocoa Powder</label>
        <input type="checkbox" name="cookies" id="cookies" value="Cookies" />
        <label for="cookies">Cookies</label>
        <input type="checkbox" name="donuts" id="donuts" value="Donuts" />
        <label for="donuts">Donuts</label>
        <input type="checkbox" name="fudge" id="fudge" value="Fudge" />
        <label for="fudge">Fudge</label>
        <input
          type="checkbox"
          name="gingersnap"
          id="gingersnap"
          value="Gingersnap"
        />
        <label for="gingersnap">Gingersnap</label>
        <input
          type="checkbox"
          name="graham-cracker"
          id="graham-cracker"
          value="Graham Cracker"
        />
        <label for="graham-cracker">Graham Cracker</label>
        <input
          type="checkbox"
          name="grape-jelly"
          id="grape-jelly"
          value="Grape Jelly"
        />
        <label for="grape-jelly">Grape Jelly</label>
        <input type="checkbox" name="gumdrop" id="gumdrop" value="Gumdrop" />
        <label for="gumdrop">Gumdrop</label>
        <input
          type="checkbox"
          name="ice-cream-bowl"
          id="ice-cream-bowl"
          value="Ice Cream Bowl"
        />
        <label for="ice-cream-bowl">Ice Cream Bowl</label>
        <input
          type="checkbox"
          name="ice-cream-cone"
          id="ice-cream-cone"
          value="Ice Cream Cone"
        />
        <label for="ice-cream-cone">Ice Cream Cone</label>
        <input
          type="checkbox"
          name="ice-cream-cup"
          id="ice-cream-cup"
          value="Ice Cream Cup"
        />
        <label for="ice-cream-cup">Ice Cream Cup</label>
        <input
          type="checkbox"
          name="instant-pudding"
          id="instant-pudding"
          value="Instant Pudding"
        />
        <label for="instant-pudding">Instant Pudding</label>
        <input
          type="checkbox"
          name="italian-ice"
          id="italian-ice"
          value="Italian Ice"
        />
        <label for="italian-ice">Italian Ice</label>
        <input type="checkbox" name="licorice" id="licorice" value="Licorice" />
        <label for="licorice">Licorice</label>
        <input
          type="checkbox"
          name="marmalade"
          id="marmalade"
          value="Marmalade"
        />
        <label for="marmalade">Marmalade</label>
        <input
          type="checkbox"
          name="marshmallow"
          id="marshmallow"
          value="Marshmallow"
        />
        <label for="marshmallow">Marshmallow</label>
        <input type="checkbox" name="meringue" id="meringue" value="Meringue" />
        <label for="meringue">Meringue</label>
        <input
          type="checkbox"
          name="peach-preserves"
          id="peach-preserves"
          value="Peach Preserves"
        />
        <label for="peach-preserves">Peach Preserves</label>
        <input
          type="checkbox"
          name="peanut-butter-cup"
          id="peanut-butter-cup"
          value="Peanut Butter Cup"
        />
        <label for="peanut-butter-cup">Peanut Butter Cup</label>
        <input
          type="checkbox"
          name="peppermints"
          id="peppermints"
          value="Peppermint"
        />
        <label for="peppermints">Peppermints</label>
        <input
          type="checkbox"
          name="peppermint-patty"
          id="peppermint-patty"
          value="Peppermint Patty"
        />
        <label for="peppermint-patty">Peppermint Patty</label>
        <input
          type="checkbox"
          name="pumpkin-butter"
          id="pumpkin-butter"
          value="Pumpkin Butter"
        />
        <label for="pumpkin-butter">Pumpkin Butter</label>
        <input
          type="checkbox"
          name="raspberry-jam"
          id="raspberry-jam"
          value="Raspberry Jam"
        />
        <label for="raspberry-jam">Raspberry Jam</label>
        <input type="checkbox" name="sorbet" id="sorbet" value="Sorbet" />
        <label for="sorbet">Sorbet</label>
        <input
          type="checkbox"
          name="strawberry-jam"
          id="strawberry-jam"
          value="Strawberry Jam"
        />
        <label for="strawberry-jam">Strawberry Jam</label>
        <input
          type="checkbox"
          name="strawberry-puree"
          id="strawberry-puree"
          value="Strawberry Puree"
        />
        <label for="strawberry-puree">Strawberry Puree</label>
        <input
          type="checkbox"
          name="strawberry-sauce"
          id="strawberry-sauce"
          value="Strawberry Sauce"
        />
        <label for="strawberry-sauce">Strawberry Sauce</label>
        <input
          type="checkbox"
          name="stroopwafel"
          id="stroopwafel"
          value="Stroopwafel"
        />
        <label for="stroopwafel">Stroopwafel</label>
        <input
          type="checkbox"
          name="toaster-pastry"
          id="toaster-pastry"
          value="Toaster Pastry"
        />
        <label for="toaster-pastry">Toaster Pastry</label>
        <input
          type="checkbox"
          name="vanilla-wafer"
          id="vanilla-wafer"
          value="Vanilla Wafer"
        />
        <label for="vanilla-wafer">Vanilla Wafer</label>
        <input type="checkbox" name="waffles" id="waffles" value="Waffles" />
        <label for="waffles">Waffles</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Dressing & Vinegar</legend>
        <input type="checkbox" name="aioli" id="aioli" value="Aioli" />
        <label for="aioli">Aioli</label>
        <input
          type="checkbox"
          name="apple-cider-vinegar"
          id="apple-cider-vinegar"
          value="Apple Cider Vinegar"
        />
        <label for="apple-cider-vinegar">Apple Cider Vinegar</label>
        <input
          type="checkbox"
          name="avocado-lime-dressing"
          id="avocado-lime-dressing"
          value="Avocado-Lime Dressing"
        />
        <label for="avocado-lime-dressing">Avocado-Lime Dressing</label>
        <input
          type="checkbox"
          name="balsamic-vinaigrette"
          id="balsamic-vinaigrette"
          value="Balsamic Vinaigrette"
        />
        <label for="balsamic-vinaigrette">Balsamic Vinaigrette</label>
        <input
          type="checkbox"
          name="bleu-cheese-dressing"
          id="bleu-cheese-dressing"
          value="Bleu Cheese Dressing"
        />
        <label for="bleu-cheese-dressing">Bleu Cheese Dressing</label>
        <input
          type="checkbox"
          name="brown-rice-vinegar"
          id="brown-rice-vinegar"
          value="Brown Rice Vinegar"
        />
        <label for="brown-rice-vinegar">Brown Rice Vinegar</label>
        <input
          type="checkbox"
          name="caesar-dressing"
          id="caesar-dressing"
          value="Caesar Dressing"
        />
        <label for="caesar-dressing">Caesar Dressing</label>
        <input
          type="checkbox"
          name="chili-lime-dressing"
          id="chili-lime-dressing"
          value="Chili-Lime Dressing"
        />
        <label for="chili-lime-dressing">Chili-Lime Dressing</label>
        <input
          type="checkbox"
          name="cole-slaw"
          id="cole-slaw"
          value="Cole Slaw"
        />
        <label for="cole-slaw">Cole Slaw</label>
        <input
          type="checkbox"
          name="creamy-balsamic"
          id="creamy-balsamic"
          value="Creamy Balsamic"
        />
        <label for="creamy-balsamic">Creamy Balsamic</label>
        <input
          type="checkbox"
          name="distilled-vinegar"
          id="distilled-vinegar"
          value="Distilled Vinegar"
        />
        <label for="distilled-vinegar">Distilled Vinegar</label>
        <input
          type="checkbox"
          name="french-dressing"
          id="french-dressing"
          value="French Dressing"
        />
        <label for="french-dressing">French Dressing</label>
        <input
          type="checkbox"
          name="greek-dressing"
          id="greek-dressing"
          value="Greek Dressing"
        />
        <label for="greek-dressing">Greek Dressing</label>
        <input
          type="checkbox"
          name="green-goddess"
          id="green-goddess"
          value="Green Goddess"
        />
        <label for="green-goddess">Green Goddess</label>
        <input
          type="checkbox"
          name="honey-mustard-dressing"
          id="honey-mustard-dressing"
          value="Honey Mustard Dressing"
        />
        <label for="honey-mustard-dressing">Honey Mustard Dressing</label>
        <input
          type="checkbox"
          name="italian-dressing"
          id="italian-dressing"
          value="Italian Dressing"
        />
        <label for="italian-dressing">Italian Dressing</label>
        <input
          type="checkbox"
          name="malt-vinegar"
          id="malt-vinegar"
          value="Malt Vinegar"
        />
        <label for="malt-vinegar">Malt Vinegar</label>
        <input
          type="checkbox"
          name="mayonnaise"
          id="mayonnaise"
          value="Mayonnaise"
        />
        <label for="mayonnaise">Mayonnaise</label>
        <input
          type="checkbox"
          name="miso-dressing"
          id="miso-dressing"
          value="Miso Dressing"
        />
        <label for="miso-dressing">Miso Dressing</label>
        <input
          type="checkbox"
          name="onion-dressing"
          id="onion-dressing"
          value="Onion Dressing"
        />
        <label for="onion-dressing">Onion Dressing</label>
        <input
          type="checkbox"
          name="poppyseed-dressing"
          id="poppyseed-dressing"
          value="Poppyseed Dressing"
        />
        <label for="poppyseed-dressing">Poppyseed Dressing</label>
        <input
          type="checkbox"
          name="ranch-dressing"
          id="ranch-dressing"
          value="Ranch Dressing"
        />
        <label for="ranch-dressing">Ranch Dressing</label>
        <input
          type="checkbox"
          name="raspberry-vinaigrette"
          id="raspberry-vinaigrette"
          value="Raspberry Vinaigrette"
        />
        <label for="raspberry-vinaigrette">Raspberry Vinaigrette</label>
        <input
          type="checkbox"
          name="red-wine-vinaigrette"
          id="red-wine-vinaigrette"
          value="Red Wine Vinaigrette"
        />
        <label for="red-wine-vinaigrette">Red Wine Vinaigrette</label>
        <input
          type="checkbox"
          name="red-wine-vinegar"
          id="red-wine-vinegar"
          value="Red Wine Vinegar"
        />
        <label for="red-wine-vinegar">Red Wine Vinegar</label>
        <input
          type="checkbox"
          name="rice-wine-vinegar"
          id="rice-wine-vinegar"
          value="Rice Wine Vinegar"
        />
        <label for="rice-wine-vinegar">Rice Wine Vinegar</label>
        <input
          type="checkbox"
          name="russian-dressing"
          id="russian-dressing"
          value="Russian Dressing"
        />
        <label for="russian-dressing">Russian Dressing</label>
        <input
          type="checkbox"
          name="sesame-dressing"
          id="sesame-dressing"
          value="Sesame Dressing"
        />
        <label for="sesame-dressing">Sesame Dressing</label>
        <input
          type="checkbox"
          name="sherry-vinegar"
          id="sherry-vinegar"
          value="Sherry Vinegar"
        />
        <label for="sherry-vinegar">Sherry Vinegar</label>
        <input
          type="checkbox"
          name="sweet-chili-sauce"
          id="sweet-chili-sauce"
          value="Sweet Chili Sauce"
        />
        <label for="sweet-chili-sauce">Sweet Chili Sauce</label>
        <input
          type="checkbox"
          name="tomato-vinaigrette"
          id="tomato-vinaigrette"
          value="Tomato Vinaigrette"
        />
        <label for="tomato-vinaigrette">Tomato Vinaigrette</label>
        <input
          type="checkbox"
          name="thousand-island"
          id="thousand-island"
          value="Thousand Island"
        />
        <label for="thousand-island">Thousand Island</label>
        <input
          type="checkbox"
          name="white-wine-vinegar"
          id="white-wine-vinegar"
          value="White Wine Vinegar"
        />
        <label for="white-wine-vinegar">White Wine Vinegar</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Drinks</legend>
        <input
          type="checkbox"
          name="acai-juice"
          id="acai-juice"
          value="A&#231;ai Juice"
        />
        <label for="acai-juice">A&#231;ai Juice</label>
        <input
          type="checkbox"
          name="apple-cider"
          id="apple-cider"
          value="Apple Cider"
        />
        <label for="apple-cider">Apple Cider</label>
        <input
          type="checkbox"
          name="apple-juice"
          id="apple-juice"
          value="Apple Juice"
        />
        <label for="apple-juice">Apple Juice</label>
        <input
          type="checkbox"
          name="banana-juice"
          id="banana-juice"
          value="Banana Juice"
        />
        <label for="banana-juice">Banana Juice</label>
        <input
          type="checkbox"
          name="beet-juice"
          id="beet-juice"
          value="Beet Juice"
        />
        <label for="beet-juice">Beet Juice</label>
        <input
          type="checkbox"
          name="blackcurrant-juice"
          id="blackcurrant-juice"
          value="Blackcurrant Juice"
        />
        <label for="blackcurrant-juice">Blackcurrant Juice</label>
        <input
          type="checkbox"
          name="carrot-juice"
          id="carrot-juice"
          value="Carrot Juice"
        />
        <label for="carrot-juice">Carrot Juice</label>
        <input type="checkbox" name="chai-tea" id="chai-tea" value="Chai Tea" />
        <label for="chai-tea">Chai Tea</label>
        <input
          type="checkbox"
          name="chamomile"
          id="chamomile"
          value="Chamomile"
        />
        <label for="chamomile">Chamomile</label>
        <input
          type="checkbox"
          name="cherry-juice"
          id="cherry-juice"
          value="Cherry Juice"
        />
        <label for="cherry-juice">Cherry Juice</label>
        <input
          type="checkbox"
          name="cherry-soda"
          id="cherry-soda"
          value="Cherry Soda"
        />
        <label for="cherry-soda">Cherry Soda</label>
        <input
          type="checkbox"
          name="chocolate-drink"
          id="chocolate-drink"
          value="Chocolate Drink &#40;Yoohoo&#41;"
        />
        <label for="chocolate-drink">Chocolate Drink &#40;Yoohoo&#41;</label>
        <input
          type="checkbox"
          name="club-soda"
          id="club-soda"
          value="Club Soda"
        />
        <label for="club-soda">Club Soda</label>
        <input
          type="checkbox"
          name="coconut-water"
          id="coconut-water"
          value="Coconut Water"
        />
        <label for="coconut-water">Coconut Water</label>
        <input type="checkbox" name="coffee" id="coffee" value="Coffee" />
        <label for="coffee">Coffee</label>
        <input type="checkbox" name="cola" id="cola" value="Cola" />
        <label for="cola">Cola</label>
        <input
          type="checkbox"
          name="cranberry-juice"
          id="cranberry-juice"
          value="Cranberry Juice"
        />
        <label for="cranberry-juice">Cranberry Juice</label>
        <input
          type="checkbox"
          name="cream-of-coconut"
          id="cream-of-coconut"
          value="Cream of Coconut"
        />
        <label for="cream-of-coconut">Cream of Coconut</label>
        <input
          type="checkbox"
          name="cream-soda"
          id="cream-soda"
          value="Cream Soda"
        />
        <label for="cream-soda">Cream Soda</label>
        <input
          type="checkbox"
          name="dr-pepper"
          id="dr-pepper"
          value="Dr. Pepper"
        />
        <label for="dr-pepper">Dr. Pepper</label>
        <input
          type="checkbox"
          name="earl-grey-tea"
          id="earl-grey-tea"
          value="Earl Grey Tea"
        />
        <label for="earl-grey-tea">Earl Grey Tea</label>
        <input type="checkbox" name="eggnog" id="eggnog" value="Eggnog" />
        <label for="eggnog">Eggnog</label>
        <input
          type="checkbox"
          name="energy-drink"
          id="energy-drink"
          value="Energy Drink"
        />
        <label for="energy-drink">Energy Drink</label>
        <input type="checkbox" name="espresso" id="espresso" value="Espresso" />
        <label for="espresso">Espresso</label>
        <input
          type="checkbox"
          name="fruit-punch"
          id="fruit-punch"
          value="Fruit Punch"
        />
        <label for="fruit-punch">Fruit Punch</label>
        <input
          type="checkbox"
          name="ginger-ale"
          id="ginger-ale"
          value="Ginger Beer"
        />
        <label for="ginger-ale">Ginger Ale</label>
        <input
          type="checkbox"
          name="ginger-beer"
          id="ginger-beer"
          value="Ginger Ale"
        />
        <label for="ginger-beer">Ginger Beer</label>
        <input
          type="checkbox"
          name="grape-juice"
          id="grape-juice"
          value="Grape Juice"
        />
        <label for="grape-juice">Grape Juice</label>
        <input
          type="checkbox"
          name="grape-soda"
          id="grape-soda"
          value="Grape Soda"
        />
        <label for="grape-soda">Grape Soda</label>
        <input
          type="checkbox"
          name="grapefruit-juice"
          id="grapefruit-juice"
          value="Grapefruit Juice"
        />
        <label for="grapefruit-juice">Grapefruit Juice</label>
        <input
          type="checkbox"
          name="grapefruit-soda"
          id="grapefruit-soda"
          value="Grapefruit Soda"
        />
        <label for="grapefruit-soda">Grapefruit Soda</label>
        <input
          type="checkbox"
          name="green-tea"
          id="green-tea"
          value="Green Tea"
        />
        <label for="green-tea">Green Tea</label>
        <input
          type="checkbox"
          name="guava-juice"
          id="guava-juice"
          value="Guava Juice"
        />
        <label for="guava-juice">Guava Juice</label>
        <input
          type="checkbox"
          name="herbal-tea"
          id="herbal-tea"
          value="Herbal Tea"
        />
        <label for="herbal-tea">Herbal Tea</label>
        <input
          type="checkbox"
          name="hibiscus-tea"
          id="hibiscus-tea"
          value="Hibiscus Tea"
        />
        <label for="hibiscus-tea">Hibiscus Tea</label>
        <input type="checkbox" name="kombucha" id="kombucha" value="Kombucha" />
        <label for="kombucha">Kombucha</label>
        <input type="checkbox" name="kool-aid" id="kool-aid" value="Kool-Aid" />
        <label for="kool-aid">Kool-Aid</label>
        <input
          type="checkbox"
          name="lemon-lime-soda"
          id="lemon-lime-soda"
          value="Lemon-Lime Soda"
        />
        <label for="lemon-lime-soda">Lemon-Lime Soda</label>
        <input
          type="checkbox"
          name="lemon-water"
          id="lemon-water"
          value="Lemon"
        />
        <label for="lemon-water">Lemon Water</label>
        <input type="checkbox" name="lemonade" id="lemonade" value="Lemonade" />
        <label for="lemonade">Lemonade</label>
        <input
          type="checkbox"
          name="lemonade-mix"
          id="lemonade-mix"
          value="Lemonade Mix"
        />
        <label for="lemonade-mix">Lemonade Mix</label>
        <input
          type="checkbox"
          name="malted-milk-powder"
          id="malted-milk-powder"
          value="Malted Milk Powder &#40;Ovaltine&#41;"
        />
        <label for="malted-milk-powder"
          >Malted Milk Powder &#40;Ovaltine&#41;</label
        >
        <input
          type="checkbox"
          name="orange-juice"
          id="orange-juice"
          value="Orange Juice"
        />
        <label for="orange-juice">Orange Juice</label>
        <input
          type="checkbox"
          name="orange-soda"
          id="orange-soda"
          value="Orange Soda"
        />
        <label for="orange-soda">Orange Soda</label>
        <input
          type="checkbox"
          name="passion-fruit-juice"
          id="passion-fruit-juice"
          value="Passion Fruit Juice"
        />
        <label for="passion-fruit-juice">Passion Fruit Juice</label>
        <input
          type="checkbox"
          name="pineapple-juice"
          id="pineapple-juice"
          value="Pineapple Juice"
        />
        <label for="pineapple-juice">Pineapple Juice</label>
        <input
          type="checkbox"
          name="pomegranate-juice"
          id="pomegranate-juice"
          value="Pomegranate Juice"
        />
        <label for="pomegranate-juice">Pomegranate Juice</label>
        <input
          type="checkbox"
          name="prune-juice"
          id="prune-juice"
          value="Prune Juice"
        />
        <label for="prune-juice">Prune Juice</label>
        <input
          type="checkbox"
          name="root-beer"
          id="root-beer"
          value="Root Beer"
        />
        <label for="root-beer">Root Beer</label>
        <input
          type="checkbox"
          name="sparkling-water"
          id="sparkling-water"
          value="Sparkling Water"
        />
        <label for="sparkling-water">Sparkling Water</label>
        <input
          type="checkbox"
          name="sports-drink"
          id="sports-drink"
          value="Sports Drink"
        />
        <label for="sports-drink">Sports Drink</label>
        <input
          type="checkbox"
          name="strawberry-juice"
          id="strawberry-juice"
          value="Strawberry Juice"
        />
        <label for="strawberry-juice">Strawberry Juice</label>
        <input
          type="checkbox"
          name="strawberry-soda"
          id="strawberry-soda"
          value="Strawberry Soda"
        />
        <label for="strawberry-soda">Strawberry Soda</label>
        <input
          type="checkbox"
          name="tomato-juice"
          id="tomato-juice"
          value="Tomato Juice"
        />
        <label for="tomato-juice">Tomato Juice</label>
        <input
          type="checkbox"
          name="tonic-water"
          id="tonic-water"
          value="Tonic Water"
        />
        <label for="tonic-water">Tonic Water</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Fruits</legend>
        <input
          type="checkbox"
          name="acai-berry"
          id="acai-berry"
          value="A&#231;ai Berry"
        />
        <label for="acai-berry">A&#231;ai Berry</label>
        <input type="checkbox" name="apple" id="apple" value="Apple" />
        <label for="apple">Apple</label>
        <input type="checkbox" name="apricot" id="apricot" value="Apricot" />
        <label for="apricot">Apricot</label>
        <input
          type="checkbox"
          name="aronia-berry"
          id="aronia-berry"
          value="Aronia Berry"
        />
        <label for="aronia-berry">Aronia Berry</label>
        <input type="checkbox" name="banana" id="banana" value="Banana" />
        <label for="banana">Banana</label>
        <input type="checkbox" name="barberry" id="barberry" value="Barberry" />
        <label for="barberry">Barberry</label>
        <input
          type="checkbox"
          name="blackberry"
          id="blackberry"
          value="Blackberry"
        />
        <label for="blackberry">Blackberry</label>
        <input
          type="checkbox"
          name="blueberry"
          id="blueberry"
          value="Blueberry"
        />
        <label for="blueberry">Blueberry</label>
        <input
          type="checkbox"
          name="boysenberry"
          id="boysenberry"
          value="Boysenberry"
        />
        <label for="boysenberry">Boysenberry</label>
        <input
          type="checkbox"
          name="cantaloupe"
          id="cantaloupe"
          value="Cantaloupe"
        />
        <label for="cantaloupe">Cantaloupe</label>
        <input type="checkbox" name="cherry" id="cherry" value="Cherry" />
        <label for="cherry">Cherry</label>
        <input type="checkbox" name="chestnut" id="chestnut" value="Chestnut" />
        <label for="chestnut">Chestnut</label>
        <input type="checkbox" name="chikoo" id="chikoo" value="Chikoo" />
        <label for="chikoo">Chikoo</label>
        <input
          type="checkbox"
          name="chokeberry"
          id="chokeberry"
          value="Chokeberry"
        />
        <label for="chokeberry">Chokeberry</label>
        <input
          type="checkbox"
          name="clementine"
          id="clementine"
          value="Clementine"
        />
        <label for="clementine">Clementine</label>
        <input type="checkbox" name="coconut" id="coconut" value="Coconut" />
        <label for="coconut">Coconut</label>
        <input
          type="checkbox"
          name="crabapple"
          id="crabapple"
          value="Crabapple"
        />
        <label for="crabapple">Crabapple</label>
        <input type="checkbox" name="craisin" id="craisin" value="Craisin" />
        <label for="craisin">Craisin</label>
        <input
          type="checkbox"
          name="cranberry"
          id="cranberry"
          value="Cranberry"
        />
        <label for="cranberry">Cranberry</label>
        <input type="checkbox" name="currant" id="currant" value="Currant" />
        <label for="currant">Currant</label>
        <input type="checkbox" name="date" id="date" value="Date" />
        <label for="date">Date</label>
        <input type="checkbox" name="dewberry" id="dewberry" value="Dewberry" />
        <label for="dewberry">Dewberry</label>
        <input
          type="checkbox"
          name="dragonfruit"
          id="dragonfruit"
          value="Dragonfruit"
        />
        <label for="dragonfruit">Dragonfruit</label>
        <input
          type="checkbox"
          name="elderberry"
          id="elderberry"
          value="Elderberry"
        />
        <label for="elderberry">Elderberry</label>
        <input type="checkbox" name="fig" id="fig" value="Fig" />
        <label for="fig">Fig</label>
        <input
          type="checkbox"
          name="goji-berry"
          id="goji-berry"
          value="Goji Berry"
        />
        <label for="goji-berry">Goji Berry</label>
        <input
          type="checkbox"
          name="gooseberry"
          id="gooseberry"
          value="Gooseberry"
        />
        <label for="gooseberry">Gooseberry</label>
        <input type="checkbox" name="grape" id="grape" value="Grape" />
        <label for="grape">Grape</label>
        <input
          type="checkbox"
          name="grapefruit"
          id="grapefruit"
          value="Grapefruit"
        />
        <label for="grapefruit">Grapefruit</label>
        <input type="checkbox" name="guava" id="guava" value="Guava" />
        <label for="guava">Guava</label>
        <input
          type="checkbox"
          name="haskap-berry"
          id="haskap-berry"
          value="Haskap Berry"
        />
        <label for="haskap-berry">Haskap Berry</label>
        <input type="checkbox" name="hawthorn" id="hawthorn" value="Hawthorn" />
        <label for="hawthorn">Hawthorn</label>
        <input type="checkbox" name="honeydew" id="honeydew" value="Honeydew" />
        <label for="honeydew">Honeydew</label>
        <input
          type="checkbox"
          name="huckleberry"
          id="huckleberry"
          value="Huckleberry"
        />
        <label for="huckleberry">Huckleberry</label>
        <input
          type="checkbox"
          name="jackfruit"
          id="jackfruit"
          value="Jackfruit"
        />
        <label for="jackfruit">Jackfruit</label>
        <input
          type="checkbox"
          name="juniper-berry"
          id="juniper-berry"
          value="Juniper Berry"
        />
        <label for="juniper-berry">Juniper Berry</label>
        <input type="checkbox" name="kiwi" id="kiwi" value="Kiwi" />
        <label for="kiwi">Kiwi</label>
        <input type="checkbox" name="kokum" id="kokum" value="Kokum" />
        <label for="kokum">Kokum</label>
        <input type="checkbox" name="kumquat" id="kumquat" value="Kumquat" />
        <label for="kumquat">Kumquat</label>
        <input type="checkbox" name="lemon" id="lemon" value="Lemon" />
        <label for="lemon">Lemon</label>
        <input type="checkbox" name="lime" id="lime" value="Lime" />
        <label for="lime">Lime</label>
        <input
          type="checkbox"
          name="lingonberry"
          id="lingonberry"
          value="Lingonberry"
        />
        <label for="lingonberry">Lingonberry</label>
        <input
          type="checkbox"
          name="loganberry"
          id="loganberry"
          value="Loganberry"
        />
        <label for="loganberry">Loganberry</label>
        <input type="checkbox" name="lychee" id="lychee" value="Lychee" />
        <label for="lychee">Lychee</label>
        <input type="checkbox" name="mandarin" id="mandarin" value="Mandarin" />
        <label for="mandarin">Mandarin</label>
        <input type="checkbox" name="mango" id="mango" value="Mango" />
        <label for="mango">Mango</label>
        <input type="checkbox" name="mulberry" id="mulberry" value="Mulberry" />
        <label for="mulberry">Mulberry</label>
        <input
          type="checkbox"
          name="nectarine"
          id="nectarine"
          value="Nectarine"
        />
        <label for="nectarine">Nectarine</label>
        <input type="checkbox" name="orange" id="orange" value="Orange" />
        <label for="orange">Orange</label>
        <input type="checkbox" name="papaya" id="papaya" value="Papaya" />
        <label for="papaya">Papaya</label>
        <input
          type="checkbox"
          name="passion-fruit"
          id="passion-fruit"
          value="Passion Fruit"
        />
        <label for="passion-fruit">Passion Fruit</label>
        <input type="checkbox" name="peach" id="peach" value="Peach" />
        <label for="peach">Peach</label>
        <input type="checkbox" name="pear" id="pear" value="Pear" />
        <label for="pear">Pear</label>
        <input
          type="checkbox"
          name="persimmon"
          id="persimmon"
          value="Persimmon"
        />
        <label for="persimmon">Persimmon</label>
        <input
          type="checkbox"
          name="pineapple"
          id="pineapple"
          value="Pineapple"
        />
        <label for="pineapple">Pineapple</label>
        <input type="checkbox" name="plum" id="plum" value="Plum" />
        <label for="plum">Plum</label>
        <input
          type="checkbox"
          name="pomegranate"
          id="pomegranate"
          value="Pomegranate"
        />
        <label for="pomegranate">Pomegranate</label>
        <input type="checkbox" name="pomelo" id="pomelo" value="Pomelo" />
        <label for="pomelo">Pomelo</label>
        <input type="checkbox" name="prune" id="prune" value="Prune" />
        <label for="prune">Prune</label>
        <input type="checkbox" name="raisin" id="raisin" value="Raisn" />
        <label for="raisin">Raisin</label>
        <input
          type="checkbox"
          name="raspberry"
          id="raspberry"
          value="Raspberry"
        />
        <label for="raspberry">Raspberry</label>
        <input type="checkbox" name="rhubarb" id="rhubarb" value="Rhubarb" />
        <label for="rhubarb">Rhubarb</label>
        <input type="checkbox" name="rosehip" id="rosehip" value="Rosehip" />
        <label for="rosehip">Rosehip</label>
        <input
          type="checkbox"
          name="saskatoon-berry"
          id="saskatoon-berry"
          value="Saskatoon Berry"
        />
        <label for="saskatoon-berry">Saskatoon Berry</label>
        <input
          type="checkbox"
          name="sea-buckthorn"
          id="sea-buckthorn"
          value="Sea Buckthorn"
        />
        <label for="sea-buckthorn">Sea Buckthorn</label>
        <input
          type="checkbox"
          name="sloe-berry"
          id="sloe-berry"
          value="Sloe Berry"
        />
        <label for="sloe-berry">Sloe Berry</label>
        <input type="checkbox" name="soursop" id="soursop" value="Soursop" />
        <label for="soursop">Soursop</label>
        <input
          type="checkbox"
          name="star-fruit"
          id="star-fruit"
          value="Star Fruit"
        />
        <label for="star-fruit">Star Fruit</label>
        <input
          type="checkbox"
          name="strawberry"
          id="strawberry"
          value="Strawberry"
        />
        <label for="strawberry">Strawberry</label>
        <input type="checkbox" name="tamarind" id="tamarind" value="Tamarind" />
        <label for="tamarind">Tamarind</label>
        <input type="checkbox" name="tangelo" id="tangelo" value="Tangelo" />
        <label for="tangelo">Tangelo</label>
        <input
          type="checkbox"
          name="watermelon"
          id="watermelon"
          value="Watermelon"
        />
        <label for="watermelon">Watermelon</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Grains & Pasta</legend>
        <input type="checkbox" name="amaranth" id="amaranth" value="Amaranth" />
        <label for="amaranth">Amaranth</label>
        <input
          type="checkbox"
          name="angel-hair-pasta"
          id="angel-hair-pasta"
          value="Angel Hair Pasta"
        />
        <label for="angel-hair-pasta">Angel Hair Pasta</label>
        <input type="checkbox" name="barley" id="barley" value="Barley" />
        <label for="barley">Barley</label>
        <input
          type="checkbox"
          name="cauliflower-rice"
          id="cauliflower-rice"
          value="Cauliflower Rice"
        />
        <label for="cauliflower-rice">Cauliflower Rice</label>
        <input
          type="checkbox"
          name="corn-flakes"
          id="corn-flakes"
          value="Corn Flakes"
        />
        <label for="corn-flakes">Corn Flakes</label>
        <input type="checkbox" name="couscous" id="couscous" value="Couscous" />
        <label for="couscous">Couscous</label>
        <input
          type="checkbox"
          name="cream-of-wheat"
          id="cream-of-wheat"
          value="Cream of Wheat"
        />
        <label for="cream-of-wheat">Cream of Wheat</label>
        <input
          type="checkbox"
          name="crispy-rice-cereal"
          id="crispy-rice-cereal"
          value="Crispy Rice Cereal"
        />
        <label for="crispy-rice-cereal">Crispy Rice Cereal</label>
        <input
          type="checkbox"
          name="durum-wheat"
          id="durum-wheat"
          value="Durum Wheat"
        />
        <label for="durum-wheat">Durum Wheat</label>
        <input
          type="checkbox"
          name="egg-noodle"
          id="egg-noodle"
          value="Egg Noodle"
        />
        <label for="egg-noodle">Egg Noodle</label>
        <input type="checkbox" name="farro" id="farro" value="Farro" />
        <label for="farro">Farro</label>
        <input
          type="checkbox"
          name="fettucine"
          id="fettucine"
          value="Fettucine"
        />
        <label for="fettucine">Fettucine</label>
        <input type="checkbox" name="fusilli" id="fusilli" value="Fusilli" />
        <label for="fusilli">Fusilli</label>
        <input type="checkbox" name="gnocchi" id="gnocchi" value="Gnocchi" />
        <label for="gnocchi">Gnocchi</label>
        <input type="checkbox" name="granola" id="granola" value="Granola" />
        <label for="granola">Granola</label>
        <input type="checkbox" name="grits" id="grits" value="Grits" />
        <label for="grits">Grits</label>
        <input
          type="checkbox"
          name="kelp-noodle"
          id="kelp-noodle"
          value="Kelp Noodle"
        />
        <label for="kelp-noodle">Kelp Noodle</label>
        <input type="checkbox" name="lasagna" id="lasagna" value="Lasagna" />
        <label for="lasagna">Lasagna</label>
        <input type="checkbox" name="linguini" id="linguini" value="Linguini" />
        <label for="linguini">Linguini</label>
        <input type="checkbox" name="macaroni" id="macaroni" value="Macaroni" />
        <label for="macaroni">Macaroni</label>
        <input
          type="checkbox"
          name="manicotti"
          id="manicotti"
          value="Manicotti"
        />
        <label for="manicotti">Manicotti</label>
        <input type="checkbox" name="muesli" id="muesli" value="Muesli" />
        <label for="muesli">Muesli</label>
        <input type="checkbox" name="oats" id="oats" value="Oats" />
        <label for="oats">Oats</label>
        <input type="checkbox" name="orzo" id="orzo" value="Orzo" />
        <label for="orzo">Orzo</label>
        <input type="checkbox" name="penne" id="penne" value="Penne" />
        <label for="penne">Penne</label>
        <input type="checkbox" name="pilaf" id="pilaf" value="Pilaf" />
        <label for="pilaf">Pilaf</label>
        <input type="checkbox" name="quinoa" id="quinoa" value="Quinoa" />
        <label for="quinoa">Quinoa</label>
        <input type="checkbox" name="ramen" id="ramen" value="Ramen" />
        <label for="ramen">Ramen</label>
        <input type="checkbox" name="ravioli" id="ravioli" value="Ravioli" />
        <label for="ravioli">Ravioli</label>
        <input type="checkbox" name="rice" id="rice" value="Rice" />
        <label for="rice">Rice</label>
        <input
          type="checkbox"
          name="rice-noodle"
          id="rice-noodle"
          value="Rice Noodle"
        />
        <label for="rice-noodle">Rice Noodle</label>
        <input type="checkbox" name="rigatoni" id="rigatoni" value="Rigatoni" />
        <label for="rigatoni">Rigatoni</label>
        <input type="checkbox" name="rotini" id="rotini" value="Rotini" />
        <label for="rotini">Rotini</label>
        <input type="checkbox" name="semolina" id="semolina" value="Semolina" />
        <label for="semolina">Semolina</label>
        <input
          type="checkbox"
          name="shredded-wheat"
          id="shredded-wheat"
          value="Shredded Wheat"
        />
        <label for="shredded-wheat">Shredded Wheat</label>
        <input type="checkbox" name="sorghum" id="sorghum" value="Sorghum" />
        <label for="sorghum">Sorghum</label>
        <input
          type="checkbox"
          name="spaghetti"
          id="spaghetti"
          value="Spaghetti"
        />
        <label for="spaghetti">Spaghetti</label>
        <input
          type="checkbox"
          name="tagliatelle"
          id="tagliatelle"
          value="Tagliatelle"
        />
        <label for="tagliatelle">Tagliatelle</label>
        <input
          type="checkbox"
          name="tortellini"
          id="tortellini"
          value="Tortellini"
        />
        <label for="tortellini">Tortellini</label>
        <input
          type="checkbox"
          name="vermicelli"
          id="vermicelli"
          value="Vermicelli"
        />
        <label for="vermicelli">Vermicelli</label>
        <input
          type="checkbox"
          name="yuba-noodle"
          id="yuba-noodle"
          value="Yuba Noodle"
        />
        <label for="yuba-noodle">Yuba Noodle</label>
        <input type="checkbox" name="ziti" id="ziti" value="Ziti" />
        <label for="ziti">Ziti</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Meat</legend>
        <input type="checkbox" name="bacon" id="bacon" value="Bacon" />
        <label for="bacon">Bacon</label>
        <input type="checkbox" name="beef" id="beef" value="Beef" />
        <label for="beef">Beef</label>
        <input type="checkbox" name="bison" id="bison" value="Bison" />
        <label for="bison">Bison</label>
        <input type="checkbox" name="bologna" id="bologna" value="Bologna" />
        <label for="bologna">Bologna</label>
        <input
          type="checkbox"
          name="bratwurst"
          id="bratwurst"
          value="Bratwurst"
        />
        <label for="bratwurst">Bratwurst</label>
        <input type="checkbox" name="brisket" id="brisket" value="Brisket" />
        <label for="brisket">Brisket</label>
        <input type="checkbox" name="chicken" id="chicken" value="Chicken" />
        <label for="chicken">Chicken</label>
        <input type="checkbox" name="chorizo" id="chorizo" value="Chorizo" />
        <label for="chorizo">Chorizo</label>
        <input type="checkbox" name="duck" id="duck" value="Duck" />
        <label for="duck">Duck</label>
        <input type="checkbox" name="gammon" id="gammon" value="Gammon" />
        <label for="gammon">Gammon</label>
        <input type="checkbox" name="goose" id="goose" value="Goose" />
        <label for="goose">Goose</label>
        <input
          type="checkbox"
          name="guineafowl"
          id="guineafowl"
          value="Guineafowl"
        />
        <label for="guineafowl">Guineafowl</label>
        <input type="checkbox" name="ham" id="ham" value="Ham" />
        <label for="ham">Ham</label>
        <input type="checkbox" name="kielbasa" id="kielbasa" value="Kielbasa" />
        <label for="kielbasa">Kielbasa</label>
        <input type="checkbox" name="lamb" id="lamb" value="Lamb" />
        <label for="lamb">Lamb</label>
        <input
          type="checkbox"
          name="lap-cheong"
          id="lap-cheong"
          value="Lap Cheong &#40;Chinese Sausage&#41;"
        />
        <label for="lap-cheong">Lap Cheong &#40;Chinese Sausage&#41;</label>
        <input
          type="checkbox"
          name="mortadella"
          id="mortadella"
          value="Mortadella"
        />
        <label for="mortadella">Mortadella</label>
        <input type="checkbox" name="mutton" id="mutton" value="Mutton" />
        <label for="mutton">Mutton</label>
        <input type="checkbox" name="pancetta" id="pancetta" value="Pancetta" />
        <label for="pancetta">Pancetta</label>
        <input type="checkbox" name="pastrami" id="pastrami" value="Pastrami" />
        <label for="pastrami">Pastrami</label>
        <input
          type="checkbox"
          name="pepperoni"
          id="pepperoni"
          value="Pepperoni"
        />
        <label for="pepperoni">Pepperoni</label>
        <input type="checkbox" name="pheasant" id="pheasant" value="Pheasant" />
        <label for="pheasant">Pheasant</label>
        <input type="checkbox" name="pork" id="pork" value="Pork" />
        <label for="pork">Pork</label>
        <input
          type="checkbox"
          name="prosciutto"
          id="prosciutto"
          value="Prosciutto"
        />
        <label for="prosciutto">Prosciutto</label>
        <input type="checkbox" name="rabbit" id="rabbit" value="Rabbit" />
        <label for="rabbit">Rabbit</label>
        <input type="checkbox" name="salami" id="salami" value="Salami" />
        <label for="salami">Salami</label>
        <input type="checkbox" name="sausage" id="sausage" value="Sausage" />
        <label for="sausage">Sausage</label>
        <input type="checkbox" name="steak" id="steak" value="Steak" />
        <label for="steak">Steak</label>
        <input type="checkbox" name="turkey" id="turkey" value="Turkey" />
        <label for="turkey">Turkey</label>
        <input type="checkbox" name="veal" id="veal" value="Veal" />
        <label for="veal">Veal</label>
        <input
          type="checkbox"
          name="venison"
          id="venison"
          value="Venison &#40;Deer&#41;"
        />
        <label for="venison">Venison &#40;Deer&#41;</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Nuts</legend>
        <input type="checkbox" name="almond" id="almond" value="Almond" />
        <label for="almond">Almond</label>
        <input type="checkbox" name="baruka" id="baruka" value="Bar&#249;ka" />
        <label for="baruka">Bar&#249;ka</label>
        <input
          type="checkbox"
          name="brazil-nut"
          id="brazil-nut"
          value="Brazil Nut"
        />
        <label for="brazil-nut">Brazil Nut</label>
        <input
          type="checkbox"
          name="candlenut"
          id="candlenut"
          value="Candlenut"
        />
        <label for="candlenut">Candlenut</label>
        <input type="checkbox" name="cashew" id="cashew" value="Cashew" />
        <label for="cashew">Cashew</label>
        <input
          type="checkbox"
          name="ginkgo-nut"
          id="ginkgo-nut"
          value="Ginkgo Nut"
        />
        <label for="ginkgo-nut">Ginkgo Nut</label>
        <input type="checkbox" name="hazelnut" id="hazelnut" value="Hazelnut" />
        <label for="hazelnut">Hazelnut</label>
        <input
          type="checkbox"
          name="macadamia"
          id="macadamia"
          value="Macadamia"
        />
        <label for="macadamia">Macadamia</label>
        <input type="checkbox" name="peanut" id="peanut" value="Peanut" />
        <label for="peanut">Peanut</label>
        <input type="checkbox" name="pecan" id="pecan" value="Pecan" />
        <label for="pecan">Pecan</label>
        <input type="checkbox" name="pine-nut" id="pine-nut" value="Pine Nut" />
        <label for="pine-nut">Pine Nut</label>
        <input
          type="checkbox"
          name="pistachio"
          id="pistachio"
          value="Pistachio"
        />
        <label for="pistachio">Pistachio</label>
        <input type="checkbox" name="tigernut" id="tigernut" value="Tigernut" />
        <label for="tigernut">Tigernut</label>
        <input type="checkbox" name="walnut" id="walnut" value="Walnut" />
        <label for="walnut">Walnut</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Salty Food</legend>
        <input
          type="checkbox"
          name="breadcrumbs"
          id="breadcrumbs"
          value="Breadcrumbs"
        />
        <label for="breadcrumbs">Breadcrumbs</label>
        <input
          type="checkbox"
          name="cheese-puffs"
          id="cheese-puffs"
          value="Cheese Puffs"
        />
        <label for="cheese-puffs">Cheese Puffs</label>
        <input
          type="checkbox"
          name="corn-chip"
          id="corn-chip"
          value="Corn Chip"
        />
        <label for="corn-chip">Corn Chip</label>
        <input
          type="checkbox"
          name="corn-tortilla"
          id="corn-tortilla"
          value="Corn Tortilla"
        />
        <label for="corn-tortilla">Corn Tortilla</label>
        <input
          type="checkbox"
          name="cornbread"
          id="cornbread"
          value="Cornbread"
        />
        <label for="cornbread">Cornbread</label>
        <input type="checkbox" name="cracker" id="cracker" value="Cracker" />
        <label for="cracker">Cracker</label>
        <input type="checkbox" name="crouton" id="crouton" value="Crouton" />
        <label for="crouton">Crouton</label>
        <input type="checkbox" name="crumpet" id="crumpet" value="Crumpet" />
        <label for="crumpet">Crumpet</label>
        <input
          type="checkbox"
          name="flour-tortilla"
          id="flour-tortilla"
          value="Flour Tortilla"
        />
        <label for="flour-tortilla">Flour Tortilla</label>
        <input
          type="checkbox"
          name="french-fries"
          id="french-fries"
          value="French Fries"
        />
        <label for="french-fries">French Fries</label>
        <input
          type="checkbox"
          name="onion-ring"
          id="onion-ring"
          value="Onion Ring"
        />
        <label for="onion-ring">Onion Ring</label>
        <input type="checkbox" name="panko" id="panko" value="Panko" />
        <label for="panko">Panko</label>
        <input
          type="checkbox"
          name="pita-chip"
          id="pita-chip"
          value="Pita Chip"
        />
        <label for="pita-chip">Pita Chip</label>
        <input
          type="checkbox"
          name="plantain-chip"
          id="plantain-chip"
          value="Plantain Chip"
        />
        <label for="plantain-chip">Plantain Chip</label>
        <input type="checkbox" name="popcorn" id="popcorn" value="Popcorn" />
        <label for="popcorn">Popcorn</label>
        <input
          type="checkbox"
          name="pork-rind"
          id="pork-rind"
          value="Pork Rind"
        />
        <label for="pork-rind">Pork Rind</label>
        <input
          type="checkbox"
          name="potato-chip"
          id="potato-chip"
          value="Potato Chip"
        />
        <label for="potato-chip">Potato Chip</label>
        <input type="checkbox" name="pretzel" id="pretzel" value="Pretzel" />
        <label for="pretzel">Pretzel</label>
        <input
          type="checkbox"
          name="rice-cake"
          id="rice-cake"
          value="Rice Cake"
        />
        <label for="rice-cake">Rice Cake</label>
        <input type="checkbox" name="sev" id="sev" value="Sev" />
        <label for="sev">Sev</label>
        <input
          type="checkbox"
          name="soup-cracker"
          id="soup-cracker"
          value="Soup Cracker"
        />
        <label for="soup-cracker">Soup Cracker</label>
        <input
          type="checkbox"
          name="spinach-wrap"
          id="spinach-wrap"
          value="Spinach Wrap"
        />
        <label for="spinach-wrap">Spinach Wrap</label>
        <input
          type="checkbox"
          name="stuffing-mix"
          id="stuffing-mix"
          value="Stuffing Mix"
        />
        <label for="stuffing-mix">Stuffing Mix</label>
        <input
          type="checkbox"
          name="sweet-potato-fries"
          id="sweet-potato-fries"
        />
        <label for="sweet-potato-fries">Sweet Potato Fries</label>
        <input
          type="checkbox"
          name="taco-shell"
          id="taco-shell"
          value="Taco Shell"
        />
        <label for="taco-shell">Taco Shell</label>
        <input
          type="checkbox"
          name="tater-tots"
          id="tater-tots"
          value="Tater Tots"
        />
        <label for="tater-tots">Tater Tots</label>
        <input
          type="checkbox"
          name="tortilla-chip"
          id="tortilla-chip"
          value="Tortilla Chip"
        />
        <label for="tortilla-chip">Tortilla Chip</label>
        <input
          type="checkbox"
          name="tostada-shell"
          id="tostada-shell"
          value="Tostada Shell"
        />
        <label for="tostada-shell">Tostada Shell</label>
        <input
          type="checkbox"
          name="vegetable-chip"
          id="vegetable-chip"
          value="Vegetable Chip"
        />
        <label for="vegetable-chip">Vegetable Chip</label>
        <input
          type="checkbox"
          name="wasabi-pea"
          id="wasabi-pea"
          value="Wasabi Pea"
        />
        <label for="wasabi-pea">Wasabi Pea</label>
        <input
          type="checkbox"
          name="wheat-tortilla"
          id="wheat-tortilla"
          value="Wheat Tortilla"
        />
        <label for="wheat-tortilla">Wheat Tortilla</label>
        <input
          type="checkbox"
          name="yorkshire-pudding"
          id="yorkshire-pudding"
          value="Yorkshire Pudding"
        />
        <label for="yorkshire-pudding">Yorkshire Pudding</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Seafood</legend>
        <input type="checkbox" name="abalone" id="abalone" value="Abalone" />
        <label for="abalone">Abalone</label>
        <input
          type="checkbox"
          name="amberjack"
          id="amberjack"
          value="Amberjack"
        />
        <label for="amberjack">Amberjack</label>
        <input type="checkbox" name="anchovy" id="anchovy" value="Anchovy" />
        <label for="anchovy">Anchovy</label>
        <input type="checkbox" name="aonori" id="aonori" value="Aonori" />
        <label for="aonori">Aonori</label>
        <input type="checkbox" name="arame" id="arame" value="Arame" />
        <label for="arame">Arame</label>
        <input
          type="checkbox"
          name="arctic-char"
          id="arctic-char"
          value="Arctic Char"
        />
        <label for="arctic-char">Arctic Char</label>
        <input type="checkbox" name="bangus" id="bangus" value="Bangus" />
        <label for="bangus">Bangus</label>
        <input
          type="checkbox"
          name="barramundi"
          id="barramundi"
          value="Barramundi"
        />
        <label for="barramundi">Barramundi</label>
        <input type="checkbox" name="bass" id="bass" value="Bass" />
        <label for="bass">Bass</label>
        <input type="checkbox" name="bluefish" id="bluefish" value="Bluefish" />
        <label for="bluefish">Bluefish</label>
        <input type="checkbox" name="bottarga" id="bottarga" value="Bottarga" />
        <label for="bottarga">Bottarga</label>
        <input type="checkbox" name="branzino" id="branzino" value="Branzino" />
        <label for="branzino">Branzino</label>
        <input type="checkbox" name="bream" id="bream" value="Bream" />
        <label for="bream">Bream</label>
        <input type="checkbox" name="calamari" id="calamari" value="Calamari" />
        <label for="calamari">Calamari</label>
        <input type="checkbox" name="carp" id="carp" value="Carp" />
        <label for="carp">Carp</label>
        <input type="checkbox" name="catfish" id="catfish" value="Catfish" />
        <label for="catfish">Catfish</label>
        <input type="checkbox" name="caviar" id="caviar" value="Caviar" />
        <label for="caviar">Caviar</label>
        <input type="checkbox" name="clam" id="clam" value="Clam" />
        <label for="clam">Clam</label>
        <input type="checkbox" name="cod" id="cod" value="Cod" />
        <label for="cod">Cod</label>
        <input type="checkbox" name="conch" id="conch" value="Conch" />
        <label for="conch">Conch</label>
        <input type="checkbox" name="crab" id="crab" value="Crab" />
        <label for="crab">Crab</label>
        <input type="checkbox" name="crawfish" id="crawfish" value="Crawfish" />
        <label for="crawfish">Crawfish</label>
        <input
          type="checkbox"
          name="cuttlefish"
          id="cuttlefish"
          value="Cuttlefish"
        />
        <label for="cuttlefish">Cuttlefish</label>
        <input type="checkbox" name="dulse" id="dulse" value="Dulse" />
        <label for="dulse">Dulse</label>
        <input type="checkbox" name="eel" id="eel" value="Eel" />
        <label for="eel">Eel</label>
        <input type="checkbox" name="flathead" id="flathead" value="Flathead" />
        <label for="flathead">Flathead</label>
        <input type="checkbox" name="flounder" id="flounder" value="Flounder" />
        <label for="flounder">Flounder</label>
        <input type="checkbox" name="grouper" id="grouper" value="Grouper" />
        <label for="grouper">Grouper</label>
        <input type="checkbox" name="haddock" id="haddock" value="Haddock" />
        <label for="haddock">Haddock</label>
        <input type="checkbox" name="hake" id="hake" value="Hake" />
        <label for="hake">Hake</label>
        <input type="checkbox" name="halibut" id="halibut" value="Halibut" />
        <label for="halibut">Halibut</label>
        <input type="checkbox" name="herring" id="herring" value="Herring" />
        <label for="herring">Herring</label>
        <input
          type="checkbox"
          name="jellyfish"
          id="jellyfish"
          value="Jellyfish"
        />
        <label for="jellyfish">Jellyfish</label>
        <input type="checkbox" name="kelp" id="kelp" value="Kelp" />
        <label for="kelp">Kelp</label>
        <input type="checkbox" name="kingfish" id="kingfish" value="Kingfish" />
        <label for="kingfish">Kingfish</label>
        <input type="checkbox" name="kombu" id="kombu" value="Kombu" />
        <label for="kombu">Kombu</label>
        <input
          type="checkbox"
          name="langoustine"
          id="langoustine"
          value="Langoustine"
        />
        <label for="langoustine">Langoustine</label>
        <input
          type="checkbox"
          name="lemon-sole"
          id="lemon-sole"
          value="Lemon Sole"
        />
        <label for="lemon-sole">Lemon Sole</label>
        <input type="checkbox" name="lobster" id="lobster" value="Lobster" />
        <label for="lobster">Lobster</label>
        <input type="checkbox" name="mackerel" id="mackerel" value="Mackerel" />
        <label for="mackerel">Mackerel</label>
        <input
          type="checkbox"
          name="mahi-mahi"
          id="mahi-mahi"
          value="Mahi Mahi"
        />
        <label for="mahi-mahi">Mahi Mahi</label>
        <input type="checkbox" name="marlin" id="marlin" value="Marlin" />
        <label for="marlin">Marlin</label>
        <input type="checkbox" name="monkfish" id="monkfish" value="Monkfish" />
        <label for="monkfish">Monkfish</label>
        <input type="checkbox" name="mullet" id="mullet" value="Mullet" />
        <label for="mullet">Mullet</label>
        <input type="checkbox" name="mussel" id="mussel" value="Mussel" />
        <label for="mussel">Mussel</label>
        <input type="checkbox" name="nori" id="nori" value="Nori" />
        <label for="nori">Nori</label>
        <input type="checkbox" name="octopus" id="octopus" value="Octopus" />
        <label for="octopus">Octopus</label>
        <input type="checkbox" name="ogo" id="ogo" value="Ogo" />
        <label for="ogo">Ogo</label>
        <input type="checkbox" name="oyster" id="oyster" value="Oyster" />
        <label for="oyster">Oyster</label>
        <input
          type="checkbox"
          name="pangasius"
          id="pangasius"
          value="Pangasius"
        />
        <label for="pangasius">Pangasius</label>
        <input type="checkbox" name="perch" id="perch" value="Perch" />
        <label for="perch">Perch</label>
        <input type="checkbox" name="pike" id="pike" value="Pike" />
        <label for="pike">Pike</label>
        <input type="checkbox" name="plaice" id="plaice" value="Plaice" />
        <label for="plaice">Plaice</label>
        <input type="checkbox" name="pomfret" id="pomfret" value="Pomfret" />
        <label for="pomfret">Pomfret</label>
        <input type="checkbox" name="pompano" id="pompano" value="Pompano" />
        <label for="pompano">Pompano</label>
        <input type="checkbox" name="prawn" id="prawn" value="Prawn" />
        <label for="prawn">Prawn</label>
        <input type="checkbox" name="rockfish" id="rockfish" value="Rockfish" />
        <label for="rockfish">Rockfish</label>
        <input type="checkbox" name="roe" id="roe" value="Roe" />
        <label for="roe">Roe</label>
        <input type="checkbox" name="rohu" id="rohu" value="Rohu" />
        <label for="rohu">Rohu</label>
        <input type="checkbox" name="salmon" id="salmon" value="Salmon" />
        <label for="salmon">Salmon</label>
        <input type="checkbox" name="sardine" id="sardine" value="Sardine" />
        <label for="sardine">Sardine</label>
        <input type="checkbox" name="scallop" id="scallop" value="Scallop" />
        <label for="scallop">Scallop</label>
        <input type="checkbox" name="scampi" id="scampi" value="Scampi" />
        <label for="scampi">Scampi</label>
        <input
          type="checkbox"
          name="schnitzel"
          id="schnitzel"
          value="Schnitzel"
        />
        <label for="schnitzel">Schnitzel</label>
        <input type="checkbox" name="seaweed" id="seaweed" value="Seaweed" />
        <label for="seaweed">Seaweed</label>
        <input type="checkbox" name="shark" id="shark" value="Shark" />
        <label for="shark">Shark</label>
        <input type="checkbox" name="shrimp" id="shrimp" value="Shrimp" />
        <label for="shrimp">Shrimp</label>
        <input type="checkbox" name="snail" id="snail" value="Snail" />
        <label for="snail">Snail</label>
        <input type="checkbox" name="snapper" id="snapper" value="Snapper" />
        <label for="snapper">Snapper</label>
        <input type="checkbox" name="squid" id="squid" value="Squid" />
        <label for="squid">Squid</label>
        <input type="checkbox" name="sturgeon" id="sturgeon" value="Sturgeon" />
        <label for="sturgeon">Sturgeon</label>
        <input type="checkbox" name="surimi" id="surimi" value="Surimi" />
        <label for="surimi">Surimi</label>
        <input
          type="checkbox"
          name="swai"
          id="swai"
          value="Swai &#40;Basa&#41;"
        />
        <label for="swai">Swai &#40;Basa&#41;</label>
        <input
          type="checkbox"
          name="swordfish"
          id="swordfish"
          value="Swordfish"
        />
        <label for="swordfish">Swordfish</label>
        <input type="checkbox" name="tilapia" id="tilapia" value="Tilapia" />
        <label for="tilapia">Tilapia</label>
        <input type="checkbox" name="trout" id="trout" value="Trout" />
        <label for="trout">Trout</label>
        <input type="checkbox" name="tuna" id="tuna" value="Tuna" />
        <label for="tuna">Tuna</label>
        <input type="checkbox" name="turbot" id="turbot" value="Turbot" />
        <label for="turbot">Turbot</label>
        <input type="checkbox" name="urchin" id="urchin" value="Urchin" />
        <label for="urchin">Urchin</label>
        <input type="checkbox" name="wakami" id="wakami" value="Wakami" />
        <label for="wakami">Wakami</label>
        <input type="checkbox" name="walleye" id="walleye" value="Walleye" />
        <label for="walleye">Walleye</label>
        <input
          type="checkbox"
          name="whitefish"
          id="whitefish"
          value="Whitefish"
        />
        <label for="whitefish">Whitefish</label>
        <input type="checkbox" name="whiting" id="whiting" value="Whiting" />
        <label for="whiting">Whiting</label>
        <input
          type="checkbox"
          name="yellowtail"
          id="yellowtail"
          value="Yellowtail"
        />
        <label for="yellowtail">Yellowtail</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Seeds</legend>
        <input
          type="checkbox"
          name="apricot-kernel"
          id="apricot-kernel"
          value="Apricot Kernel"
        />
        <label for="apricot-kernel">Apricot Kernel</label>
        <input
          type="checkbox"
          name="basal-seed"
          id="basal-seed"
          value="Basal Seed"
        />
        <label for="basal-seed">Basal Seed</label>
        <input type="checkbox" name="chia" id="chia" value="Chia" />
        <label for="chia">Chia</label>
        <input
          type="checkbox"
          name="fennel-seed"
          id="fennel-seed"
          value="Fennel Seed"
        />
        <label for="fennel-seed">Fennel Seed</label>
        <input type="checkbox" name="flaxseed" id="flaxseed" value="Flaxseed" />
        <label for="flaxseed">Flaxseed</label>
        <input type="checkbox" name="hemp" id="hemp" value="Hemp" />
        <label for="hemp">Hemp</label>
        <input
          type="checkbox"
          name="jackfruit-seed"
          id="jackfruit-seed"
          value="Jackfruit Seed"
        />
        <label for="jackfruit-seed">Jackfruit Seed</label>
        <input
          type="checkbox"
          name="lotus-seed"
          id="lotus-seed"
          value="Lotus Seed"
        />
        <label for="lotus-seed">Lotus Seed</label>
        <input
          type="checkbox"
          name="melon-seed"
          id="melon-seed"
          value="Melon Seed"
        />
        <label for="melon-seed">Melon Seed</label>
        <input
          type="checkbox"
          name="nigella-seed"
          id="nigella-seed"
          value="Nigella Seed"
        />
        <label for="nigella-seed">Nigella Seed</label>
        <input
          type="checkbox"
          name="onion-seed"
          id="onion-seed"
          value="Onion Seed"
        />
        <label for="onion-seed">Onion Seed</label>
        <input
          type="checkbox"
          name="palm-seed"
          id="palm-seed"
          value="Palm Seed"
        />
        <label for="palm-seed">Palm Seed</label>
        <input
          type="checkbox"
          name="poppyseed"
          id="poppyseed"
          value="Poppyseed"
        />
        <label for="poppyseed">Poppyseed</label>
        <input
          type="checkbox"
          name="pumpkin-seed"
          id="pumpkin-seed"
          value="Pumpkin Seed"
        />
        <label for="pumpkin-seed">Pumpkin Seed</label>
        <input
          type="checkbox"
          name="sesame-seed"
          id="sesame-seed"
          value="Sesame Seed"
        />
        <label for="sesame-seed">Sesame Seed</label>
        <input
          type="checkbox"
          name="sunflower-seed"
          id="sunflower-seed"
          value="Sunflower Seed"
        />
        <label for="sunflower-seed">Sunflower Seed</label>
        <input
          type="checkbox"
          name="wattleseed"
          id="wattleseed"
          value="Wattleseed"
        />
        <label for="wattleseed">Wattleseed</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Soup, Stew, Broth, & Stock</legend>
        <input
          type="checkbox"
          name="bean-soup-mix"
          id="bean-soup-mix"
          value="Bean Soup Mix"
        />
        <label for="bean-soup-mix">Bean Soup Mix</label>
        <input
          type="checkbox"
          name="beef-broth"
          id="beef-broth"
          value="Beef Broth"
        />
        <label for="beef-broth">Beef Broth</label>
        <input
          type="checkbox"
          name="beef-stock"
          id="beef-stock"
          value="Beef Stock"
        />
        <label for="beef-stock">Beef Stock</label>
        <input
          type="checkbox"
          name="bone-broth"
          id="bone-broth"
          value="Bone Broth"
        />
        <label for="bone-broth">Bone Broth</label>
        <input
          type="checkbox"
          name="bouillon-cube"
          id="bouillon-cube"
          value="Bouillon Cube"
        />
        <label for="bouillon-cube">Bouillon Cube</label>
        <input type="checkbox" name="bovril" id="bovril" value="Bovril" />
        <label for="bovril">Bovril</label>
        <input
          type="checkbox"
          name="broccoli-cheddar"
          id="broccoli-cheddar"
          value="Broccoli Cheddar"
        />
        <label for="broccoli-cheddar-soup">Broccoli Cheddar</label>
        <input
          type="checkbox"
          name="chicken-broth"
          id="chicken-broth"
          value="Chicken Broth"
        />
        <label for="chicken-broth">Chicken Broth</label>
        <input
          type="checkbox"
          name="chicken-mushroom"
          id="chicken-mushroom"
          value="Chicken Mushroom"
        />
        <label for="chicken-mushroom">Chicken Mushroom</label>
        <input
          type="checkbox"
          name="chicken-noodle"
          id="chicken-noodle"
          value="Chicken Noodle"
        />
        <label for="chicken-noodle">Chicken Noodle</label>
        <input
          type="checkbox"
          name="chicken-soup-mix"
          id="chicken-soup-mix"
          value="Chicken Soup Mix"
        />
        <label for="chicken-soup-mix">Chicken Soup Mix</label>
        <input
          type="checkbox"
          name="chicken-stock"
          id="chicken-stock"
          value="Chicken Stock"
        />
        <label for="chicken-stock">Chicken Stock</label>
        <input
          type="checkbox"
          name="clam-chowder"
          id="clam-chowder"
          value="Clam Chowder"
        />
        <label for="clam-chowder">Clam Chowder</label>
        <input
          type="checkbox"
          name="clam-juice"
          id="clam-juice"
          value="Clam Juice"
        />
        <label for="clam-juice">Clam Juice</label>
        <input
          type="checkbox"
          name="corn-chowder"
          id="corn-chowder"
          value="Corn Chowder"
        />
        <label for="corn-chowder">Corn Chowder</label>
        <input
          type="checkbox"
          name="cream-of-asparagus"
          id="cream-of-asparagus"
          value="Cream of Asparagus"
        />
        <label for="cream-of-asparagus">Cream of Asparagus</label>
        <input
          type="checkbox"
          name="cream-of-bacon"
          id="cream-of-bacon"
          value="Cream of Bacon"
        />
        <label for="cream-of-bacon">Cream of Bacon</label>
        <input
          type="checkbox"
          name="cream-of-broccoli"
          id="cream-of-broccoli"
          value="Cream of Broccoli"
        />
        <label for="cream-of-broccoli">Cream of Broccoli</label>
        <input
          type="checkbox"
          name="cream-of-cauliflower"
          id="cream-of-cauliflower"
          value="Cream of Cauliflower"
        />
        <label for="cream-of-cauliflower">Cream of Cauliflower</label>
        <input
          type="checkbox"
          name="cream-of-celery"
          id="cream-of-celery"
          value="Cream of Celery"
        />
        <label for="cream-of-celery">Cream of Celery</label>
        <input
          type="checkbox"
          name="cream-of-chicken"
          id="cream-of-chicken"
          value="Cream of Chicken"
        />
        <label for="cream-of-chicken">Cream of Chicken</label>
        <input
          type="checkbox"
          name="cream-of-mushroom"
          id="cream-of-mushroom"
          value="Cream of Mushroom"
        />
        <label for="cream-of-mushroom">Cream of Mushroom</label>
        <input
          type="checkbox"
          name="cream-of-potato"
          id="cream-of-potato"
          value="Cream of Potato"
        />
        <label for="cream-of-potato">Cream of Potato</label>
        <input
          type="checkbox"
          name="cream-of-tomato"
          id="cream-of-tomato"
          value="Cream of Tomato"
        />
        <label for="cream-of-tomato">Cream of Tomato</label>
        <input
          type="checkbox"
          name="green-pea-soup"
          id="green-pea-soup"
          value="Green Pea Soup"
        />
        <label for="green-pea-soup">Green Pea Soup</label>
        <input
          type="checkbox"
          name="ham-stock"
          id="ham-stock"
          value="Ham Stock"
        />
        <label for="ham-stock">Ham Stock</label>
        <input
          type="checkbox"
          name="lentil-soup"
          id="lentil-soup"
          value="Lentil Soup"
        />
        <label for="lentil-soup">Lentil Soup</label>
        <input
          type="checkbox"
          name="lobster-bisque"
          id="lobster-bisque"
          value="Lobster Bisque"
        />
        <label for="lobster-bisque">Lobster Bisque</label>
        <input
          type="checkbox"
          name="minestrone"
          id="minestrone"
          value="Minestrone"
        />
        <label for="minestrone">Minestrone</label>
        <input
          type="checkbox"
          name="miso-soup"
          id="miso-soup"
          value="Miso Soup"
        />
        <label for="miso-soup">Miso Soup</label>
        <input
          type="checkbox"
          name="onion-soup"
          id="onion-soup"
          value="Onion Soup"
        />
        <label for="onion-soup">Onion Soup</label>
        <input type="checkbox" name="oxtail" id="oxtail" value="Oxtail" />
        <label for="oxtail">Oxtail</label>
        <input type="checkbox" name="pho" id="pho" value="Pho" />
        <label for="pho">Pho</label>
        <input
          type="checkbox"
          name="pork-bean-soup"
          id="pork-bean-soup"
          value="Pork & Beans Soup"
        />
        <label for="pork-bean-soup">Pork & Beans Soup</label>
        <input
          type="checkbox"
          name="pork-broth"
          id="pork-broth"
          value="Pork Broth"
        />
        <label for="pork-broth">Pork Broth</label>
        <input
          type="checkbox"
          name="pork-stock"
          id="pork-stock"
          value="Pork Stock"
        />
        <label for="pork-stock">Pork Stock</label>
        <input
          type="checkbox"
          name="potato-soup-mix"
          id="potato-soup-mix"
          value="Potato Soup Mix"
        />
        <label for="potato-soup-mix">Potato Soup Mix</label>
        <input
          type="checkbox"
          name="ramen-noodle-soup"
          id="ramen-noodle-soup"
          value="Ramen Noodle Mix"
        />
        <label for="ramen-noodle-soup">Ramen Noodle Soup</label>
        <input
          type="checkbox"
          name="seafood-stock"
          id="seafood-stock"
          value="Seafood Stock"
        />
        <label for="seafood-stock">Seafood Stock</label>
        <input
          type="checkbox"
          name="split-pea"
          id="split-pea"
          value="Split Pea"
        />
        <label for="split-pea">Split Pea</label>
        <input
          type="checkbox"
          name="stock-paste"
          id="stock-paste"
          value="Stock Paste"
        />
        <label for="stock-paste">Stock Paste</label>
        <input
          type="checkbox"
          name="tomato-bisque"
          id="tomato-bisque"
          value="Tomato Bisque"
        />
        <label for="tomato-bisque">Tomato Bisque</label>
        <input
          type="checkbox"
          name="tomato-bisque-mix"
          id="tomato-bisque-mix"
          value="Tomato Bisque Mix"
        />
        <label for="tomato-bisque-mix">Tomato Bisque Mix</label>
        <input
          type="checkbox"
          name="tomato-soup"
          id="tomato-soup"
          value="Tomato Soup"
        />
        <label for="tomato-soup">Tomato Soup</label>
        <input
          type="checkbox"
          name="turkey-broth"
          id="turkey-broth"
          value="Turkey Broth"
        />
        <label for="turkey-broth">Turkey Broth</label>
        <input
          type="checkbox"
          name="turkey-stock"
          id="turkey-stock"
          value="Turkey Stock"
        />
        <label for="turkey-stock">Turkey Stock</label>
        <input
          type="checkbox"
          name="vegetable-broth"
          id="vegetable-broth"
          value="Vegetable Broth"
        />
        <label for="vegetable-broth">Vegetable Broth</label>
        <input
          type="checkbox"
          name="vegetable-soup"
          id="vegetable-soup"
          value="Vegetable Soup"
        />
        <label for="vegetable-soup">Vegetable Soup</label>
        <input
          type="checkbox"
          name="vegetable-soup-mix"
          id="vegetable-soup-mix"
          value="Vegetable Soup Mix"
        />
        <label for="vegetable-soup-mix">Vegetable Soup Mix</label>
        <input
          type="checkbox"
          name="vegetable-stock"
          id="vegetable-stock"
          value="Vegetable Stock"
        />
        <label for="vegetable-stock">Vegetable Stock</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Spices</legend>
        <input
          type="checkbox"
          name="adobo-seasoning"
          id="adobo-seasoning"
          value="Adobo Seasoning"
        />
        <label for="adobo-seasoning">Adobo Seasoning</label>
        <input
          type="checkbox"
          name="all-purpose-seasoning"
          id="all-purpose-seasoning"
          value="All-Purpose Seasoning"
        />
        <label for="all-purpose-seasoning">All-Purpose Seasoning</label>
        <input type="checkbox" name="allspice" id="allspice" value="Allspice" />
        <label for="allspice">Allspice</label>
        <input type="checkbox" name="aniseed" id="aniseed" value="Aniseed" />
        <label for="aniseed">Aniseed</label>
        <input
          type="checkbox"
          name="apple-pie-spice"
          id="apple-pie-spice"
          value="Apple Pie Spice"
        />
        <label for="apple-pie-spice">Apple Pie Spice</label>
        <input
          type="checkbox"
          name="au-jus-mix"
          id="au-jus-mix"
          value="Au Jus Mix"
        />
        <label for="au-jus-mix">Au Jus Mix</label>
        <input
          type="checkbox"
          name="barbecue-seasoning"
          id="barbecue-seasoning"
          value="Barbecue Seasoning"
        />
        <label for="barbecue-seasoning">Barbecue Seasoning</label>
        <input type="checkbox" name="basil" id="basil" value="Basil" />
        <label for="basil">Basil</label>
        <input type="checkbox" name="bay-leaf" id="bay-leaf" value="Bay Leaf" />
        <label for="bay-leaf">Bay Leaf</label>
        <input type="checkbox" name="berbere" id="berbere" value="Berbere" />
        <label for="berbere">Berbere</label>
        <input
          type="checkbox"
          name="black-pepper"
          id="black-pepper"
          value="Black Pepper"
        />
        <label for="black-pepper">Black Pepper</label>
        <input
          type="checkbox"
          name="cajun-blend"
          id="cajun-blend"
          value="Cajun Blend"
        />
        <label for="cajun-blend">Cajun Blend</label>
        <input type="checkbox" name="caraway" id="caraway" value="Caraway" />
        <label for="caraway">Caraway</label>
        <input type="checkbox" name="cardamom" id="cardamom" value="Cardamom" />
        <label for="cardamom">Cardamom</label>
        <input
          type="checkbox"
          name="carne-asada"
          id="carne-asada"
          value="Carne Asada"
        />
        <label for="carne-asada">Carne Asada</label>
        <input
          type="checkbox"
          name="caribbean-jerk"
          id="caribbean-jerk"
          value="Caribbean Jerk"
        />
        <label for="caribbean-jerk">Caribbean Jerk</label>
        <input
          type="checkbox"
          name="carom-seed"
          id="carom-seed"
          value="Carom Seed"
        />
        <label for="carom-seed">Carom Seed</label>
        <input
          type="checkbox"
          name="cayenne-pepper"
          id="cayenne-pepper"
          value="Cayenne Pepper"
        />
        <label for="cayenne-pepper">Cayenne Pepper</label>
        <input
          type="checkbox"
          name="celery-powder"
          id="celery-powder"
          value="Celery Powder"
        />
        <label for="celery-powder">Celery Powder</label>
        <input
          type="checkbox"
          name="celery-salt"
          id="celery-salt"
          value="Celery Salt"
        />
        <label for="celery-salt">Celery Salt</label>
        <input
          type="checkbox"
          name="celery-seed"
          id="celery-seed"
          value="Celery Seed"
        />
        <label for="celery-seed">Celery Seed</label>
        <input
          type="checkbox"
          name="chicken-seasoning"
          id="chicken-seasoning"
          value="Chicken Seasoning"
        />
        <label for="chicken-seasoning">Chicken Seasoning</label>
        <input
          type="checkbox"
          name="chili-flake"
          id="chili-flake"
          value="Chili Flake"
        />
        <label for="chili-flake">Chili Flake</label>
        <input
          type="checkbox"
          name="chili-lime-blend"
          id="chili-lime-blend"
          value="Chili-Lime Blend"
        />
        <label for="chili-lime-blend">Chili-Lime Blend</label>
        <input
          type="checkbox"
          name="chili-powder"
          id="chili-powder"
          value="Chili Powder"
        />
        <label for="chili-powder">Chili Powder</label>
        <input
          type="checkbox"
          name="chipotle-blend"
          id="chipotle-blend"
          value="Chipotle Blend"
        />
        <label for="chipotle-blend">Chipotle Blend</label>
        <input type="checkbox" name="chive" id="chive" value="Chive" />
        <label for="chive">Chive</label>
        <input type="checkbox" name="cilantro" id="cilantro" value="Cilantro" />
        <label for="cilantro">Cilantro</label>
        <input type="checkbox" name="cinnamon" id="cinnamon" value="Cinnamon" />
        <label for="cinnamon">Cinnamon</label>
        <input type="checkbox" name="clove" id="clove" value="Clove" />
        <label for="clove">Clove</label>
        <input
          type="checkbox"
          name="coriander"
          id="coriander"
          value="Coriander"
        />
        <label for="coriander">Coriander</label>
        <input
          type="checkbox"
          name="crab-boil-blend"
          id="crab-boil-blend"
          value="Crab Boil Blend"
        />
        <label for="crab-boil-blend">Crab Boil Blend</label>
        <input
          type="checkbox"
          name="creole-seasoning"
          id="creole-seasoning"
          value="Creole Seasoning"
        />
        <label for="creole-seasoning">Creole Seasoning</label>
        <input type="checkbox" name="cumin" id="cumin" value="Cumin" />
        <label for="cumin">Cumin</label>
        <input
          type="checkbox"
          name="curry-powder"
          id="curry-powder"
          value="Curry Powder"
        />
        <label for="curry-powder">Curry Powder</label>
        <input type="checkbox" name="dill" id="dill" value="Dill" />
        <label for="dill">Dill</label>
        <input
          type="checkbox"
          name="everything-bagel"
          id="everything-bagel"
          value="Everything Bagel"
        />
        <label for="everything-bagel">Everything Bagel</label>
        <input
          type="checkbox"
          name="fajita-seasoning"
          id="fajita-seasoning"
          value="Fajita Seasoning"
        />
        <label for="fajita-seasoning">Fajita Seasoning</label>
        <input
          type="checkbox"
          name="fennel-seed"
          id="fennel-seed"
          value="Fennel Seed"
        />
        <label for="fennel-seed">Fennel Seed</label>
        <input
          type="checkbox"
          name="fenugreek"
          id="fenugreek"
          value="Fenugreek"
        />
        <label for="fenugreek">Fenugreek</label>
        <input
          type="checkbox"
          name="fines-herbes"
          id="fines-herbes"
          value="Fines Herbes"
        />
        <label for="fines-herbes">Fines Herbes</label>
        <input type="checkbox" name="galangal" id="galangal" value="Galangal" />
        <label for="galangal">Galangal</label>
        <input
          type="checkbox"
          name="garam-masala"
          id="garam-masala"
          value="Garam Masala"
        />
        <label for="garam-masala">Garam Masala</label>
        <input
          type="checkbox"
          name="garlic-herb-blend"
          id="garlic-herb-blend"
          value="Garlic-Herb Blend"
        />
        <label for="garlic-herb-blend">Garlic-Herb Blend</label>
        <input
          type="checkbox"
          name="garlic-pepper-blend"
          id="garlic-pepper-blend"
          value="Garlic-Pepper Blend"
        />
        <label for="garlic-pepper-blend">Garlic-Pepper Blend</label>
        <input
          type="checkbox"
          name="garlic-powder"
          id="garlic-powder"
          value="Garlic Powder"
        />
        <label for="garlic-powder">Garlic Powder</label>
        <input
          type="checkbox"
          name="garlic-salt"
          id="garlic-salt"
          value="Garlic Salt"
        />
        <label for="garlic-salt">Garlic Salt</label>
        <input type="checkbox" name="ginger" id="ginger" value="GInger" />
        <label for="ginger">Ginger</label>
        <input
          type="checkbox"
          name="gingerbread-spice"
          id="gingerbread-spice"
          value="Gingerbread Spice"
        />
        <label for="gingerbread-spice">Gingerbread Spice</label>
        <input
          type="checkbox"
          name="gochugaru"
          id="gochugaru"
          value="Gochugaru"
        />
        <label for="gochugaru">Gochugaru</label>
        <input
          type="checkbox"
          name="gravy-mix"
          id="gravy-mix"
          value="Gravy Mix"
        />
        <label for="gravy-mix">Gravy Mix</label>
        <input
          type="checkbox"
          name="greek-blend"
          id="greek-blend"
          value="Greek Blend"
        />
        <label for="greek-blend">Greek Blend</label>
        <input
          type="checkbox"
          name="harissa-blend"
          id="harissa-blend"
          value="Harissa Blend"
        />
        <label for="harissa-blend">Harissa Blend</label>
        <input
          type="checkbox"
          name="herbes-de-provence"
          id="herbes-de-provence"
          value="Herbes de Provence"
        />
        <label for="herbes-de-provence">Herbes de Provence</label>
        <input
          type="checkbox"
          name="himalayan-pink-salt"
          id="himalayan-pink-salt"
          value="Himalayan Pink Salt"
        />
        <label for="himalayan-pink-salt">Himalayan Pink Salt</label>
        <input
          type="checkbox"
          name="italian-blend"
          id="italian-blend"
          value="Italian Blend"
        />
        <label for="italian-blend">Italian Blend</label>
        <input type="checkbox" name="lavender" id="lavender" value="Lavender" />
        <label for="lavender">Lavender</label>
        <input
          type="checkbox"
          name="lemon-pepper-blend"
          id="lemon-pepper-blend"
          value="Lemon-Pepper Blend"
        />
        <label for="lemon-pepper-blend">Lemon-Pepper Blend</label>
        <input
          type="checkbox"
          name="lemon-zest"
          id="lemon-zest"
          value="Lemon Zest"
        />
        <label for="lemon-zest">Lemon Zest</label>
        <input
          type="checkbox"
          name="lemongrass"
          id="lemongrass"
          value="Lemongrass"
        />
        <label for="lemongrass">Lemongrass</label>
        <input
          type="checkbox"
          name="lime-zest"
          id="lime-zest"
          value="Lime Zest"
        />
        <label for="lime-zest">Lime Zest</label>
        <input
          type="checkbox"
          name="liquid-smoke"
          id="liquid-smoke"
          value="Liquid Smoke"
        />
        <label for="liquid-smoke">Liquid Smoke</label>
        <input type="checkbox" name="marjoram" id="marjoram" value="Marjoram" />
        <label for="marjoram">Marjoram</label>
        <input type="checkbox" name="matcha" id="matcha" value="Matcha" />
        <label for="matcha">Matcha</label>
        <input
          type="checkbox"
          name="mesquite-blend"
          id="mesquite-blend"
          value="Mesquite Blend"
        />
        <label for="mesquite-blend">Mesquite Blend</label>
        <input
          type="checkbox"
          name="mexican-blend"
          id="mexican-blend"
          value="Mexican Blend"
        />
        <label for="mexican-blend">Mexican Blend</label>
        <input type="checkbox" name="mint" id="mint" value="Mint" />
        <label for="mint">Mint</label>
        <input type="checkbox" name="miso" id="miso" value="Miso" />
        <label for="miso">Miso</label>
        <input
          type="checkbox"
          name="monosodium-glutamate"
          id="monosodium-glutamate"
          value="Monosodium Glutamate &#40;MSG&#41;"
        />
        <label for="monosodium-glutamate"
          >Monosodium Glutamate &#40;MSG&#41;</label
        >
        <input
          type="checkbox"
          name="moroccan-blend"
          id="moroccan-blend"
          value="Moroccan Blend"
        />
        <label for="moroccan-blend">Moroccan Blend</label>
        <input
          type="checkbox"
          name="mushroom-seasoning"
          id="mushroom-seasoning"
          value="Mushroom Seasoning"
        />
        <label for="mushroom-seasoning">Mushroom Seasoning</label>
        <input
          type="checkbox"
          name="mustard-powder"
          id="mustard-powder"
          value="Mustard Powder"
        />
        <label for="mustard-powder">Mustard Powder</label>
        <input
          type="checkbox"
          name="mustard-seed"
          id="mustard-seed"
          value="Mustard Seed"
        />
        <label for="mustard-seed">Mustard Seed</label>
        <input type="checkbox" name="nutmeg" id="nutmeg" value="Nutmeg" />
        <label for="nutmeg">Nutmeg</label>
        <input type="checkbox" name="old-bay" id="old-bay" value="Old Bay" />
        <label for="old-bay">Old Bay</label>
        <input
          type="checkbox"
          name="onion-powder"
          id="onion-powder"
          value="Onion Powder"
        />
        <label for="onion-powder">Onion Powder</label>
        <input
          type="checkbox"
          name="onion-salt"
          id="onion-salt"
          value="Onion Salt"
        />
        <label for="onion-salt">Onion Salt</label>
        <input
          type="checkbox"
          name="orange-peel"
          id="orange-peel"
          value="Orange Peel"
        />
        <label for="orange-peel">Orange Peel</label>
        <input type="checkbox" name="oregano" id="oregano" value="Oregano" />
        <label for="oregano">Oregano</label>
        <input type="checkbox" name="paprika" id="paprika" value="Paprika" />
        <label for="paprika">Paprika</label>
        <input type="checkbox" name="parsley" id="parsley" value="Parsley" />
        <label for="parsley">Parsley</label>
        <input
          type="checkbox"
          name="pizza-seasoning"
          id="pizza-seasoning"
          value="Pizza Seasoning"
        />
        <label for="pizza-seasoning">Pizza Seasoning</label>
        <input
          type="checkbox"
          name="potassium-salt"
          id="potassium-salt"
          value="Potassium Salt"
        />
        <label for="potassium-salt">Potassium Salt</label>
        <input
          type="checkbox"
          name="pumpkin-pie-spice"
          id="pumpkin-pie-spice"
          value="Pumpkin Pie Spice"
        />
        <label for="pumpkin-pie-spice">Pumpkin Pie Spice</label>
        <input
          type="checkbox"
          name="ranch-seasoning"
          id="ranch-seasoning"
          value="Racnh Seasoning"
        />
        <label for="ranch-seasoning">Ranch Seasoning</label>
        <input type="checkbox" name="rosemary" id="rosemary" value="Rosemary" />
        <label for="rosemary">Rosemary</label>
        <input type="checkbox" name="sage" id="sage" value="Sage" />
        <label for="sage">Sage</label>
        <input type="checkbox" name="salt" id="salt" value="Salt" />
        <label for="salt">Salt</label>
        <input
          type="checkbox"
          name="seafood-seasoning"
          id="seafood-seasoning"
          value="Seafood Seasoning"
        />
        <label for="seafood-seasoning">Seafood Seasoning</label>
        <input type="checkbox" name="shawarma" id="shawarma" value="Shawarma" />
        <label for="shawarma">Shawarma</label>
        <input
          type="checkbox"
          name="sriracha-blend"
          id="sriracha-blend"
          value="Sriracha Blend"
        />
        <label for="sriracha-blend">Sriracha Blend</label>
        <input
          type="checkbox"
          name="star-anise"
          id="star-anise"
          value="Star Anise"
        />
        <label for="star-anise">Star Anise</label>
        <input
          type="checkbox"
          name="steak-seasoning"
          id="steak-seasoning"
          value="Steak Seasoning"
        />
        <label for="steak-seasoning">Steak Seasoning</label>
        <input type="checkbox" name="sumac" id="sumac" value="Sumac" />
        <label for="sumac">Sumac</label>
        <input
          type="checkbox"
          name="table-blend"
          id="table-blend"
          value="Table Blend"
        />
        <label for="table-blend">Table Blend</label>
        <input
          type="checkbox"
          name="taco-seasoning"
          id="taco-seasoning"
          value="Taco Seasoning"
        />
        <label for="taco-seasoning">Taco Seasoning</label>
        <input type="checkbox" name="tajin" id="tajin" value="Tajin" />
        <label for="tajin">Tajin</label>
        <input type="checkbox" name="tandoori" id="tandoori" value="Tandoori" />
        <label for="tandoori">Tandoori</label>
        <input type="checkbox" name="tarragon" id="tarragon" value="Tarragon" />
        <label for="tarragon">Tarragon</label>
        <input
          type="checkbox"
          name="teriyaki-marinade"
          id="teriyaki-marinade"
          value="Teriyaki Marinade"
        />
        <label for="teriyaki-marinade">Teriyaki Marinade</label>
        <input
          type="checkbox"
          name="thai-curry-paste"
          id="thai-curry-paste"
          value="Thai Curry Paste"
        />
        <label for="thai-curry-paste">Thai Curry Paste</label>
        <input
          type="checkbox"
          name="thai-seasoning"
          id="thai-seasoning"
          value="Thai Seasoning"
        />
        <label for="thai-seasoning">Thai Seasoning</label>
        <input type="checkbox" name="thyme" id="thyme" value="Thyme" />
        <label for="thyme">Thyme</label>
        <input type="checkbox" name="turmeric" id="turmeric" value="Turmeric" />
        <label for="turmeric">Turmeric</label>
        <input
          type="checkbox"
          name="wasabi-powder"
          id="wasabi-powder"
          value="Wasabi Powder"
        />
        <label for="wasabi-powder">Wasabi Powder</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Supplements</legend>
        <input
          type="checkbox"
          name="acai-powder"
          id="acai-powder"
          value="A&#231;ai Powder"
        />
        <label for="acai-powder">A&#231;ai Powder</label>
        <input
          type="checkbox"
          name="almond-extract"
          id="almond-extract"
          value="Almond Extract"
        />
        <label for="almond-extract">Almond Extract</label>
        <input
          type="checkbox"
          name="almond-protein"
          id="almond-protein"
          value="Almond Protein"
        />
        <label for="almond-protein">Almond Protein</label>
        <input
          type="checkbox"
          name="ashwagandha"
          id="ashwagandha"
          value="Ashwaganda"
        />
        <label for="ashwagandha">Ashwagandha</label>
        <input
          type="checkbox"
          name="b-vitamins"
          id="b-vitamins"
          value="B-Vitamins"
        />
        <label for="b-vitamins">B-Vitamins</label>
        <input
          type="checkbox"
          name="banana-extract"
          id="banana-extract"
          value="Banana Extract"
        />
        <label for="banana-extract">Banana Extract</label>
        <input
          type="checkbox"
          name="berry-extract"
          id="berry-extract"
          value="Berry Extract"
        />
        <label for="berry-extract">Berry Extract</label>
        <input
          type="checkbox"
          name="branched-chain-amino-acids"
          id="branched-chain-amino-acids"
          value="Branched-Chain Amino Acids &#40;BCAAs&#41;"
        />
        <label for="branched-chain-amino-acids"
          >Branched-Chain Amino Acids &#40;BCAAs&#41;</label
        >
        <input
          type="checkbox"
          name="brewers-yeast"
          id="brewers-yeast"
          value="Brewer's Yeast"
        />
        <label for="brewers-yeast">Brewer's Yeast</label>
        <input
          type="checkbox"
          name="butter-extract"
          id="butter-extract"
          value="Butter Extract"
        />
        <label for="butter-extract">Butter Extract</label>
        <input
          type="checkbox"
          name="butterscotch-extract"
          id="butterscotch-extract"
          value="Butterscotch Extract"
        />
        <label for="butterscotch-extract">Butterscotch Extract</label>
        <input
          type="checkbox"
          name="calcium-lactate"
          id="calcium-lactate"
          value="Calcium Lactate"
        />
        <label for="calcium-lactate">Calcium Lactate</label>
        <input type="checkbox" name="cannabis" id="cannabis" value="Cannabis" />
        <label for="cannabis">Cannabis</label>
        <input
          type="checkbox"
          name="caramel-extract"
          id="caramel-extract"
          value="Caramel Extract"
        />
        <label for="caramel-extract">Caramel Extract</label>
        <input type="checkbox" name="casein" id="casein" value="Casein" />
        <label for="casein">Casein</label>
        <input type="checkbox" name="cbd-oil" id="cbd-oil" value="CBD Oil" />
        <label for="cbd-oil">CBD Oil</label>
        <input
          type="checkbox"
          name="charcoal-powder"
          id="charcoal-powder"
          value="Charcoal Powder"
        />
        <label for="charcoal-powder">Charcoal Powder</label>
        <input
          type="checkbox"
          name="cherry-extract"
          id="cherry-extract"
          value="Cherry Extract"
        />
        <label for="cherry-extract">Cherry Extract</label>
        <input
          type="checkbox"
          name="chocolate-extract"
          id="chocolate-extract"
          value="Chocolate Extract"
        />
        <label for="chocolate-extract">Chocolate Extract</label>
        <input
          type="checkbox"
          name="cinnamon-extract"
          id="cinnamon-extract"
          value="Cinnamon Extract"
        />
        <label for="cinnamon-extract">Cinnamon Extract</label>
        <input
          type="checkbox"
          name="citric-acid"
          id="citric-acid"
          value="Citric Acid"
        />
        <label for="citric-acid">Citric Acid</label>
        <input
          type="checkbox"
          name="coconut-extract"
          id="coconut-extract"
          value="Coconut Extract"
        />
        <label for="coconut-extract">Coconut Extract</label>
        <input
          type="checkbox"
          name="coffee-extract"
          id="coffee-extract"
          value="Coffee Extract"
        />
        <label for="coffee-extract">Coffee Extract</label>
        <input type="checkbox" name="collagen" id="collagen" value="Collagen" />
        <label for="collagen">Collagen</label>
        <input type="checkbox" name="creatine" id="creatine" value="Creatine" />
        <label for="creatine">Creatine</label>
        <input
          type="checkbox"
          name="egg-powder"
          id="egg-powder"
          value="Egg Powder"
        />
        <label for="egg-powder">Egg Powder</label>
        <input
          type="checkbox"
          name="egg-white-powder"
          id="egg-white-powder"
          value="Egg White Powder"
        />
        <label for="egg-white-powder">Egg White Powder</label>
        <input
          type="checkbox"
          name="essential-amino-acids"
          id="essential-amino-acids"
          value="Essential Amino Acids &#40;EAAs&#41;"
        />
        <label for="essential-amino-acids"
          >Essential Amino Acids &#40;EAAs&#41;</label
        >
        <input
          type="checkbox"
          name="essential-oil"
          id="essential-oil"
          value="Essential Oil"
        />
        <label for="essential-oil">Essential Oil</label>
        <input type="checkbox" name="fish-oil" id="fish-oil" value="Fish Oil" />
        <label for="fish-oil">Fish Oil</label>
        <input
          type="checkbox"
          name="food-coloring"
          id="food-coloring"
          value="Food Coloring"
        />
        <label for="food-coloring">Food Coloring</label>
        <input
          type="checkbox"
          name="glutamine"
          id="glutamine"
          value="Glutamine"
        />
        <label for="glutamine">Glutamine</label>
        <input
          type="checkbox"
          name="greens-powder"
          id="greens-powder"
          value="Greens Powder"
        />
        <label for="greens-powder">Greens Powder</label>
        <input
          type="checkbox"
          name="hazelnut-extract"
          id="hazelnut-extract"
          value="Hazelnut Extract"
        />
        <label for="hazelnut-extract">Hazelnut Extract</label>
        <input
          type="checkbox"
          name="hemp-protein"
          id="hemp-protein"
          value="Hemp Protein"
        />
        <label for="hemp-protein">Hemp Protein</label>
        <input type="checkbox" name="lecithin" id="lecithin" value="Lecithin" />
        <label for="lecithin">Lecithin</label>
        <input
          type="checkbox"
          name="lemon-extract"
          id="lemon-extract"
          value="Lemon Extract"
        />
        <label for="lemon-extract">Lemon Extract</label>
        <input
          type="checkbox"
          name="lemon-juice-concentrate"
          id="lemon-juice-concentrate"
          value="Lemon Juice Concentrate"
        />
        <label for="lemon-juice-concentrate">Lemon Juice Concentrate</label>
        <input
          type="checkbox"
          name="lime-juice-concentrate"
          id="lime-juice-concentrate"
          value="Lime Juice Concentrate"
        />
        <label for="lime-juice-concentrate">Lime Juice Concentrate</label>
        <input
          type="checkbox"
          name="liquid-egg-whites"
          id="liquid-egg-whites"
          value="Liquid Egg Whites"
        />
        <label for="liquid-egg-whites">Liquid Egg Whites</label>
        <input
          type="checkbox"
          name="magnesium"
          id="magnesium"
          value="Magnesium"
        />
        <label for="magnesium">Magnesium</label>
        <input
          type="checkbox"
          name="malt-extract"
          id="malt-extract"
          value="Malt Extract"
        />
        <label for="malt-extract">Malt Extract</label>
        <input
          type="checkbox"
          name="mass-gainer"
          id="mass-gainer"
          value="Mass Gainer"
        />
        <label for="mass-gainer">Mass Gainer</label>
        <input
          type="checkbox"
          name="nutritional-yeast"
          id="nutritional-yeast"
          value="Nutritional Yeast"
        />
        <label for="nutritional-yeast">Nutritional Yeast</label>
        <input
          type="checkbox"
          name="orange-extract"
          id="orange-extract"
          value="Orange Extract"
        />
        <label for="orange-extract">Orange Extract</label>
        <input
          type="checkbox"
          name="pea-protein"
          id="pea-protein"
          value="Pea Protein"
        />
        <label for="pea-protein">Pea Protein</label>
        <input
          type="checkbox"
          name="pineapple-extract"
          id="pineapple-extract"
          value="Pineapple Extract"
        />
        <label for="pineapple-extract">Pineapple Extract</label>
        <input
          type="checkbox"
          name="powdered-peanut-butter"
          id="powdered-peanut-butter"
          value="Powdered Peanut Butter"
        />
        <label for="powdered-peanut-butter">Powdered Peanut Butter</label>
        <input
          type="checkbox"
          name="pre-workout"
          id="pre-workout"
          value="Pre-Workout"
        />
        <label for="pre-workout">Pre-Workout</label>
        <input
          type="checkbox"
          name="probiotics"
          id="probiotics"
          value="Probiotics"
        />
        <label for="probiotics">Probiotics</label>
        <input
          type="checkbox"
          name="rice-protein"
          id="rice-protein"
          value="Rice Protein"
        />
        <label for="rice-protein">Rice Protein</label>
        <input
          type="checkbox"
          name="rock-salt"
          id="rock-salt"
          value="Rock Salt"
        />
        <label for="rock-salt">Rock Salt</label>
        <input
          type="checkbox"
          name="rum-extract"
          id="rum-extract"
          value="Rum Extract"
        />
        <label for="rum-extract">Rum Extract</label>
        <input
          type="checkbox"
          name="sodium-alginate"
          id="sodium-alginate"
          value="Sodium Alginate"
        />
        <label for="sodium-alginate">Sodium Alginate</label>
        <input
          type="checkbox"
          name="soy-protein"
          id="soy-protein"
          value="Soy Protein"
        />
        <label for="soy-protein">Soy Protein</label>
        <input
          type="checkbox"
          name="spirulina"
          id="spirulina"
          value="Spirulina"
        />
        <label for="spirulina">Spirulina</label>
        <input type="checkbox" name="thc" id="thc" value="THC" />
        <label for="thc">THC</label>
        <input
          type="checkbox"
          name="vitamin-a"
          id="vitamin-a"
          value="Vitamin A"
        />
        <label for="vitamin-a">Vitamin A</label>
        <input
          type="checkbox"
          name="vitamin-c"
          id="vitamin-c"
          value="Vitamin C"
        />
        <label for="vitamin-c">Vitamin C</label>
        <input
          type="checkbox"
          name="vitamin-d"
          id="vitamin-d"
          value="Vitamin D"
        />
        <label for="vitamin-d">Vitamin D</label>
        <input
          type="checkbox"
          name="vitamin-e"
          id="vitamin-e"
          value="Vitamin E"
        />
        <label for="vitamin-e">Vitamin E</label>
        <input
          type="checkbox"
          name="whey-protein"
          id="whey-protein"
          value="Whey Protein"
        />
        <label for="whey-protein">Whey Protein</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Sweeteners</legend>
        <input
          type="checkbox"
          name="acesulfame-potassium"
          id="acesulfame-potassium"
          value="Acesulfame Potassium &#40;Sunnett, Sweet One&#41;"
        />
        <label for="acesulfame-potassium"
          >Acesulfame Potassium &#40;Sunnett, Sweet One&#41;</label
        >
        <input
          type="checkbox"
          name="agave-nectar"
          id="agave-nectar"
          value="Agave Nectar"
        />
        <label for="agave-nectar">Agave Nectar</label>
        <input type="checkbox" name="allulose" id="allulose" value="Allulose" />
        <label for="allulose">Allulose</label>
        <input
          type="checkbox"
          name="aspartame"
          id="aspartame"
          value="Aspartame &#40;Equal, Nutrisweet&#41;"
        />
        <label for="aspartame">Aspartame &#40;Equal, Nutrisweet&#41;</label>
        <input
          type="checkbox"
          name="brown-sugar"
          id="brown-sugar"
          value="Brown Sugar"
        />
        <label for="brown-sugar">Brown Sugar</label>
        <input
          type="checkbox"
          name="cane-sugar"
          id="cane-sugar"
          value="Cane Sugar"
        />
        <label for="cane-sugar">Cane Sugar</label>
        <input
          type="checkbox"
          name="coconut-sugar"
          id="coconut-sugar"
          value="Coconut Sugar"
        />
        <label for="coconut-sugar">Coconut Sugar</label>
        <input
          type="checkbox"
          name="confectioners-sugar"
          id="confectioners-sugar"
          value="Confectioner's Sugar"
        />
        <label for="confectioners-sugar">Confectioner's Sugar</label>
        <input
          type="checkbox"
          name="corn-syrup"
          id="corn-syrup"
          value="Corn Syrup"
        />
        <label for="corn-syrup">Corn Syrup</label>
        <input type="checkbox" name="honey" id="honey" value="Hoey" />
        <label for="honey">Honey</label>
        <input type="checkbox" name="inulin" id="inulin" value="Inulin" />
        <label for="inulin">Inulin</label>
        <input
          type="checkbox"
          name="lucuma-powder"
          id="lucuma-powder"
          value="Lucuma Powder"
        />
        <label for="lucuma-powder">Lucuma Powder</label>
        <input
          type="checkbox"
          name="maple-syrup"
          id="maple-syrup"
          value="Maple Syrup"
        />
        <label for="maple-syrup">Maple Syrup</label>
        <input type="checkbox" name="mastic" id="mastic" value="Mastic" />
        <label for="mastic">Mastic</label>
        <input type="checkbox" name="molasses" id="molasses" value="Molasses" />
        <label for="molasses">Molasses</label>
        <input
          type="checkbox"
          name="monk-fruit-sweetener"
          id="monk-fruit-sweetener"
          value="Monk Fruit Sweetener"
        />
        <label for="monk-fruit-sweetener">Monk Fruit Sweetener</label>
        <input
          type="checkbox"
          name="palm-sugar"
          id="palm-sugar"
          value="Palm Sugar"
        />
        <label for="palm-sugar">Palm Sugar</label>
        <input type="checkbox" name="panela" id="panela" value="Panela" />
        <label for="panela">Panela</label>
        <input
          type="checkbox"
          name="saccharin"
          id="saccharin"
          value="Saccharin &#40;Sweet & Low&#41;"
        />
        <label for="saccharin">Saccharin &#40;Sweet & Low&#41;</label>
        <input type="checkbox" name="stevia" id="stevia" value="Stevia" />
        <label for="stevia">Stevia</label>
        <input
          type="checkbox"
          name="sucralose"
          id="sucralose"
          value="Sucralose &#40;Splenda&#41;"
        />
        <label for="sucralose">Sucralose &#40;Splenda&#41;</label>
        <input type="checkbox" name="vanilla" id="vanilla" value="Vanilla" />
        <label for="vanilla">Vanilla</label>
        <input type="checkbox" name="xylitol" id="xylitol" value="Xylitol" />
        <label for="xylitol">Xylitol</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Vegan Substitutes</legend>
        <input
          type="checkbox"
          name="almond-butter"
          id="almond-butter"
          value="Almond Butter"
        />
        <label for="almond-butter">Almond Butter</label>
        <input
          type="checkbox"
          name="almond-coffee-creamer"
          id="almond-coffee-creamer"
          value="Almond Coffee Creamer"
        />
        <label for="almond-coffee-creamer">Almond Coffee Creamer</label>
        <input
          type="checkbox"
          name="almond-milk"
          id="almond-milk"
          value="Almond Milk"
        />
        <label for="almond-milk">Almond Milk</label>
        <input
          type="checkbox"
          name="cashew-butter"
          id="cashew-butter"
          value="Cashew Butter"
        />
        <label for="cashew-butter">Cashew Butter</label>
        <input
          type="checkbox"
          name="cashew-cream-cheese"
          id="cashew-cream-cheese"
          value="Cashew Cream Cheese"
        />
        <label for="cashew-cream-cheese">Cashew Cream Cheese</label>
        <input
          type="checkbox"
          name="cashew-milk"
          id="cashew-milk"
          value="Cashew Milk"
        />
        <label for="cashew-milk">Cashew Milk</label>
        <input
          type="checkbox"
          name="coconut-butter"
          id="coconut-butter"
          value="Coconut Butter"
        />
        <label for="coconut-butter">Coconut Butter</label>
        <input
          type="checkbox"
          name="coconut-cream"
          id="coconut-cream"
          value="Coconut Cream"
        />
        <label for="coconut-cream">Coconut Cream</label>
        <input
          type="checkbox"
          name="coconut-fat"
          id="coconut-fat"
          value="Coconut Fat"
        />
        <label for="coconut-fat">Coconut Fat</label>
        <input
          type="checkbox"
          name="coconut-milk"
          id="coconut-milk"
          value="Coconut Milk"
        />
        <label for="coconut-milk">Coconut Milk</label>
        <input
          type="checkbox"
          name="coconut-whipped-cream"
          id="coconut-whipped-cream"
          value="Coconut Whipped Cream"
        />
        <label for="coconut-milk-powder">Coconut Whipped Cream</label>
        <input
          type="checkbox"
          name="egg-substitute"
          id="egg-substitute"
          value="Egg Substitute"
        />
        <label for="egg-substitute">Egg Substitute</label>
        <input
          type="checkbox"
          name="evaporated-coconut-milk"
          id="evaporated-coconut-milk"
          value="Evaporated Coconut Milk"
        />
        <label for="evaporated-coconut-milk">Evaporated Coconut Milk</label>
        <input type="checkbox" name="falafel" id="falafel" value="Falafel" />
        <label for="falafel">Falafel</label>
        <input
          type="checkbox"
          name="flax-milk"
          id="flax-milk"
          value="Flax Milk"
        />
        <label for="flax-milk">Flax Milk</label>
        <input
          type="checkbox"
          name="hazelnut-butter"
          id="hazelnut-butter"
          value="Hazelnut Butter"
        />
        <label for="hazelnut-butter">Hazelnut Butter</label>
        <input
          type="checkbox"
          name="hazelnut-coffee-creamer"
          id="hazelnut-coffee-creamer"
          value="Hazelnut Coffee Creamer"
        />
        <label for="hazelnut-coffee-creamer">Hazelnut Coffee Creamer</label>
        <input
          type="checkbox"
          name="hemp-milk"
          id="hemp-milk"
          value="Hemp Milk"
        />
        <label for="hemp-milk">Hemp Milk</label>
        <input
          type="checkbox"
          name="non-dairy-butter"
          id="non-dairy-butter"
          value="Non-Dairy Butter"
        />
        <label for="non-dairy-butter">Non-Dairy Butter</label>
        <input
          type="checkbox"
          name="non-dairy-cheese"
          id="non-dairy-cheese"
          value="Non-Dairy Cheese"
        />
        <label for="non-dairy-cheese">Non-Dairy Cheese</label>
        <input
          type="checkbox"
          name="non-dairy-coffee-creamer"
          id="non-dairy-coffee-creamer"
          value="Non-Dairy Coffee Creamer"
        />
        <label for="non-dairy-coffee-creamer">Non-Dairy Coffee Creamer</label>
        <input
          type="checkbox"
          name="non-dairy-cream"
          id="non-dairy-cream"
          value="Non-Dairy Cream"
        />
        <label for="non-dairy-cream">Non-Dairy Cream</label>
        <input
          type="checkbox"
          name="non-dairy-cream-cheese"
          id="non-dairy-cream-cheese"
          value="Non-Dairy Cream Cheese"
        />
        <label for="non-dairy-cream-cheese">Non-Dairy Cream Cheese</label>
        <input
          type="checkbox"
          name="non-dairy-ice-cream"
          id="non-dairy-ice-cream"
          value="Non-Dairy Ice Cream"
        />
        <label for="non-dairy-ice-cream">Non-Dairy Ice Cream</label>
        <input
          type="checkbox"
          name="non-dairy-milk"
          id="non-dairy-milk"
          value="Non-Dairy Milk"
        />
        <label for="non-dairy-milk">Non-Dairy Milk</label>
        <input
          type="checkbox"
          name="non-dairy-whipped-topping"
          id="non-dairy-whipped-topping"
          value="Non-Dairy Whipped Topping"
        />
        <label for="non-dairy-whipped-topping">Non-Dairy Whipped Topping</label>
        <input
          type="checkbox"
          name="non-dairy-yogurt"
          id="non-dairy-yogurt"
          value="Non-Dairy Yogurt"
        />
        <label for="non-dairy-yogurt">Non-Dairy Yogurt</label>
        <input
          type="checkbox"
          name="non-soy-butter"
          id="non-soy-butter"
          value="Non-Soy Butter"
        />
        <label for="non-soy-butter">Non-Soy Butter</label>
        <input type="checkbox" name="oat-milk" id="oat-milk" value="Oat Milk" />
        <label for="oat-milk">Oat Milk</label>
        <input
          type="checkbox"
          name="plant-based-bacon"
          id="plant-based-bacon"
          value="Plant-Based Bacon"
        />
        <label for="plant-based-bacon">Plant-Based Bacon</label>
        <input
          type="checkbox"
          name="plant-based-beef"
          id="plant-based-beef"
          value="Plant-Based Beef"
        />
        <label for="plant-based-beef">Plant-Based Beef</label>
        <input
          type="checkbox"
          name="plant-based-chicken"
          id="plant-based-chicken"
          value="Plant-Based Chicken"
        />
        <label for="plant-based-chicken">Plant-Based Chicken</label>
        <input
          type="checkbox"
          name="plant-based-meatballs"
          id="plant-based-meatballs"
          value="Plant-Based Meatballs"
        />
        <label for="plant-based-meatballs">Plant-Based Meatballs</label>
        <input
          type="checkbox"
          name="plant-based-sausage"
          id="plant-based-sausage"
          value="Plant-Based Sausage"
        />
        <label for="plant-based-sausage">Plant-Based Sausage</label>
        <input
          type="checkbox"
          name="powdered-coconut-milk"
          id="powdered-coconut-milk"
          value="Powdered Coconut Milk"
        />
        <label for="powdered-coconut-milk">Powdered Coconut Milk</label>
        <input
          type="checkbox"
          name="powdered-soy-milk"
          id="powdered-soy-milk"
          value="Powdered Soy Milk"
        />
        <label for="powdered-soy-milk">Powdered Soy Milk</label>
        <input
          type="checkbox"
          name="pulled-oats"
          id="pulled-oats"
          value="Pulled Oats"
        />
        <label for="pulled-oats">Pulled Oats</label>
        <input type="checkbox" name="quorn" id="quorn" value="Quorn" />
        <label for="quorn">Quorn</label>
        <input
          type="checkbox"
          name="seed-butter"
          id="seed-butter"
          value="Seed Butter"
        />
        <label for="seed-butter">Seed Butter</label>
        <input
          type="checkbox"
          name="soy-chorizo"
          id="soy-chorizo"
          value="Soy Chorizo"
        />
        <label for="soy-chorizo">Soy Chorizo</label>
        <input
          type="checkbox"
          name="soy-cream"
          id="soy-cream"
          value="Soy Cream"
        />
        <label for="soy-cream">Soy Cream</label>
        <input type="checkbox" name="soy-milk" id="soy-milk" value="Soy Milk" />
        <label for="soy-milk">Soy Milk</label>
        <input
          type="checkbox"
          name="soy-yogurt"
          id="soy-yogurt"
          value="Soy Yogurt"
        />
        <label for="soy-yogurt">Soy Yogurt</label>
        <input type="checkbox" name="tempeh" id="tempeh" value="Tempeh" />
        <label for="tempeh">Tempeh</label>
        <input type="checkbox" name="tofu" id="tofu" value="Tofu" />
        <label for="tofu">Tofu</label>
        <input type="checkbox" name="tofurky" id="tofurky" value="Tofurky" />
        <label for="tofurky">Tofurky</label>
        <input
          type="checkbox"
          name="vegan-burger"
          id="vegan-burger"
          value="Vegan Burger"
        />
        <label for="vegan-burger">Vegan Burger</label>
        <input
          type="checkbox"
          name="vegan-gravy"
          id="vegan-gravy"
          value="Vegan Gravy"
        />
        <label for="vegan-gravy">Vegan Gravy</label>
        <input
          type="checkbox"
          name="vegan-pesto"
          id="vegan-pesto"
          value="Vegan Pesto"
        />
        <label for="vegan-pesto">Vegan Pesto</label>
        <input
          type="checkbox"
          name="vegan-ranch"
          id="vegan-ranch"
          value="Vegan Ranch"
        />
        <label for="vegan-ranch">Vegan Ranch</label>
        <input
          type="checkbox"
          name="vegan-sour-cream"
          id="vegan-sour-cream"
          value="Vegan Sour Cream"
        />
        <label for="vegan-sour-cream">Vegan Sour Cream</label>
        <input
          type="checkbox"
          name="vegan-starter-culture"
          id="vegan-starter-culture"
          value="Vegan Starter Culture"
        />
        <label for="vegan-starter-culture">Vegan Starter Culture</label>
        <input
          type="checkbox"
          name="vegan-tzatziki"
          id="vegan-tzatziki"
          value="Vegan Tzatziki"
        />
        <label for="vegan-tzatziki">Vegan Tzatziki</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Vegetables</legend>
        <input
          type="checkbox"
          name="acorn-squash"
          id="acorn-squash"
          value="Acorn Squash"
        />
        <label for="acorn-squash">Acorn Squash</label>
        <input type="checkbox" name="alfalfa" id="alfalfa" value="Alfalfa" />
        <label for="alfalfa">Alfalfa</label>
        <input
          type="checkbox"
          name="ancho-chile"
          id="ancho-chile"
          value="Ancho Chile"
        />
        <label for="ancho-chile">Ancho Chile</label>
        <input
          type="checkbox"
          name="arbol-chile"
          id="arbol-chile"
          value="Arbol Chile"
        />
        <label for="arbol-chile">Arbol Chile</label>
        <input
          type="checkbox"
          name="artichoke"
          id="artichoke"
          value="Artichoke"
        />
        <label for="artichoke">Artichoke</label>
        <input type="checkbox" name="arugula" id="arugula" value="Arugula" />
        <label for="arugula">Arugula</label>
        <input
          type="checkbox"
          name="asparagus"
          id="asparagus"
          value="Asparagus"
        />
        <label for="asparagus">Asparagus</label>
        <input type="checkbox" name="avocado" id="avocado" value="Avocado" />
        <label for="avocado">Avocado</label>
        <input type="checkbox" name="beetroot" id="beetroot" value="Beetroot" />
        <label for="beetroot">Beetroot</label>
        <input
          type="checkbox"
          name="bell-pepper"
          id="bell-pepper"
          value="Bell Pepper"
        />
        <label for="bell-pepper">Bell Pepper</label>
        <input
          type="checkbox"
          name="black-eyed-pea"
          id="black-eyed-pea"
          value="Black-Eyed Pea"
        />
        <label for="black-eyed-pea">Black-Eyed Pea</label>
        <input type="checkbox" name="bok-choy" id="bok-choy" value="Bok Choy" />
        <label for="bok-choy">Bok Choy</label>
        <input type="checkbox" name="boletus" id="boletus" value="Boletus" />
        <label for="boletus">Boletus</label>
        <input
          type="checkbox"
          name="boston-lettuce"
          id="boston-lettuce"
          value="Boston Lettuce"
        />
        <label for="boston-lettuce">Boston Lettuce</label>
        <input type="checkbox" name="broccoli" id="broccoli" value="Broccoli" />
        <label for="broccoli">Broccoli</label>
        <input
          type="checkbox"
          name="brussels-sprout"
          id="brussels-sprout"
          value="Brussels Sprout"
        />
        <label for="brussels-sprout">Brussels Sprout</label>
        <input
          type="checkbox"
          name="butternut-squash"
          id="butternut-squash"
          value="Butternut Squash"
        />
        <label for="butternut-squash">Butternut Squash</label>
        <input
          type="checkbox"
          name="button-mushroom"
          id="button-mushroom"
          value="Button Mushroom"
        />
        <label for="button-mushroom">Button Mushroom</label>
        <input type="checkbox" name="cabbage" id="cabbage" value="Cabbage" />
        <label for="cabbage">Cabbage</label>
        <input
          type="checkbox"
          name="caesars-mushroom"
          id="caesars-mushroom"
          value="Caesar's Muchroom"
        />
        <label for="caesars-mushroom">Caesar's Mushroom</label>
        <input
          type="checkbox"
          name="candy-cap-mushroom"
          id="candy-cap-mushroom"
          value="Candy Cap Mushroom"
        />
        <label for="candy-cap-mushroom">Candy Cap Mushroom</label>
        <input
          type="checkbox"
          name="cannellini-bean"
          id="cannellini-bean"
          value="Cannellini Bean"
        />
        <label for="cannellini-bean">Cannellini Bean</label>
        <input type="checkbox" name="carrot" id="carrot" value="Carrot" />
        <label for="carrot">Carrot</label>
        <input
          type="checkbox"
          name="cauliflower"
          id="cauliflower"
          value="Cauliflower"
        />
        <label for="cauliflower">Cauliflower</label>
        <input type="checkbox" name="celery" id="celery" value="Celery" />
        <label for="celery">Celery</label>
        <input type="checkbox" name="chard" id="chard" value="Chard" />
        <label for="chard">Chard</label>
        <input
          type="checkbox"
          name="chestnut-mushroom"
          id="chestnut-mushroom"
          value="Chestnut Mushroom"
        />
        <label for="chestnut-mushroom">Chestnut Mushroom</label>
        <input type="checkbox" name="chickpea" id="chickpea" value="Chickpea" />
        <label for="chickpea">Chickpea</label>
        <input
          type="checkbox"
          name="collard-green"
          id="collard-green"
          value="Collard Green"
        />
        <label for="collard-green">Collard Green</label>
        <input type="checkbox" name="corn" id="corn" value="Corn" />
        <label for="corn">Corn</label>
        <input type="checkbox" name="cucumber" id="cucumber" value="Cucumber" />
        <label for="cucumber">Cucumber</label>
        <input type="checkbox" name="daikon" id="daikon" value="Daikon" />
        <label for="daikon">Daikon</label>
        <input
          type="checkbox"
          name="djon-djon-mushroom"
          id="djon-djon-mushroom"
          value="Djon Djon Mushroom"
        />
        <label for="djon-djon-mushroom">Djon Djon Mushroom</label>
        <input type="checkbox" name="edamame" id="edamame" value="Edamame" />
        <label for="edamame">Edamame</label>
        <input type="checkbox" name="eggplant" id="eggplant" value="Eggplant" />
        <label for="eggplant">Eggplant</label>
        <input type="checkbox" name="endive" id="endive" value="Endive" />
        <label for="endive">Endive</label>
        <input type="checkbox" name="enoki" id="enoki" value="Enoki" />
        <label for="enoki">Enoki</label>
        <input
          type="checkbox"
          name="fava-bean"
          id="fava-bean"
          value="Fava Bean"
        />
        <label for="fava-bean">Fava Bean</label>
        <input type="checkbox" name="fennel" id="fennel" value="Fennel" />
        <label for="fennel">Fennel</label>
        <input type="checkbox" name="frisee" id="frisee" value="Frisee" />
        <label for="frisee">Frisee</label>
        <input
          type="checkbox"
          name="green-bean"
          id="green-bean"
          value="Green Bean"
        />
        <label for="green-bean">Green Bean</label>
        <input
          type="checkbox"
          name="habanero"
          id="habanero"
          value="Haba&#241;ero"
        />
        <label for="habanero">Haba&#241;ero</label>
        <input
          type="checkbox"
          name="horseradish"
          id="horseradish"
          value="Horseradish"
        />
        <label for="horseradish">Horseradish</label>
        <input
          type="checkbox"
          name="iceberg-lettuce"
          id="iceberg-lettuce"
          value="Iceberg Lettuce"
        />
        <label for="iceberg-lettuce">Iceberg Lettuce</label>
        <input
          type="checkbox"
          name="jalapeno"
          id="jalapeno"
          value="Jalape&#241;o"
        />
        <label for="jalapeno">Jalape&#241;o</label>
        <input type="checkbox" name="jicama" id="jicama" value="Jicama" />
        <label for="jicama">Jicama</label>
        <input type="checkbox" name="kale" id="kale" value="Kale" />
        <label for="kale">Kale</label>
        <input
          type="checkbox"
          name="kidney-bean"
          id="kidney-bean"
          value="Kidney Bean"
        />
        <label for="kidney-bean">Kidney Bean</label>
        <input type="checkbox" name="kohlrabi" id="kohlrabi" value="Kohlrabi" />
        <label for="kohlrabi">Kohlrabi</label>
        <input type="checkbox" name="leek" id="leek" value="Leek" />
        <label for="leek">Leek</label>
        <input type="checkbox" name="legume" id="legume" value="Legume" />
        <label for="legume">Legume</label>
        <input type="checkbox" name="lentil" id="lentil" value="Lentil" />
        <label for="lentil">Lentil</label>
        <input
          type="checkbox"
          name="lima-bean"
          id="lima-bean"
          value="Lima Bean"
        />
        <label for="lima-bean">Lima Bean</label>
        <input
          type="checkbox"
          name="lions-mane-mushroom"
          id="lions-mane-mushroom"
          value="Lion's Mane Mushroom"
        />
        <label for="lions-mane-mushroom">Lion's Mane Mushroom</label>
        <input type="checkbox" name="maitake" id="maitake" value="Maitake" />
        <label for="maitake">Maitake</label>
        <input
          type="checkbox"
          name="matsutake"
          id="matsutake"
          value="Matsutake"
        />
        <label for="matsutake">Matsutake</label>
        <input
          type="checkbox"
          name="microgreen"
          id="microgreen"
          value="Microgreen"
        />
        <label for="microgreen">Microgreen</label>
        <input
          type="checkbox"
          name="morel-mushroom"
          id="morel-mushroom"
          value="Morel Mushroom"
        />
        <label for="morel-mushroom">Morel Mushroom</label>
        <input
          type="checkbox"
          name="mung-bean"
          id="mung-bean"
          value="Mung Bean"
        />
        <label for="mung-bean">Mung Bean</label>
        <input type="checkbox" name="nameko" id="nameko" value="Nameko" />
        <label for="nameko">Nameko</label>
        <input type="checkbox" name="okra" id="okra" value="Okra" />
        <label for="okra">Okra</label>
        <input type="checkbox" name="onion" id="onion" value="Onion" />
        <label for="onion">Onion</label>
        <input
          type="checkbox"
          name="oyster-mushroom"
          id="oyster-mushroom"
          value="Oyster Mushroom"
        />
        <label for="oyster-mushroom">Oyster Mushroom</label>
        <input type="checkbox" name="parsnip" id="parsnip" value="Parsnip" />
        <label for="parsnip">Parsnip</label>
        <input type="checkbox" name="pea" id="pea" value="Pea" />
        <label for="pea">Pea</label>
        <input
          type="checkbox"
          name="pepperoncini"
          id="pepperoncini"
          value="Pepperoncini"
        />
        <label for="pepperoncini">Pepperoncini</label>
        <input type="checkbox" name="pimiento" id="pimiento" value="Pimiento" />
        <label for="pimiento">Pimiento</label>
        <input
          type="checkbox"
          name="pinto-bean"
          id="pinto-bean"
          value="Pinto Bean"
        />
        <label for="pinto-bean">Pinto Bean</label>
        <input type="checkbox" name="pioppini" id="pioppini" value="Pioppini" />
        <label for="pioppini">Pioppini</label>
        <input type="checkbox" name="plantain" id="plantain" value="Plantain" />
        <label for="plantain">Plantain</label>
        <input type="checkbox" name="poblano" id="poblano" value="Poblano" />
        <label for="poblano">Poblano</label>
        <input type="checkbox" name="porcini" id="porcini" value="Porcini" />
        <label for="porcini">Porcini</label>
        <input
          type="checkbox"
          name="portobello-mushroom"
          id="portobello-mushroom"
          value="Portobello Mushroom"
        />
        <label for="portobello-mushroom">Portobello Mushroom</label>
        <input type="checkbox" name="potato" id="potato" value="Potato" />
        <label for="potato">Potato</label>
        <input
          type="checkbox"
          name="puffball-mushroom"
          id="puffball-mushroom"
          value="Puffball Mushroom"
        />
        <label for="puffball-mushroom">Puffball Mushroom</label>
        <input type="checkbox" name="pumpkin" id="pumpkin" value="Pumpkin" />
        <label for="pumpkin">Pumpkin</label>
        <input
          type="checkbox"
          name="radicchio"
          id="radicchio"
          value="Radicchio"
        />
        <label for="radicchio">Radicchio</label>
        <input type="checkbox" name="radish" id="radish" value="Radish" />
        <label for="radish">Radish</label>
        <input
          type="checkbox"
          name="romaine-lettuce"
          id="romaine-lettuce"
          value="Romaine Lettuce"
        />
        <label for="romaine-lettuce">Romaine Lettuce</label>
        <input type="checkbox" name="rutabaga" id="rutabaga" value="Rutabaga" />
        <label for="rutabaga">Rutabaga</label>
        <input type="checkbox" name="scallion" id="scallion" value="Scallion" />
        <label for="scallion">Scallion</label>
        <input
          type="checkbox"
          name="serrano-pepper"
          id="serrano-pepper"
          value="Serrano Pepper"
        />
        <label for="serrano-pepper">Serrano Pepper</label>
        <input type="checkbox" name="shallot" id="shallot" value="Shallot" />
        <label for="shallot">Shallot</label>
        <input
          type="checkbox"
          name="shiitake-mushroom"
          id="shiitake-mushroom"
          value="Shittake Mushroom"
        />
        <label for="shiitake-mushroom">Shiitake Mushroom</label>
        <input
          type="checkbox"
          name="shimeji-mushroom"
          id="shimeji-mushroom"
          value="Shimeji Mushroom"
        />
        <label for="shimeji-mushroom">Shimeji Mushroom</label>
        <input type="checkbox" name="soybean" id="soybean" value="Soybean" />
        <label for="soybean">Soybean</label>
        <input type="checkbox" name="spinach" id="spinach" value="Spinach" />
        <label for="spinach">Spinach</label>
        <input
          type="checkbox"
          name="spaghetti-squash"
          id="spaghetti-squash"
          value="Spaghetti Squash"
        />
        <label for="spaghetti-squash">Spaghetti Squash</label>
        <input
          type="checkbox"
          name="summer-squash"
          id="summer-squash"
          value="Summer Squash"
        />
        <label for="summer-squash">Summer Squash</label>
        <input
          type="checkbox"
          name="sweet-pepper"
          id="sweet-pepper"
          value="Sweet Pepper"
        />
        <label for="sweet-pepper">Sweet Pepper</label>
        <input
          type="checkbox"
          name="sweet-potato"
          id="sweet-potato"
          value="Sweet Potato"
        />
        <label for="sweet-potato">Sweet Potato</label>
        <input
          type="checkbox"
          name="thai-chile"
          id="thai-chile"
          value="Thai Chile"
        />
        <label for="thai-chile">Thai Chile</label>
        <input
          type="checkbox"
          name="tomatillo"
          id="tomatillo"
          value="Tomatillo"
        />
        <label for="tomatillo">Tomatillo</label>
        <input type="checkbox" name="tomato" id="tomato" value="Tomato" />
        <label for="tomato">Tomato</label>
        <input type="checkbox" name="truffle" id="truffle" value="Truffle" />
        <label for="truffle">Truffle</label>
        <input
          type="checkbox"
          name="trumpet-mushroom"
          id="trumpet-mushroom"
          value="Trumpet Mushroom"
        />
        <label for="trumpet-mushroom">Trumpet Mushroom</label>
        <input type="checkbox" name="turnip" id="turnip" value="Turnip" />
        <label for="turnip">Turnip</label>
        <input
          type="checkbox"
          name="water-chestnut"
          id="water-chestnut"
          value="Water Chestnut"
        />
        <label for="water-chestnut">Water Chestnut</label>
        <input
          type="checkbox"
          name="watercress"
          id="watercress"
          value="Watercress"
        />
        <label for="watercress">Watercress</label>
        <input type="checkbox" name="yam" id="yam" value="Yam" />
        <label for="yam">Yam</label>
        <input type="checkbox" name="zucchini" id="zucchini" value="Zucchini" />
        <label for="zucchini">Zucchini</label>
      </fieldset>
      <hr />
      <input type="submit" name="submit" id="btn" value="Find Recipes" />
    </form>
  </main>
`;
