import html from "html-literal";
export default () => html`
  <main>
    <h2>RECIPE FINDER</h2>
    <p>
      No matter the diet or ingredients, iMealPrep can help make the search for
      delicious meal prep recipes easier.
    </p>
    <hr />
    <form id="recipe-form" action="" method="get">
      <fieldset class="recipe">
        <legend>Dietary Preferences</legend>
        <input type="checkbox" name="carnivore" id="carnivore" />
        <label for="carnivore">Carnivore</label>
        <input type="checkbox" name="gluten-free" id="gluten-free" />
        <label for="gluten-free">Gluten-Free</label>
        <input type="checkbox" name="halal" id="halal" />
        <label for="halal">Halal</label>
        <input type="checkbox" name="high-fiber" id="high-fiber" />
        <label for="high-fiber">High Fiber</label>
        <input type="checkbox" name="high-protein" id="high-protein" />
        <label for="high-protein">High Protein</label>
        <input
          type="checkbox"
          name="immune-system-booster"
          id="immune-system-booster"
        />
        <label for="immune-system-booster">Immune System Booster</label>
        <input type="checkbox" name="inuit" id="inuit" />
        <label for="inuit">Inuit</label>
        <input type="checkbox" name="keto" id="keto" />
        <label for="keto">Keto</label>
        <input type="checkbox" name="kosher" id="kosher" />
        <label for="kosher">Kosher</label>
        <input type="checkbox" name="low-cal" id="low-cal" />
        <label for="low-cal">Low Calorie</label>
        <input type="checkbox" name="low-carb" id="low-carb" />
        <label for="low-carb">Low Carb</label>
        <input type="checkbox" name="low-fat" id="low-fat" />
        <label for="low-fat">Low Fat</label>
        <input type="checkbox" name="mediterranean" id="mediterranean" />
        <label for="mediterranean">Mediterranean</label>
        <input type="checkbox" name="organic" id="organic" />
        <label for="organic">Organic</label>
        <input type="checkbox" name="paleo" id="paleo" />
        <label for="paleo">Paleo</label>
        <input type="checkbox" name="plant-based" id="plant-based" />
        <label for="plant-based">Plant-based</label>
        <input type="checkbox" name="semi-vegetarian" id="semi-vegetarian" />
        <label for="semi-vegetarian">Semi-Vegetarian</label>
        <input type="checkbox" name="vegan" id="vegan" />
        <label for="vegan">Vegan</label>
        <input type="checkbox" name="vegetarian" id="vegetarian" />
        <label for="vegetarian">Vegetarian</label>
        <input type="checkbox" name="whole30" id="whole30" />
        <label for="whole30">Whole 30</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Alcohol</legend>
        <input type="checkbox" name="absinthe" id="absinthe" />
        <label for="absinthe">Absinthe</label>
        <input type="checkbox" name="advocaat" id="advocaat" />
        <label for="advocaat">Advocaat</label>
        <input type="checkbox" name="amaretto" id="amaretto" />
        <label for="amaretto">Amaretto</label>
        <input type="checkbox" name="aperol" id="aperol" />
        <label for="aperol">Aperol</label>
        <input type="checkbox" name="armagnac" id="armagnac" />
        <label for="armagnac">Armagnac</label>
        <input type="checkbox" name="beer" id="beer" />
        <label for="beer">Beer</label>
        <input type="checkbox" name="benedictine" id="benedictine" />
        <label for="benedictine">B&#233;n&#233;dictine</label>
        <input type="checkbox" name="bitters" id="bitters" />
        <label for="bitters">Bitters</label>
        <input type="checkbox" name="bloody-mary-mix" id="bloody-mary-mix" />
        <label for="bloody-mary-mix">Bloody Mary Mix</label>
        <input type="checkbox" name="brandy" id="brandy" />
        <label for="brandy">Brandy</label>
        <input type="checkbox" name="cachaca" id="cachaca" />
        <label for="cachaca">Cacha&#231;a</label>
        <input type="checkbox" name="champagne" id="champagne" />
        <label for="champagne">Champagne</label>
        <input type="checkbox" name="cider" id="cider" />
        <label for="cider">Cider</label>
        <input type="checkbox" name="cognac" id="cognac" />
        <label for="cognac">Cognac</label>
        <input type="checkbox" name="cooking-wine" id="cooking-wine" />
        <label for="cooking-wine">Cooking Wine</label>
        <input type="checkbox" name="cordial" id="cordial" />
        <label for="cordial">Cordial</label>
        <input type="checkbox" name="creme-de-menthe" id="creme-de-menthe" />
        <label for="creme-de-menthe">Cr&#232;me de Menthe</label>
        <input type="checkbox" name="curacao" id="curacao" />
        <label for="curacao">Cura&#231;ao</label>
        <input type="checkbox" name="daiquiri-mix" id="daiquiri-mix" />
        <label for="daiquiri-mix">Daiquiri Mix</label>
        <input type="checkbox" name="drambuie" id="drambuie" />
        <label for="drambuie">Drambuie</label>
        <input type="checkbox" name="gin" id="gin" />
        <label for="gin">Gin</label>
        <input type="checkbox" name="grappa" id="grappa" />
        <label for="grappa">Grappa</label>
        <input type="checkbox" name="irish-cream" id="irish-cream" />
        <label for="irish-cream">Irish Cream</label>
        <input type="checkbox" name="kirschwasser" id="kirschwasser" />
        <label for="kirschwasser">Kirschwasser</label>
        <input type="checkbox" name="liqueur" id="liqueur" />
        <label for="liqueur">Liqueur</label>
        <input type="checkbox" name="mezcal" id="mezcal" />
        <label for="mezcal">Mezcal</label>
        <input type="checkbox" name="moonshine" id="moonshine" />
        <label for="moonshine">Moonshine</label>
        <input type="checkbox" name="pina-colada-mix" id="pina-colada-mix" />
        <label for="pina-colada-mix">Pi&#241;a Colada Mix</label>
        <input type="checkbox" name="port-wine" id="port-wine" />
        <label for="port-wine">Port Wine</label>
        <input type="checkbox" name="prosecco" id="prosecco" />
        <label for="prosecco">Prosecco</label>
        <input type="checkbox" name="rice-wine" id="rice-wine" />
        <label for="rice-wine">Rice Wine</label>
        <input type="checkbox" name="rose" id="rose" />
        <label for="rose">Ros&#233;</label>
        <input type="checkbox" name="rum" id="rum" />
        <label for="rum">Rum</label>
        <input type="checkbox" name="sake" id="sake" />
        <label for="sake">Sake</label>
        <input type="checkbox" name="sangria" id="sangria" />
        <label for="sangria">Sangria</label>
        <input type="checkbox" name="schnapps" id="schnapps" />
        <label for="schnapps">Schnapps</label>
        <input type="checkbox" name="sherry" id="sherry" />
        <label for="sherry">Sherry</label>
        <input type="checkbox" name="tequila" id="tequila" />
        <label for="tequila">Tequila</label>
        <input type="checkbox" name="vermouth" id="vermouth" />
        <label for="vermouth">Vermouth</label>
        <input type="checkbox" name="vodka" id="vodka" />
        <label for="vodka">Vodka</label>
        <input type="checkbox" name="whiskey" id="whiskey" />
        <label for="whiskey">Whiskey</label>
        <input type="checkbox" name="wine" id="wine" />
        <label for="wine">Wine</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Baking Needs</legend>
        <input type="checkbox" name="agar-gum" id="agar-gum" />
        <label for="agar-gum">Agar Gum</label>
        <input type="checkbox" name="baking-chips" id="baking-chips" />
        <label for="baking-chips">Baking Chips</label>
        <input type="checkbox" name="baking-powder" id="baking-powder" />
        <label for="baking-powder">Baking Powder</label>
        <input type="checkbox" name="baking-soda" id="baking-soda" />
        <label for="baking-soda">Baking Soda</label>
        <input type="checkbox" name="biscuit-dough" id="biscuit-dough" />
        <label for="biscuit-dough">Biscuit Dough</label>
        <input type="checkbox" name="buckwheat" id="buckwheat" />
        <label for="buckwheat">Buckwheat</label>
        <input type="checkbox" name="cake-mix" id="cake-mix" />
        <label for="cake-mix">Cake Mix</label>
        <input type="checkbox" name="carob-bean-gum" id="carob-bean-gum" />
        <label for="carob-bean-gum">Carob Bean Gum</label>
        <input type="checkbox" name="chocolate-chip" id="chocolate-chip" />
        <label for="chocolate-chip">Chocolate Chips</label>
        <input type="checkbox" name="cookie-dough" id="cookie-dough" />
        <label for="cookie-dough">Cookie Dough</label>
        <input type="checkbox" name="cookie-mix" id="cookie-mix" />
        <label for="cookie-mix">Cookie Mix</label>
        <input type="checkbox" name="corn-starch" id="corn-starch" />
        <label for="corn-starch">Corn Starch</label>
        <input type="checkbox" name="cornmeal" id="cornmeal" />
        <label for="cornmeal">Cornmeal</label>
        <input type="checkbox" name="cream-of-tartar" id="cream-of-tartar" />
        <label for="cream-of-tartar">Cream of Tartar</label>
        <input type="checkbox" name="egg-wrap" id="egg-wrap" />
        <label for="egg-wrap">Egg Wrap</label>
        <input type="checkbox" name="flaxseed-meal" id="flaxseed-meal" />
        <label for="flaxseed-meal">Flaxseed Meal</label>
        <input type="checkbox" name="flour" id="flour" />
        <label for="flour">Flour</label>
        <input type="checkbox" name="gelatin" id="gelatin" />
        <label for="gelatin">Gelatin &#41;Jell-O&#41;</label>
        <input type="checkbox" name="guar-gum" id="guar-gum" />
        <label for="guar-gum">Guar Gum</label>
        <input type="checkbox" name="meringue-powder" id="meringue-powder" />
        <label for="meringue-powder">Meringue Powder</label>
        <input type="checkbox" name="millet" id="millet" />
        <label for="millet">Millet</label>
        <input type="checkbox" name="muffin-mix" id="muffin-mix" />
        <label for="muffin-mix">Muffin Mix</label>
        <input type="checkbox" name="pancake-mix" id="pancake-mix" />
        <label for="pancake-mix">Pancake Mix</label>
        <input type="checkbox" name="pectin" id="pectin" />
        <label for="pectin">Pectin</label>
        <input type="checkbox" name="pie-crust" id="pie-crust" />
        <label for="pie-crust">Pie Crust</label>
        <input type="checkbox" name="pizza-dough" id="pizza-dough" />
        <label for="pizza-dough">Pizza Dough</label>
        <input type="checkbox" name="potato-starch" id="potato-starch" />
        <label for="potato-starch">Potato Starch</label>
        <input type="checkbox" name="psyllium-husk" id="psyllium-husk" />
        <label for="psyllium-husk">Psyllium Husk</label>
        <input type="checkbox" name="puff-pastry" id="puff-pastry" />
        <label for="puff-pastry">Puff Pastry</label>
        <input type="checkbox" name="rice-flour" id="rice-flour" />
        <label for="rice-flour">Rice Flour</label>
        <input type="checkbox" name="rice-paper" id="rice-paper" />
        <label for="rice-paper">Rice Paper</label>
        <input
          type="checkbox"
          name="sourdough-starter"
          id="sourdough-starter"
        />
        <label for="sourdough-starter">Sourdough Starter</label>
        <input type="checkbox" name="spelt" id="spelt" />
        <label for="spelt">Spelt</label>
        <input type="checkbox" name="sprinkles" id="sprinkles" />
        <label for="sprinkles">Sprinkles</label>
        <input type="checkbox" name="tapioca-starch" id="tapioca-starch" />
        <label for="tapioca-starch">Tapioca Starch</label>
        <input type="checkbox" name="tortilla-dough" id="tortilla-dough" />
        <label for="tortilla-dough">Tortilla Dough</label>
        <input type="checkbox" name="vanilla" id="vanilla" />
        <label for="vanilla">Vanilla</label>
        <input
          type="checkbox"
          name="vital-wheat-gluten"
          id="vital-wheat-gluten"
        />
        <label for="vital-wheat-gluten">Vital Wheat Gluten</label>
        <input
          type="checkbox"
          name="whipped-cream-stabalizer"
          id="whipped-cream-stabalizer"
        />
        <label for="whipped-cream-stabalizer">Whipped Cream Stabalizer</label>
        <input type="checkbox" name="wonton" id="wonton" />
        <label for="wonton">Wonton</label>
        <input type="checkbox" name="xanthan-gum" id="xanthan-gum" />
        <label for="xanthan-gum">Xanthan Gum</label>
        <input type="checkbox" name="yeast" id="yeast" />
        <label for="yeast">Yeast</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Bread</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Canned Items</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Condiments, Sauces, Spreads, & Dips</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Cooking Oils & Fats</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Dairy & Cheese</legend>
        <input type="checkbox" name="american-cheese" id="american-cheese" />
        <label for="american-cheese">American Cheese</label>
        <input type="checkbox" name="asadero" id="asadero" />
        <label for="asadero">Asadero</label>
        <input type="checkbox" name="asiago" id="asiago" />
        <label for="asiago">Asiago</label>
        <input type="checkbox" name="blue-cheese" id="blue-cheese" />
        <label for="blue-cheese">Blue Cheese</label>
        <input type="checkbox" name="brie" id="brie" />
        <label for="brie">Brie</label>
        <input type="checkbox" name="butter" id="butter" />
        <label for="butter">Butter</label>
        <input type="checkbox" name="buttermilk" id="buttermilk" />
        <label for="buttermilk">Buttermilk</label>
        <input
          type="checkbox"
          name="buttermilk-powder"
          id="buttermilk-powder"
        />
        <label for="buttermilk-powder">Buttermilk Powder</label>
        <input type="checkbox" name="cajeta" id="cajeta" />
        <label for="cajeta">Cajeta</label>
        <input type="checkbox" name="camembert" id="camembert" />
        <label for="camembert">Camembert</label>
        <input type="checkbox" name="chantilly-cream" id="chantilly-cream" />
        <label for="chantilly-cream">Chantilly Cream</label>
        <input type="checkbox" name="cheddar" id="cheddar" />
        <label for="cheddar">Cheddar</label>
        <input type="checkbox" name="cheese-powder" id="cheese-powder" />
        <label for="cheese-powder">Cheese Powder</label>
        <input type="checkbox" name="chevre" id="chevre" />
        <label for="chevre">Chevre</label>
        <input type="checkbox" name="coffee-creamer" id="coffee-creamer" />
        <label for="coffee-creamer">Coffee Creamer</label>
        <input type="checkbox" name="colby-jack" id="colby-jack" />
        <label for="colby-jack">Colby Jack</label>
        <input type="checkbox" name="cotija" id="cotija" />
        <label for="cotija">Cotija</label>
        <input type="checkbox" name="cottage-cheese" id="cottage-cheese" />
        <label for="cottage-cheese">Cottage Cheese</label>
        <input type="checkbox" name="cream-cheese" id="cream-cheese" />
        <label for="cream-cheese">Cream Cheese</label>
        <input type="checkbox" name="cuajada" id="cuajada" />
        <label for="cuajada">Cuajada</label>
        <input type="checkbox" name="curd" id="curd" />
        <label for="curd">Curd</label>
        <input type="checkbox" name="custard" id="custard" />
        <label for="custard">Custard</label>
        <input type="checkbox" name="dulce-de-leche" id="dulce-de-leche" />
        <label for="dulce-de-leche">Dulce De Leche</label>
        <input type="checkbox" name="egg" id="egg" />
        <label for="egg">Egg</label>
        <input type="checkbox" name="evaporated-milk" id="evaporated-milk" />
        <label for="evaporated-milk">Evaporated Milk</label>
        <input type="checkbox" name="feta" id="feta" />
        <label for="feta">Feta</label>
        <input type="checkbox" name="fontina" id="fontina" />
        <label for="fontina">Fontina</label>
        <input type="checkbox" name="frosting" id="frosting" />
        <label for="frosting">Frosting</label>
        <input type="checkbox" name="frozen-yogurt" id="frozen-yogurt" />
        <label for="frozen-yogurt">Frozen Yogurt</label>
        <input type="checkbox" name="ganache" id="ganache" />
        <label for="ganache">Ganache</label>
        <input type="checkbox" name="ghee" id="ghee" />
        <label for="ghee">Ghee</label>
        <input type="checkbox" name="goat-cheese" id="goat-cheese" />
        <label for="goat-cheese">Goat Cheese</label>
        <input type="checkbox" name="goat-milk" id="goat-milk" />
        <label for="goat-milk">Goat Milk</label>
        <input type="checkbox" name="gouda" id="gouda" />
        <label for="gouda">Gouda</label>
        <input type="checkbox" name="gruyere" id="gruyere" />
        <label for="gruyere">Gruyere</label>
        <input type="checkbox" name="greek-yogurt" id="greek-yogurt" />
        <label for="greek-yogurt">Greek Yogurt</label>
        <input type="checkbox" name="half-half" id="half-half" />
        <label for="half-half">Half & Half</label>
        <input type="checkbox" name="halloumi" id="halloumi" />
        <label for="halloumi">Halloumi</label>
        <input type="checkbox" name="havarti" id="havarti" />
        <label for="havarti">Havarti</label>
        <input type="checkbox" name="heavy-cream" id="heavy-cream" />
        <label for="heavy-cream">Heavy Cream</label>
        <input type="checkbox" name="ice-cream" id="ice-cream" />
        <label for="ice-cream">Ice Cream</label>
        <input type="checkbox" name="jarlsberg-cheese" id="jarlsberg-cheese" />
        <label for="jarlsberg-cheese">Jarlsberg Cheese</label>
        <input type="checkbox" name="kashk" id="kashk" />
        <label for="kashk">Kashk</label>
        <input type="checkbox" name="kefir" id="kefir" />
        <label for="kefir">Kefir</label>
        <input type="checkbox" name="khoya" id="khoya" />
        <label for="khoya">Khoya</label>
        <input
          type="checkbox"
          name="liquid-egg-whites"
          id="liquid-egg-whites"
        />
        <label for="liquid-egg-whites">Liquid Egg Whites</label>
        <input type="checkbox" name="marble-cheese" id="marble-cheese" />
        <label for="marble-cheese">Marble Cheese</label>
        <input type="checkbox" name="margarine" id="margarine" />
        <label for="margarine">Margarine</label>
        <input type="checkbox" name="marscapone" id="marscapone" />
        <label for="marscapone">Marscapone</label>
        <input type="checkbox" name="milk" id="milk" />
        <label for="milk">Milk</label>
        <input type="checkbox" name="milk-powder" id="milk-powder" />
        <label for="milk-powder">Milk Powder</label>
        <input type="checkbox" name="monterey-jack" id="monterey-jack" />
        <label for="monterey-jack">Monterey Jack</label>
        <input type="checkbox" name="mozzarella" id="mozzarella" />
        <label for="mozzarella">Mozzarella</label>
        <input type="checkbox" name="muenster" id="muenster" />
        <label for="muenster">Muenster</label>
        <input type="checkbox" name="neufchatel" id="neufchatel" />
        <label for="neufchatel">Neufchatel</label>
        <input type="checkbox" name="niter-kibbeh" id="niter-kibbeh" />
        <label for="niter-kibbeh">Niter Kibbeh</label>
        <input type="checkbox" name="parmesan" id="parmesan" />
        <label for="parmesan">Parmesan</label>
        <input type="checkbox" name="pecorino" id="pecorino" />
        <label for="pecorino">Pecorino</label>
        <input type="checkbox" name="pepperjack" id="pepperjack" />
        <label for="pepperjack">Pepperjack</label>
        <input type="checkbox" name="provolone" id="provolone" />
        <label for="provolone">Provolone</label>
        <input type="checkbox" name="quark" id="quark" />
        <label for="quark">Quark &#40;Tvorog&#41;</label>
        <input type="checkbox" name="ricotta" id="ricotta" />
        <label for="ricotta">Ricotta</label>
        <input type="checkbox" name="sherbet" id="sherbet" />
        <label for="sherbet">Sherbet</label>
        <input type="checkbox" name="shortening" id="shortening" />
        <label for="shortening">Shortening</label>
        <input type="checkbox" name="skyr" id="skyr" />
        <label for="skyr">Skyr</label>
        <input type="checkbox" name="sour-cream" id="sour-cream" />
        <label for="sour-cream">Sour Cream</label>
        <input type="checkbox" name="starter-culture" id="starter-culture" />
        <label for="starter-culture">Starter Culture</label>
        <input type="checkbox" name="swiss-cheese" id="swiss-cheese" />
        <label for="swiss-cheese">Swiss Cheese</label>
        <input type="checkbox" name="whey" id="whey" />
        <label for="whey">Whey</label>
        <input type="checkbox" name="whipped-cream" id="whipped-cream" />
        <label for="whipped-cream">Whipped Cream</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Dessert</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Drinks</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Dressing & Vinegar</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Fruits</legend>
        <input type="checkbox" name="acai-berry" id="acai-berry" />
        <label for="acai-berry">A&#231;ai Berry</label>
        <input type="checkbox" name="amla" id="amla" />
        <label for="amla">Amla</label>
        <input type="checkbox" name="apple" id="apple" />
        <label for="apple">Apple</label>
        <input type="checkbox" name="apricot" id="apricot" />
        <label for="apricot">Apricot</label>
        <input type="checkbox" name="aronia-berry" id="aronia-berry" />
        <label for="aronia-berry">Aronia Berry</label>
        <input type="checkbox" name="banana" id="banana" />
        <label for="banana">Banana</label>
        <input type="checkbox" name="barberry" id="barberry" />
        <label for="barberry">Barberry</label>
        <input type="checkbox" name="blackberry" id="blackberry" />
        <label for="blackberry">Blackberry</label>
        <input type="checkbox" name="blueberry" id="blueberry" />
        <label for="blueberry">Blueberry</label>
        <input type="checkbox" name="boysenberry" id="boysenberry" />
        <label for="boysenberry">Boysenberry</label>
        <input type="checkbox" name="calamansi" id="calamansi" />
        <label for="calamansi">Calamansi</label>
        <input type="checkbox" name="cantaloupe" id="cantaloupe" />
        <label for="cantaloupe">Cantaloupe</label>
        <input type="checkbox" name="cherry" id="cherry" />
        <label for="cherry">Cherry</label>
        <input type="checkbox" name="chestnut" id="chestnut" />
        <label for="chestnut">Chestnut</label>
        <input type="checkbox" name="chikoo" id="chikoo" />
        <label for="chikoo">Chikoo</label>
        <input type="checkbox" name="chokeberry" id="chokeberry" />
        <label for="chokeberry">Chokeberry</label>
        <input type="checkbox" name="clementine" id="clementine" />
        <label for="clementine">Clementine</label>
        <input type="checkbox" name="cloudberry" id="cloudberry" />
        <label for="cloudberry">Cloudberry</label>
        <input type="checkbox" name="coconut" id="coconut" />
        <label for="coconut">Coconut</label>
        <input type="checkbox" name="crabapple" id="crabapple" />
        <label for="crabapple">Crabapple</label>
        <input type="checkbox" name="craisin" id="craisin" />
        <label for="craisin">Craisin</label>
        <input type="checkbox" name="cranberry" id="cranberry" />
        <label for="cranberry">Cranberry</label>
        <input type="checkbox" name="currant" id="currant" />
        <label for="currant">Currant</label>
        <input type="checkbox" name="date" id="date" />
        <label for="date">Date</label>
        <input type="checkbox" name="dewberry" id="dewberry" />
        <label for="dewberry">Dewberry</label>
        <input type="checkbox" name="dragonfruit" id="dragonfruit" />
        <label for="dragonfruit">Dragonfruit</label>
        <input type="checkbox" name="durian" id="durian" />
        <label for="durian">Durian</label>
        <input type="checkbox" name="elderberry" id="elderberry" />
        <label for="elderberry">Elderberry</label>
        <input type="checkbox" name="feijoa" id="feijoa" />
        <label for="feijoa">Feijoa</label>
        <input type="checkbox" name="fig" id="fig" />
        <label for="fig">Fig</label>
        <input type="checkbox" name="goji-berry" id="goji-berry" />
        <label for="goji-berry">Goji Berry</label>
        <input type="checkbox" name="gooseberry" id="gooseberry" />
        <label for="gooseberry">Gooseberry</label>
        <input type="checkbox" name="granadilla" id="granadilla" />
        <label for="granadilla">Granadilla</label>
        <input type="checkbox" name="grape" id="grape" />
        <label for="grape">Grape</label>
        <input type="checkbox" name="grapefruit" id="grapefruit" />
        <label for="grapefruit">Grapefruit</label>
        <input type="checkbox" name="guava" id="guava" />
        <label for="guava">Guava</label>
        <input type="checkbox" name="haskap-berry" id="haskap-berry" />
        <label for="haskap-berry">Haskap Berry</label>
        <input type="checkbox" name="hawthorn" id="hawthorn" />
        <label for="hawthorn">Hawthorn</label>
        <input type="checkbox" name="honeydew" id="honeydew" />
        <label for="honeydew">Honeydew</label>
        <input type="checkbox" name="huckleberry" id="huckleberry" />
        <label for="huckleberry">Huckleberry</label>
        <input type="checkbox" name="jackfruit" id="jackfruit" />
        <label for="jackfruit">Jackfruit</label>
        <input type="checkbox" name="jujube" id="jujube" />
        <label for="jujube">Jujube</label>
        <input type="checkbox" name="juniper-berry" id="juniper-berry" />
        <label for="juniper-berry">Juniper Berry</label>
        <input type="checkbox" name="kiwi" id="kiwi" />
        <label for="kiwi">Kiwi</label>
        <input type="checkbox" name="kokum" id="kokum" />
        <label for="kokum">Kokum</label>
        <input type="checkbox" name="kumquat" id="kumquat" />
        <label for="kumquat">Kumquat</label>
        <input type="checkbox" name="lemon" id="lemon" />
        <label for="lemon">Lemon</label>
        <input type="checkbox" name="lime" id="lime" />
        <label for="lime">Lime</label>
        <input type="checkbox" name="lingonberry" id="lingonberry" />
        <label for="lingonberry">Lingonberry</label>
        <input type="checkbox" name="loganberry" id="loganberry" />
        <label for="loganberry">Loganberry</label>
        <input type="checkbox" name="lychee" id="lychee" />
        <label for="lychee">Lychee</label>
        <input type="checkbox" name="mamey" id="mamey" />
        <label for="mamey">Mamey</label>
        <input type="checkbox" name="mandarin" id="mandarin" />
        <label for="mandarin">Mandarin</label>
        <input type="checkbox" name="mango" id="mango" />
        <label for="mango">Mango</label>
        <input type="checkbox" name="mulberry" id="mulberry" />
        <label for="mulberry">Mulberry</label>
        <input type="checkbox" name="nectarine" id="nectarine" />
        <label for="nectarine">Nectarine</label>
        <input type="checkbox" name="orange" id="orange" />
        <label for="orange">Orange</label>
        <input type="checkbox" name="papaya" id="papaya" />
        <label for="papaya">Papaya</label>
        <input type="checkbox" name="passion-fruit" id="passion-fruit" />
        <label for="passion-fruit">Passion Fruit</label>
        <input type="checkbox" name="peach" id="peach" />
        <label for="peach">Peach</label>
        <input type="checkbox" name="pear" id="pear" />
        <label for="pear">Pear</label>
        <input type="checkbox" name="persimmon" id="persimmon" />
        <label for="persimmon">Persimmon</label>
        <input type="checkbox" name="pineapple" id="pineapple" />
        <label for="pineapple">Pineapple</label>
        <input type="checkbox" name="plum" id="plum" />
        <label for="plum">Plum</label>
        <input type="checkbox" name="pomegranate" id="pomegranate" />
        <label for="pomegranate">Pomegranate</label>
        <input type="checkbox" name="pomelo" id="pomelo" />
        <label for="pomelo">Pomelo</label>
        <input type="checkbox" name="prune" id="prune" />
        <label for="prune">Prune</label>
        <input type="checkbox" name="raisin" id="raisin" />
        <label for="raisin">Raisin</label>
        <input type="checkbox" name="rambutan" id="rambutan" />
        <label for="rambutan">Rambutan</label>
        <input type="checkbox" name="raspberry" id="raspberry" />
        <label for="raspberry">Raspberry</label>
        <input type="checkbox" name="rhubarb" id="rhubarb" />
        <label for="rhubarb">Rhubarb</label>
        <input type="checkbox" name="rosehip" id="rosehip" />
        <label for="rosehip">Rosehip</label>
        <input type="checkbox" name="saskatoon-berry" id="saskatoon-berry" />
        <label for="saskatoon-berry">Saskatoon Berry</label>
        <input type="checkbox" name="sea-buckthorn" id="sea-buckthorn" />
        <label for="sea-buckthorn">Sea Buckthorn</label>
        <input type="checkbox" name="sloe-berry" id="sloe-berry" />
        <label for="sloe-berry">Sloe Berry</label>
        <input type="checkbox" name="soursop" id="soursop" />
        <label for="soursop">Soursop</label>
        <input type="checkbox" name="star-fruit" id="star-fruit" />
        <label for="star-fruit">Star Fruit</label>
        <input type="checkbox" name="strawberry" id="strawberry" />
        <label for="strawberry">Strawberry</label>
        <input type="checkbox" name="sultana" id="sultana" />
        <label for="sultana">Sultana</label>
        <input type="checkbox" name="tamarillo" id="tamarillo" />
        <label for="tamarillo">Tamarillo</label>
        <input type="checkbox" name="tamarind" id="tamarind" />
        <label for="tamarind">Tamarind</label>
        <input type="checkbox" name="tangelo" id="tangelo" />
        <label for="tangelo">Tangelo</label>
        <input type="checkbox" name="watermelon" id="watermelon" />
        <label for="watermelon">Watermelon</label>
        <input type="checkbox" name="yuzu" id="yuzu" />
        <label for="yuzu">Yuzu</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Grains & Pasta</legend>
        <input type="checkbox" name="barley" id="barley" />
        <label for="barley">barley</label>
        <input type="checkbox" name="cauliflower-rice" id="cauliflower-rice" />
        <label for="cauliflower-rice">Cauliflower Rice</label>
        <input type="checkbox" name="couscous" id="couscous" />
        <label for="couscous">Couscous</label>
        <input type="checkbox" name="cream-of-wheat" id="cream-of-wheat" />
        <label for="cream-of-wheat">Cream of Wheat</label>
        <input
          type="checkbox"
          name="crispy-rice-cereal"
          id="crispy-rice-cereal"
        />
        <label for="crispy-rice-cereal">Crispy Rice Cereal</label>
        <input type="checkbox" name="durum-wheat" id="durum-wheat" />
        <label for="durum-wheat">Durum Wheat</label>
        <input type="checkbox" name="farro" id="farro" />
        <label for="farro">Farro</label>
        <input type="checkbox" name="granola" id="granola" />
        <label for="granola">Granola</label>
        <input type="checkbox" name="grits" id="grits" />
        <label for="grits">Grits</label>
        <input type="checkbox" name="muesli" id="muesli" />
        <label for="muesli">Muesli</label>
        <input type="checkbox" name="oats" id="oats" />
        <label for="oats">Oats</label>
        <input type="checkbox" name="pilaf" id="pilaf" />
        <label for="pilaf">Pilaf</label>
        <input type="checkbox" name="quinoa" id="quinoa" />
        <label for="quinoa">Quinoa</label>
        <input type="checkbox" name="rice" id="rice" />
        <label for="rice">Rice</label>
        <input type="checkbox" name="semolina" id="semolina" />
        <label for="semolina">Semolina</label>
        <input type="checkbox" name="sorghum" id="sorghum" />
        <label for="sorghum">Sorghum</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Meat</legend>
        <input type="checkbox" name="bacon" id="bacon" />
        <label for="bacon">Bacon</label>
        <input type="checkbox" name="beef" id="beef" />
        <label for="beef">Beef</label>
        <input type="checkbox" name="bison" id="bison" />
        <label for="bison">Bison</label>
        <input type="checkbox" name="bologna" id="bologna" />
        <label for="bologna">Bologna</label>
        <input type="checkbox" name="bratwurst" id="bratwurst" />
        <label for="bratwurst">Bratwurst</label>
        <input type="checkbox" name="brisket" id="brisket" />
        <label for="brisket">Brisket</label>
        <input type="checkbox" name="chicken" id="chicken" />
        <label for="chicken">Chicken</label>
        <input type="checkbox" name="chorizo" id="chorizo" />
        <label for="chorizo">Chorizo</label>
        <input type="checkbox" name="duck" id="duck" />
        <label for="duck">Duck</label>
        <input type="checkbox" name="gammon" id="gammon" />
        <label for="gammon">Gammon</label>
        <input type="checkbox" name="goose" id="goose" />
        <label for="goose">Goose</label>
        <input type="checkbox" name="guineafowl" id="guineafowl" />
        <label for="guineafowl">Guineafowl</label>
        <input type="checkbox" name="ham" id="ham" />
        <label for="ham">Ham</label>
        <input type="checkbox" name="kielbasa" id="kielbasa" />
        <label for="kielbasa">Kielbasa</label>
        <input type="checkbox" name="lamb" id="lamb" />
        <label for="lamb">Lamb</label>
        <input type="checkbox" name="lap-cheong" id="lap-cheong" />
        <label for="lap-cheong">Lap Cheong &#40;Chinese Sausage&#41;</label>
        <input type="checkbox" name="mortadella" id="mortadella" />
        <label for="mortadella">Mortadella</label>
        <input type="checkbox" name="mutton" id="mutton" />
        <label for="mutton">Mutton</label>
        <input type="checkbox" name="pancetta" id="pancetta" />
        <label for="pancetta">Pancetta</label>
        <input type="checkbox" name="pastrami" id="pastrami" />
        <label for="pastrami">Pastrami</label>
        <input type="checkbox" name="pepperoni" id="pepperoni" />
        <label for="pepperoni">Pepperoni</label>
        <input type="checkbox" name="pheasant" id="pheasant" />
        <label for="pheasant">Pheasant</label>
        <input type="checkbox" name="pork" id="pork" />
        <label for="pork">Pork</label>
        <input type="checkbox" name="prosciutto" id="prosciutto" />
        <label for="prosciutto">Prosciutto</label>
        <input type="checkbox" name="rabbit" id="rabbit" />
        <label for="rabbit">Rabbit</label>
        <input type="checkbox" name="salami" id="salami" />
        <label for="salami">Salami</label>
        <input type="checkbox" name="sausage" id="sausage" />
        <label for="sausage">Sausage</label>
        <input type="checkbox" name="steak" id="steak" />
        <label for="steak">Steak</label>
        <input type="checkbox" name="turkey" id="turkey" />
        <label for="turkey">Turkey</label>
        <input type="checkbox" name="veal" id="veal" />
        <label for="veal">Veal</label>
        <input type="checkbox" name="venison" id="venison" />
        <label for="venison">Venison</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Nuts</legend>
        <input type="checkbox" name="almond" id="almond" />
        <label for="almond">Almond</label>
        <input type="checkbox" name="baruka" id="baruka" />
        <label for="baruka">Bar&#249;ka</label>
        <input type="checkbox" name="brazil-nut" id="brazil-nut" />
        <label for="brazil-nut">Brazil Nut</label>
        <input type="checkbox" name="candlenut" id="candlenut" />
        <label for="candlenut">Candlenut</label>
        <input type="checkbox" name="cashew" id="cashew" />
        <label for="cashew">Cashew</label>
        <input type="checkbox" name="ginkgo-nut" id="ginkgo-nut" />
        <label for="ginkgo-nut">Ginkgo Nut</label>
        <input type="checkbox" name="hazelnut" id="hazelnut" />
        <label for="hazelnut">Hazelnut</label>
        <input type="checkbox" name="macadamia" id="macadamia" />
        <label for="macadamia">Macadamia</label>
        <input type="checkbox" name="peanut" id="peanut" />
        <label for="peanut">Peanut</label>
        <input type="checkbox" name="pecan" id="pecan" />
        <label for="pecan">Pecan</label>
        <input type="checkbox" name="pine-nut" id="pine-nut" />
        <label for="pine-nut">Pine Nut</label>
        <input type="checkbox" name="pistachio" id="pistachio" />
        <label for="pistachio">Pistachio</label>
        <input type="checkbox" name="tigernut" id="tigernut" />
        <label for="tigernut">Tigernut</label>
        <input type="checkbox" name="walnut" id="walnut" />
        <label for="walnut">Walnut</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Salty Food</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Seafood</legend>
        <input type="checkbox" name="abalone" id="abalone" />
        <label for="abalone">Abalone</label>
        <input type="checkbox" name="amberjack" id="amberjack" />
        <label for="amberjack">Amberjack</label>
        <input type="checkbox" name="anchovy" id="anchovy" />
        <label for="anchovy">Anchovy</label>
        <input type="checkbox" name="aonori" id="aonori" />
        <label for="aonori">Aonori</label>
        <input type="checkbox" name="arame" id="arame" />
        <label for="arame">Arame</label>
        <input type="checkbox" name="arctic-char" id="arctic-char" />
        <label for="arctic-char">Arctic Char</label>
        <input type="checkbox" name="bangus" id="bangus" />
        <label for="bangus">Bangus</label>
        <input type="checkbox" name="barramundi" id="barramundi" />
        <label for="barramundi">Barramundi</label>
        <input type="checkbox" name="bass" id="bass" />
        <label for="bass">Bass</label>
        <input type="checkbox" name="bluefish" id="bluefish" />
        <label for="bluefish">Bluefish</label>
        <input type="checkbox" name="bottarga" id="bottarga" />
        <label for="bottarga">Bottarga</label>
        <input type="checkbox" name="branzino" id="branzino" />
        <label for="branzino">Branzino</label>
        <input type="checkbox" name="bream" id="bream" />
        <label for="bream">Bream</label>
        <input type="checkbox" name="calamari" id="calamari" />
        <label for="calamari">Calamari</label>
        <input type="checkbox" name="carp" id="carp" />
        <label for="carp">Carp</label>
        <input type="checkbox" name="catfish" id="catfish" />
        <label for="catfish">Catfish</label>
        <input type="checkbox" name="caviar" id="caviar" />
        <label for="caviar">Caviar</label>
        <input type="checkbox" name="clam" id="clam" />
        <label for="clam">Clam</label>
        <input type="checkbox" name="cod" id="cod" />
        <label for="cod">Cod</label>
        <input type="checkbox" name="conch" id="conch" />
        <label for="conch">Conch</label>
        <input type="checkbox" name="crab" id="crab" />
        <label for="crab">Crab</label>
        <input type="checkbox" name="crawfish" id="crawfish" />
        <label for="crawfish">Crawfish</label>
        <input type="checkbox" name="cuttlefish" id="cuttlefish" />
        <label for="cuttlefish">Cuttlefish</label>
        <input type="checkbox" name="dulse" id="dulse" />
        <label for="dulse">Dulse</label>
        <input type="checkbox" name="eel" id="eel" />
        <label for="eel">Eel</label>
        <input type="checkbox" name="flathead" id="flathead" />
        <label for="flathead">Flathead</label>
        <input type="checkbox" name="flounder" id="flounder" />
        <label for="flounder">Flounder</label>
        <input type="checkbox" name="garoupa" id="garoupa" />
        <label for="garoupa">Garoupa</label>
        <input type="checkbox" name="grouper" id="grouper" />
        <label for="grouper">Grouper</label>
        <input type="checkbox" name="haddock" id="haddock" />
        <label for="haddock">Haddock</label>
        <input type="checkbox" name="hake" id="hake" />
        <label for="hake">Hake</label>
        <input type="checkbox" name="halibut" id="halibut" />
        <label for="halibut">Halibut</label>
        <input type="checkbox" name="herring" id="herring" />
        <label for="herring">Herring</label>
        <input type="checkbox" name="hijiki" id="hijiki" />
        <label for="hijiki">Hijiki</label>
        <input type="checkbox" name="jellyfish" id="jellyfish" />
        <label for="jellyfish">Jellyfish</label>
        <input type="checkbox" name="john-dory" id="john-dory" />
        <label for="john-dory">John Dory</label>
        <input type="checkbox" name="kelp" id="kelp" />
        <label for="kelp">Kelp</label>
        <input type="checkbox" name="kingfish" id="kingfish" />
        <label for="kingfish">Kingfish</label>
        <input type="checkbox" name="kombu" id="kombu" />
        <label for="kombu">Kombu</label>
        <input type="checkbox" name="langoustine" id="langoustine" />
        <label for="langoustine">Langoustine</label>
        <input type="checkbox" name="lemon-sole" id="lemon-sole" />
        <label for="lemon-sole">Lemon Sole</label>
        <input type="checkbox" name="lobster" id="lobster" />
        <label for="lobster">Lobster</label>
        <input type="checkbox" name="mackerel" id="mackerel" />
        <label for="mackerel">Mackerel</label>
        <input type="checkbox" name="mahi-mahi" id="mahi-mahi" />
        <label for="mahi-mahi">Mahi Mahi</label>
        <input type="checkbox" name="marlin" id="marlin" />
        <label for="marlin">Marlin</label>
        <input type="checkbox" name="monkfish" id="monkfish" />
        <label for="monkfish">Monkfish</label>
        <input type="checkbox" name="mullet" id="mullet" />
        <label for="mullet">Mullet</label>
        <input type="checkbox" name="mussel" id="mussel" />
        <label for="mussel">Mussel</label>
        <input type="checkbox" name="nori" id="nori" />
        <label for="nori">Nori</label>
        <input type="checkbox" name="octopus" id="octopus" />
        <label for="octopus">Octopus</label>
        <input type="checkbox" name="ogo" id="ogo" />
        <label for="ogo">Ogo</label>
        <input type="checkbox" name="orange-roughy" id="orange-roughy" />
        <label for="orange-roughy">Orange Roughy</label>
        <input type="checkbox" name="oyster" id="oyster" />
        <label for="oyster">Oyster</label>
        <input type="checkbox" name="pangasius" id="pangasius" />
        <label for="pangasius">Pangasius</label>
        <input type="checkbox" name="perch" id="perch" />
        <label for="perch">Perch</label>
        <input type="checkbox" name="pike" id="pike" />
        <label for="pike">Pike</label>
        <input type="checkbox" name="plaice" id="plaice" />
        <label for="plaice">Plaice</label>
        <input type="checkbox" name="pomfret" id="pomfret" />
        <label for="pomfret">Pomfret</label>
        <input type="checkbox" name="pompano" id="pompano" />
        <label for="pompano">Pompano</label>
        <input type="checkbox" name="prawn" id="prawn" />
        <label for="prawn">Prawn</label>
        <input type="checkbox" name="rockfish" id="rockfish" />
        <label for="rockfish">Rockfish</label>
        <input type="checkbox" name="roe" id="roe" />
        <label for="roe">Roe</label>
        <input type="checkbox" name="rohu" id="rohu" />
        <label for="rohu">Rohu</label>
        <input type="checkbox" name="salmon" id="salmon" />
        <label for="salmon">Salmon</label>
        <input type="checkbox" name="sardine" id="sardine" />
        <label for="sardine">Sardine</label>
        <input type="checkbox" name="scallop" id="scallop" />
        <label for="scallop">Scallop</label>
        <input type="checkbox" name="scampi" id="scampi" />
        <label for="scampi">Scampi</label>
        <input type="checkbox" name="schnitzel" id="schnitzel" />
        <label for="schnitzel">Schnitzel</label>
        <input type="checkbox" name="seaweed" id="seaweed" />
        <label for="seaweed">Seaweed</label>
        <input type="checkbox" name="shark" id="shark" />
        <label for="shark">Shark</label>
        <input type="checkbox" name="shrimp" id="shrimp" />
        <label for="shrimp">Shrimp</label>
        <input type="checkbox" name="snail" id="snail" />
        <label for="snail">Snail</label>
        <input type="checkbox" name="snapper" id="snapper" />
        <label for="snapper">Snapper</label>
        <input type="checkbox" name="squid" id="squid" />
        <label for="squid">Squid</label>
        <input type="checkbox" name="sturgeon" id="sturgeon" />
        <label for="sturgeon">Sturgeon</label>
        <input type="checkbox" name="surimi" id="surimi" />
        <label for="surimi">Surimi</label>
        <input type="checkbox" name="swai" id="swai" />
        <label for="swai">Swai &#40;Basa&#41;</label>
        <input type="checkbox" name="swordfish" id="swordfish" />
        <label for="swordfish">Swordfish</label>
        <input type="checkbox" name="tilapia" id="tilapia" />
        <label for="tilapia">Tilapia</label>
        <input type="checkbox" name="tinapa" id="tinapa" />
        <label for="tinapa">Tinapa</label>
        <input type="checkbox" name="trout" id="trout" />
        <label for="trout">Trout</label>
        <input type="checkbox" name="tuna" id="tuna" />
        <label for="tuna">Tuna</label>
        <input type="checkbox" name="turbot" id="turbot" />
        <label for="turbot">Turbot</label>
        <input type="checkbox" name="urchin" id="urchin" />
        <label for="urchin">Urchin</label>
        <input type="checkbox" name="wakami" id="wakami" />
        <label for="wakami">Wakami</label>
        <input type="checkbox" name="walleye" id="walleye" />
        <label for="walleye">Walleye</label>
        <input type="checkbox" name="whitefish" id="whitefish" />
        <label for="whitefish">Whitefish</label>
        <input type="checkbox" name="whiting" id="whiting" />
        <label for="whiting">Whiting</label>
        <input type="checkbox" name="yellowtail" id="yellowtail" />
        <label for="yellowtail">Yellowtail</label>
        <input type="checkbox" name="zander" id="zander" />
        <label for="zander">Zander</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Seeds</legend>
        <input type="checkbox" name="apricot-kernel" id="apricot-kernel" />
        <label for="apricot-kernel">Apricot Kernel</label>
        <input type="checkbox" name="basal-seed" id="basal-seed" />
        <label for="basal-seed">Basal Seed</label>
        <input type="checkbox" name="chia" id="chia" />
        <label for="chia">Chia</label>
        <input type="checkbox" name="fennel-seed" id="fennel-seed" />
        <label for="fennel-seed">Fennel Seed</label>
        <input type="checkbox" name="flaxseed" id="flaxseed" />
        <label for="flaxseed">Flaxseed</label>
        <input type="checkbox" name="hemp" id="hemp" />
        <label for="hemp">Hemp</label>
        <input type="checkbox" name="jackfruit-seed" id="jackfruit-seed" />
        <label for="jackfruit-seed">Jackfruit Seed</label>
        <input type="checkbox" name="lotus-seed" id="lotus-seed" />
        <label for="lotus-seed">Lotus Seed</label>
        <input type="checkbox" name="melon-seed" id="melon-seed" />
        <label for="melon-seed">Melon Seed</label>
        <input type="checkbox" name="nigella-seed" id="nigella-seed" />
        <label for="nigella-seed">Nigella Seed</label>
        <input type="checkbox" name="onion-seed" id="onion-seed" />
        <label for="onion-seed">Onion Seed</label>
        <input type="checkbox" name="palm-seed" id="palm-seed" />
        <label for="palm-seed">Palm Seed</label>
        <input type="checkbox" name="poppyseed" id="poppyseed" />
        <label for="poppyseed">Poppyseed</label>
        <input type="checkbox" name="pumpkin-seed" id="pumpkin-seed" />
        <label for="pumpkin-seed">Pumpkin Seed</label>
        <input type="checkbox" name="sesame-seed" id="sesame-seed" />
        <label for="sesame-seed">Sesame Seed</label>
        <input type="checkbox" name="sunflower-seed" id="sunflower-seed" />
        <label for="sunflower-seed">Sunflower Seed</label>
        <input type="checkbox" name="wattleseed" id="wattleseed" />
        <label for="wattleseed">Wattleseed</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Soup, Stew, Broth, & Stock</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Spices</legend>
        <input type="checkbox" name="adobo-seasoning" id="adobo-seasoning" />
        <label for="adobo-seasoning">Adobo Seasoning</label>
        <input
          type="checkbox"
          name="all-purpose-seasoning"
          id="all-purpose-seasoning"
        />
        <label for="all-purpose-seasoning">All-Purpose Seasoning</label>
        <input type="checkbox" name="allspice" id="allspice" />
        <label for="allspice">Allspice</label>
        <input type="checkbox" name="aniseed" id="aniseed" />
        <label for="aniseed">Aniseed</label>
        <input type="checkbox" name="apple-pie-spice" id="apple-pie-spice" />
        <label for="apple-pie-spice">Apple Pie Spice</label>
        <input type="checkbox" name="asafoetida" id="asafoetida" />
        <label for="asafoetida">Asafoetida</label>
        <input type="checkbox" name="au-jus-mix" id="au-jus-mix" />
        <label for="au-jus-mix">Au Jus Mix</label>
        <input
          type="checkbox"
          name="barbecue-seasoning"
          id="barbecue-seasoning"
        />
        <label for="barbecue-seasoning">Barbecue Seasoning</label>
        <input type="checkbox" name="basil" id="basil" />
        <label for="basil">Basil</label>
        <input type="checkbox" name="bay-leaf" id="bay-leaf" />
        <label for="bay-leaf">Bay Leaf</label>
        <input type="checkbox" name="berbere" id="berbere" />
        <label for="berbere">Berbere</label>
        <input type="checkbox" name="black-pepper" id="black-pepper" />
        <label for="black-pepper">Black Pepper</label>
        <input type="checkbox" name="cajun-blend" id="cajun-blend" />
        <label for="cajun-blend">Cajun Blend</label>
        <input type="checkbox" name="caraway" id="caraway" />
        <label for="caraway">Caraway</label>
        <input type="checkbox" name="cardamom" id="cardamom" />
        <label for="cardamom">Cardamom</label>
        <input type="checkbox" name="carne-asada" id="carne-asada" />
        <label for="carne-asada">Carne Asada</label>
        <input type="checkbox" name="caribbean-jerk" id="caribbean-jerk" />
        <label for="caribbean-jerk">Caribbean Jerk</label>
        <input type="checkbox" name="carom-seed" id="carom-seed" />
        <label for="carom-seed">Carom Seed</label>
        <input type="checkbox" name="cayenne-pepper" id="cayenne-pepper" />
        <label for="cayenne-pepper">Cayenne Pepper</label>
        <input type="checkbox" name="celery-powder" id="celery-powder" />
        <label for="celery-powder">Celery Powder</label>
        <input type="checkbox" name="celery-seed" id="celery-seed" />
        <label for="celery-seed">Celery Seed</label>
        <input type="checkbox" name="chervil" id="chervil" />
        <label for="chervil">Chervil</label>
        <input
          type="checkbox"
          name="chicken-seasoning"
          id="chicken-seasoning"
        />
        <label for="chicken-seasoning">Chicken Seasoning</label>
        <input type="checkbox" name="chili-flake" id="chili-flake" />
        <label for="chili-flake">Chili Flake</label>
        <input type="checkbox" name="chili-lime-blend" id="chili-lime-blend" />
        <label for="chili-lime-blend">Chili-Lime Blend</label>
        <input type="checkbox" name="chili-powder" id="chili-powder" />
        <label for="chili-powder">Chili Powder</label>
        <input type="checkbox" name="chipotle-blend" id="chipotle-blend" />
        <label for="chipotle-blend">Chipotle Blend</label>
        <input type="checkbox" name="chive" id="chive" />
        <label for="chive">Chive</label>
        <input type="checkbox" name="cilantro" id="cilantro" />
        <label for="cilantro">Cilantro</label>
        <input type="checkbox" name="cinnamon" id="cinnamon" />
        <label for="cinnamon">Cinnamon</label>
        <input type="checkbox" name="clove" id="clove" />
        <label for="clove">Clove</label>
        <input type="checkbox" name="coriander" id="coriander" />
        <label for="coriander">Coriander</label>
        <input type="checkbox" name="crab-boil-blend" id="crab-boil-blend" />
        <label for="crab-boil-blend">Crab Boil Blend</label>
        <input type="checkbox" name="creole-seasoning" id="creole-seasoning" />
        <label for="creole-seasoning">Creole Seasoning</label>
        <input type="checkbox" name="cumin" id="cumin" />
        <label for="cumin">Cumin</label>
        <input type="checkbox" name="curry-powder" id="curry-powder" />
        <label for="curry-powder">Curry Powder</label>
        <input type="checkbox" name="dill" id="dill" />
        <label for="dill">Dill</label>
        <input type="checkbox" name="everything-bagel" id="everything-bagel" />
        <label for="everything-bagel">Everything Bagel</label>
        <input type="checkbox" name="fajita-seasoning" id="fajita-seasoning" />
        <label for="fajita-seasoning">Fajita Seasoning</label>
        <input type="checkbox" name="fennel-seed" id="fennel-seed" />
        <label for="fennel-seed">Fennel Seed</label>
        <input type="checkbox" name="fenugreek" id="fenugreek" />
        <label for="fenugreek">Fenugreek</label>
        <input type="checkbox" name="fines-herbes" id="fines-herbes" />
        <label for="fines-herbes">Fines Herbes</label>
        <input type="checkbox" name="galangal" id="galangal" />
        <label for="galangal">Galangal</label>
        <input type="checkbox" name="garam-masala" id="garam-masala" />
        <label for="garam-masala">Garam Masala</label>
        <input
          type="checkbox"
          name="garlic-herb-blend"
          id="garlic-herb-blend"
        />
        <label for="garlic-herb-blend">Garlic-Herb Blend</label>
        <input
          type="checkbox"
          name="garlic-pepper-blend"
          id="garlic-pepper-blend"
        />
        <label for="garlic-pepper-blend">Garlic-Pepper Blend</label>
        <input type="checkbox" name="garlic-powder" id="garlic-powder" />
        <label for="garlic-powder">Garlic Powder</label>
        <input type="checkbox" name="garlic-salt" id="garlic-salt" />
        <label for="garlic-salt">Garlic Salt</label>
        <input type="checkbox" name="ginger" id="ginger" />
        <label for="ginger">Ginger</label>
        <input
          type="checkbox"
          name="gingerbread-spice"
          id="gingerbread-spice"
        />
        <label for="gingerbread-spice">Gingerbread Spice</label>
        <input type="checkbox" name="gochugaru" id="gochugaru" />
        <label for="gochugaru">Gochugaru</label>
        <input type="checkbox" name="gravy-mix" id="gravy-mix" />
        <label for="gravy-mix">Gravy Mix</label>
        <input type="checkbox" name="greek-blend" id="greek-blend" />
        <label for="greek-blend">Greek Blend</label>
        <input type="checkbox" name="harissa-blend" id="harissa-blend" />
        <label for="harissa-blend">Harissa Blend</label>
        <input
          type="checkbox"
          name="herbes-de-provence"
          id="herbes-de-provence"
        />
        <label for="herbes-de-provence">Herbes de Provence</label>
        <input
          type="checkbox"
          name="himalayan-pink-salt"
          id="himalayan-pink-salt"
        />
        <label for="himalayan-pink-salt">Himalayan Pink Salt</label>
        <input type="checkbox" name="italian-blend" id="italian-blend" />
        <label for="italian-blend">Italian Blend</label>
        <input type="checkbox" name="lavender" id="lavender" />
        <label for="lavender">Lavender</label>
        <input
          type="checkbox"
          name="lemon-pepper-blend"
          id="lemon-pepper-blend"
        />
        <label for="lemon-pepper-blend">Lemon-Pepper Blend</label>
        <input type="checkbox" name="lemon-zest" id="lemon-zest" />
        <label for="lemon-zest">Lemon Zest</label>
        <input type="checkbox" name="lemongrass" id="lemongrass" />
        <label for="lemongrass">Lemongrass</label>
        <input type="checkbox" name="lime-zest" id="lime-zest" />
        <label for="lime-zest">Lime Zest</label>
        <input type="checkbox" name="liquid-smoke" id="liquid-smoke" />
        <label for="liquid-smoke">Liquid Smoke</label>
        <input type="checkbox" name="marjoram" id="marjoram" />
        <label for="marjoram">Marjoram</label>
        <input type="checkbox" name="matcha" id="matcha" />
        <label for="matcha">Matcha</label>
        <input type="checkbox" name="mesquite-blend" id="mesquite-blend" />
        <label for="mesquite-blend">Mesquite Blend</label>
        <input type="checkbox" name="mexican-blend" id="mexican-blend" />
        <label for="mexican-blend">Mexican Blend</label>
        <input type="checkbox" name="mint" id="mint" />
        <label for="mint">Mint</label>
        <input type="checkbox" name="miso" id="miso" />
        <label for="miso">Miso</label>
        <input
          type="checkbox"
          name="monosodium-glutamate"
          id="monosodium-glutamate"
        />
        <label for="monosodium-glutamate"
          >Monosodium Glutamate &#40;MSG&#41;</label
        >
        <input type="checkbox" name="moroccan-blend" id="moroccan-blend" />
        <label for="moroccan-blend">Moroccan Blend</label>
        <input
          type="checkbox"
          name="mushroom-seasoning"
          id="mushroom-seasoning"
        />
        <label for="mushroom-seasoning">Mushroom Seasoning</label>
        <input type="checkbox" name="mustard-powder" id="mustard-powder" />
        <label for="mustard-powder">Mustard Powder</label>
        <input type="checkbox" name="mustard-seed" id="mustard-seed" />
        <label for="mustard-seed">Mustard Seed</label>
        <input type="checkbox" name="nutmeg" id="nutmeg" />
        <label for="nutmeg">Nutmeg</label>
        <input type="checkbox" name="old-bay" id="old-bay" />
        <label for="old-bay">Old Bay</label>
        <input type="checkbox" name="onion-powder" id="onion-powder" />
        <label for="onion-powder">Onion Powder</label>
        <input type="checkbox" name="onion-salt" id="onion-salt" />
        <label for="onion-salt">Onion Salt</label>
        <input type="checkbox" name="orange-peel" id="orange-peel" />
        <label for="orange-peel">Orange Peel</label>
        <input type="checkbox" name="oregano" id="oregano" />
        <label for="oregano">Oregano</label>
        <input type="checkbox" name="paprika" id="paprika" />
        <label for="paprika">Paprika</label>
        <input type="checkbox" name="parsley" id="parsley" />
        <label for="parsley">Parsley</label>
        <input type="checkbox" name="pizza-seasoning" id="pizza-seasoning" />
        <label for="pizza-seasoning">Pizza Seasoning</label>
        <input type="checkbox" name="potassium-salt" id="potassium-salt" />
        <label for="potassium-salt">Potassium Salt</label>
        <input
          type="checkbox"
          name="pumpkin-pie-spice"
          id="pumpkin-pie-spice"
        />
        <label for="pumpkin-pie-spice">Pumpkin Pie Spice</label>
        <input type="checkbox" name="ranch-seasoning" id="ranch-seasoning" />
        <label for="ranch-seasoning">Ranch Seasoning</label>
        <input type="checkbox" name="rosemary" id="rosemary" />
        <label for="rosemary">Rosemary</label>
        <input type="checkbox" name="sage" id="sage" />
        <label for="sage">Sage</label>
        <input type="checkbox" name="salt" id="salt" />
        <label for="salt">Salt</label>
        <input type="checkbox" name="sambar-powder" id="sambar-powder" />
        <label for="sambar-powder">Sambar Powder</label>
        <input
          type="checkbox"
          name="seafood-seasoning"
          id="seafood-seasoning"
        />
        <label for="seafood-seasoning">Seafood Seasoning</label>
        <input type="checkbox" name="shawarma" id="shawarma" />
        <label for="shawarma">Shawarma</label>
        <input type="checkbox" name="sriracha-blend" id="sriracha-blend" />
        <label for="sriracha-blend">Sriracha Blend</label>
        <input type="checkbox" name="star-anise" id="star-anise" />
        <label for="star-anise">Star Anise</label>
        <input type="checkbox" name="steak-seasoning" id="steak-seasoning" />
        <label for="steak-seasoning">Steak Seasoning</label>
        <input type="checkbox" name="sumac" id="sumac" />
        <label for="sumac">Sumac</label>
        <input type="checkbox" name="table-blend" id="table-blend" />
        <label for="table-blend">Table Blend</label>
        <input type="checkbox" name="taco-seasoning" id="taco-seasoning" />
        <label for="taco-seasoning">Taco Seasoning</label>
        <input type="checkbox" name="tajin" id="tajin" />
        <label for="tajin">Tajin</label>
        <input type="checkbox" name="tandoori" id="tandoori" />
        <label for="tandoori">Tandoori</label>
        <input type="checkbox" name="tarragon" id="tarragon" />
        <label for="tarragon">Tarragon</label>
        <input
          type="checkbox"
          name="teriyaki-marinade"
          id="teriyaki-marinade"
        />
        <label for="teriyaki-marinade">Teriyaki Marinade</label>
        <input type="checkbox" name="thai-curry-paste" id="thai-curry-paste" />
        <label for="thai-curry-paste">Thai Curry Paste</label>
        <input type="checkbox" name="thai-seasoning" id="thai-seasoning" />
        <label for="thai-seasoning">Thai Seasoning</label>
        <input type="checkbox" name="thyme" id="thyme" />
        <label for="thyme">Thyme</label>
        <input type="checkbox" name="togorashi" id="togorashi" />
        <label for="togorashi">Togorashi</label>
        <input type="checkbox" name="turmeric" id="turmeric" />
        <label for="turmeric">Turmeric</label>
        <input type="checkbox" name="wasabi-powder" id="wasabi-powder" />
        <label for="wasabi-powder">Wasabi Powder</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Supplements</legend>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Sweeteners</legend>
        <input
          type="checkbox"
          name="acesulfame-potassium"
          id="acesulfame-potassium"
        />
        <label for="acesulfame-potassium"
          >Acesulfame Potassium &#40;Sunnett, Sweet One&#41;</label
        >
        <input type="checkbox" name="agave-nectar" id="agave-nectar" />
        <label for="agave-nectar">Agave Nectar</label>
        <input type="checkbox" name="allulose" id="allulose" />
        <label for="allulose">Allulose</label>
        <input type="checkbox" name="aspartame" id="aspartame" />
        <label for="aspartame">Aspartame &#40;Equal, Nutrisweet&#41;</label>
        <input type="checkbox" name="brown-sugar" id="brown-sugar" />
        <label for="brown-sugar">Brown Sugar</label>
        <input type="checkbox" name="cane-sugar" id="cane-sugar" />
        <label for="cane-sugar">Cane Sugar</label>
        <input type="checkbox" name="coconut-sugar" id="coconut-sugar" />
        <label for="coconut-sugar">Coconut Sugar</label>
        <input
          type="checkbox"
          name="confectioners-sugar"
          id="confectioners-sugar"
        />
        <label for="confectioners-sugar">Confectioner's Sugar</label>
        <input type="checkbox" name="corn-syrup" id="corn-syrup" />
        <label for="corn-syrup">Corn Syrup</label>
        <input type="checkbox" name="honey" id="honey" />
        <label for="honey">Honey</label>
        <input type="checkbox" name="inulin" id="inulin" />
        <label for="inulin">Inulin</label>
        <input type="checkbox" name="jaggery" id="jaggery" />
        <label for="jaggery">Jaggery</label>
        <input type="checkbox" name="lucuma-powder" id="lucuma-powder" />
        <label for="lucuma-powder">Lucuma Powder</label>
        <input type="checkbox" name="maple-syrup" id="maple-syrup" />
        <label for="maple-syrup">Maple Syrup</label>
        <input type="checkbox" name="mastic" id="mastic" />
        <label for="mastic">Mastic</label>
        <input type="checkbox" name="molasses" id="molasses" />
        <label for="molasses">Molasses</label>
        <input
          type="checkbox"
          name="monk-fruit-sweetener"
          id="monk-fruit-sweetener"
        />
        <label for="monk-fruit-sweetener">Monk Fruit Sweetener</label>
        <input type="checkbox" name="palm-sugar" id="palm-sugar" />
        <label for="palm-sugar">Palm Sugar</label>
        <input type="checkbox" name="panela" id="panela" />
        <label for="panela">Panela</label>
        <input type="checkbox" name="saccharin" id="saccharin" />
        <label for="saccharin">Saccharin &#40;Sweet & Low&#41;</label>
        <input type="checkbox" name="stevia" id="stevia" />
        <label for="stevia">Stevia</label>
        <input type="checkbox" name="sucralose" id="sucralose" />
        <label for="sucralose">Sucralose &#40;Splenda&#41;</label>
        <input type="checkbox" name="vanilla" id="vanilla" />
        <label for="vanilla">Vanilla</label>
        <input type="checkbox" name="xylitol" id="xylitol" />
        <label for="xylitol">Xylitol</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Vegetables</legend>
        <input type="checkbox" name="acorn-squash" id="acorn-squash" />
        <label for="acorn-squash">Acorn Squash</label>
        <input type="checkbox" name="alfalfa" id="alfalfa" />
        <label for="alfalfa">Alfalfa</label>
        <input type="checkbox" name="ancho-chile" id="ancho-chile" />
        <label for="ancho-chile">Ancho Chile</label>
        <input type="checkbox" name="arbol-chile" id="arbol-chile" />
        <label for="arbol-chile">Arbol Chile</label>
        <input type="checkbox" name="artichoke" id="artichoke" />
        <label for="artichoke">Artichoke</label>
        <input type="checkbox" name="arugula" id="arugula" />
        <label for="arugula">Arugula</label>
        <input type="checkbox" name="asparagus" id="asparagus" />
        <label for="asparagus">Asparagus</label>
        <input type="checkbox" name="avocado" id="avocado" />
        <label for="avocado">Avocado</label>
        <input type="checkbox" name="beetroot" id="beetroot" />
        <label for="beetroot">Beetroot</label>
        <input type="checkbox" name="bell-pepper" id="bell-pepper" />
        <label for="bell-pepper">Bell Pepper</label>
        <input type="checkbox" name="black-eyed-pea" id="black-eyed-pea" />
        <label for="black-eyed-pea">Black-Eyed Pea</label>
        <input type="checkbox" name="bok-choy" id="bok-choy" />
        <label for="bok-choy">Bok Choy</label>
        <input type="checkbox" name="boletus" id="boletus" />
        <label for="boletus">Boletus</label>
        <input type="checkbox" name="boston-lettuce" id="boston-lettuce" />
        <label for="boston-lettuce">Boston Lettuce</label>
        <input type="checkbox" name="broccoli" id="broccoli" />
        <label for="broccoli">Broccoli</label>
        <input type="checkbox" name="brussels-sprout" id="brussels-sprout" />
        <label for="brussels-sprout">Brussels Sprout</label>
        <input type="checkbox" name="butternut-squash" id="butternut-squash" />
        <label for="butternut-squash">Butternut Squash</label>
        <input type="checkbox" name="button-mushroom" id="button-mushroom" />
        <label for="button-mushroom">Button Mushroom</label>
        <input type="checkbox" name="cabbage" id="cabbage" />
        <label for="cabbage">Cabbage</label>
        <input type="checkbox" name="caesars-mushroom" id="caesars-mushroom" />
        <label for="caesars-mushroom">Caesar's Mushroom</label>
        <input
          type="checkbox"
          name="candy-cap-mushroom"
          id="candy-cap-mushroom"
        />
        <label for="candy-cap-mushroom">Candy Cap Mushroom</label>
        <input type="checkbox" name="cannellini-bean" id="cannellini-bean" />
        <label for="cannellini-bean">Cannellini Bean</label>
        <input type="checkbox" name="carrot" id="carrot" />
        <label for="carrot">Carrot</label>
        <input type="checkbox" name="cauliflower" id="cauliflower" />
        <label for="cauliflower">Cauliflower</label>
        <input type="checkbox" name="celeriac" id="celeriac" />
        <label for="celeriac">Celeriac</label>
        <input type="checkbox" name="celery" id="celery" />
        <label for="celery">Celery</label>
        <input type="checkbox" name="chard" id="chard" />
        <label for="chard">Chard</label>
        <input
          type="checkbox"
          name="chestnut-mushroom"
          id="chestnut-mushroom"
        />
        <label for="chestnut-mushroom">Chestnut Mushroom</label>
        <input type="checkbox" name="chickpea" id="chickpea" />
        <label for="chickpea">Chickpea</label>
        <input type="checkbox" name="collard-green" id="collard-green" />
        <label for="collard-green">Collard Green</label>
        <input type="checkbox" name="corn" id="corn" />
        <label for="corn">Corn</label>
        <input type="checkbox" name="cucumber" id="cucumber" />
        <label for="cucumber">Cucumber</label>
        <input type="checkbox" name="daikon" id="daikon" />
        <label for="daikon">Daikon</label>
        <input
          type="checkbox"
          name="djon-djon-mushroom"
          id="djon-djon-mushroom"
        />
        <label for="djon-djon-mushroom">Djon Djon Mushroom</label>
        <input type="checkbox" name="edamame" id="edamame" />
        <label for="edamame">Edamame</label>
        <input type="checkbox" name="eggplant" id="eggplant" />
        <label for="eggplant">Eggplant</label>
        <input type="checkbox" name="endive" id="endive" />
        <label for="endive">Endive</label>
        <input type="checkbox" name="enoki" id="enoki" />
        <label for="enoki">Enoki</label>
        <input type="checkbox" name="fava-bean" id="fava-bean" />
        <label for="fava-bean">Fava Bean</label>
        <input type="checkbox" name="fennel" id="fennel" />
        <label for="fennel">Fennel</label>
        <input type="checkbox" name="frisee" id="frisee" />
        <label for="frisee">Frisee</label>
        <input type="checkbox" name="green-bean" id="green-bean" />
        <label for="green-bean">Green Bean</label>
        <input type="checkbox" name="habanero" id="habanero" />
        <label for="habanero">Haba&#241;ero</label>
        <input type="checkbox" name="horseradish" id="horseradish" />
        <label for="horseradish">Horseradish</label>
        <input type="checkbox" name="huitlacoche" id="huitlacoche" />
        <label for="huitlacoche">Huitlacoche</label>
        <input type="checkbox" name="iceberg-lettuce" id="iceberg-lettuce" />
        <label for="iceberg-lettuce">Iceberg Lettuce</label>
        <input type="checkbox" name="jalapeno" id="jalapeno" />
        <label for="jalapeno">Jalape&#241;o</label>
        <input type="checkbox" name="jicama" id="jicama" />
        <label for="jicama">Jicama</label>
        <input type="checkbox" name="kale" id="kale" />
        <label for="kale">Kale</label>
        <input type="checkbox" name="kidney-bean" id="kidney-bean" />
        <label for="kidney-bean">Kidney Bean</label>
        <input type="checkbox" name="kohlrabi" id="kohlrabi" />
        <label for="kohlrabi">Kohlrabi</label>
        <input type="checkbox" name="leek" id="leek" />
        <label for="leek">Leek</label>
        <input type="checkbox" name="legume" id="legume" />
        <label for="legume">Legume</label>
        <input type="checkbox" name="lentil" id="lentil" />
        <label for="lentil">Lentil</label>
        <input type="checkbox" name="lima-bean" id="lima-bean" />
        <label for="lima-bean">Lima Bean</label>
        <input
          type="checkbox"
          name="lions-mane-mushroom"
          id="lions-mane-mushroom"
        />
        <label for="lions-mane-mushroom">Lion's Mane Mushroom</label>
        <input type="checkbox" name="maitake" id="maitake" />
        <label for="maitake">Maitake</label>
        <input type="checkbox" name="matsutake" id="matsutake" />
        <label for="matsutake">Matsutake</label>
        <input type="checkbox" name="microgreen" id="microgreen" />
        <label for="microgreen">Microgreen</label>
        <input type="checkbox" name="morel-mushroom" id="morel-mushroom" />
        <label for="morel-mushroom">Morel Mushroom</label>
        <input type="checkbox" name="mung-bean" id="mung-bean" />
        <label for="mung-bean">Mung Bean</label>
        <input type="checkbox" name="nameko" id="nameko" />
        <label for="nameko">Nameko</label>
        <input type="checkbox" name="okra" id="okra" />
        <label for="okra">Okra</label>
        <input type="checkbox" name="onion" id="onion" />
        <label for="onion">Onion</label>
        <input type="checkbox" name="oyster-mushroom" id="oyster-mushroom" />
        <label for="oyster-mushroom">Oyster Mushroom</label>
        <input type="checkbox" name="parsnip" id="parsnip" />
        <label for="parsnip">Parsnip</label>
        <input type="checkbox" name="pea" id="pea" />
        <label for="pea">Pea</label>
        <input type="checkbox" name="pepperoncini" id="pepperoncini" />
        <label for="pepperoncini">Pepperoncini</label>
        <input type="checkbox" name="pimiento" id="pimiento" />
        <label for="pimiento">Pimiento</label>
        <input type="checkbox" name="pinto-bean" id="pinto-bean" />
        <label for="pinto-bean">Pinto Bean</label>
        <input type="checkbox" name="pioppini" id="pioppini" />
        <label for="pioppini">Pioppini</label>
        <input type="checkbox" name="plantain" id="plantain" />
        <label for="plantain">Plantain</label>
        <input type="checkbox" name="poblano" id="poblano" />
        <label for="poblano">Poblano</label>
        <input type="checkbox" name="porcini" id="porcini" />
        <label for="porcini">Porcini</label>
        <input
          type="checkbox"
          name="portobello-mushroom"
          id="portobello-mushroom"
        />
        <label for="portobello-mushroom">Portobello Mushroom</label>
        <input type="checkbox" name="potato" id="potato" />
        <label for="potato">Potato</label>
        <input
          type="checkbox"
          name="puffball-mushroom"
          id="puffball-mushroom"
        />
        <label for="puffball-mushroom">Puffball Mushroom</label>
        <input type="checkbox" name="pumpkin" id="pumpkin" />
        <label for="pumpkin">Pumpkin</label>
        <input type="checkbox" name="radicchio" id="radicchio" />
        <label for="radicchio">Radicchio</label>
        <input type="checkbox" name="radish" id="radish" />
        <label for="radish">Radish</label>
        <input type="checkbox" name="romaine-lettuce" id="romaine-lettuce" />
        <label for="romaine-lettuce">Romaine Lettuce</label>
        <input type="checkbox" name="rutabaga" id="rutabaga" />
        <label for="rutabaga">Rutabaga</label>
        <input type="checkbox" name="scallion" id="scallion" />
        <label for="scallion">Scallion</label>
        <input type="checkbox" name="serrano-pepper" id="serrano-pepper" />
        <label for="serrano-pepper">Serrano Pepper</label>
        <input type="checkbox" name="shallot" id="shallot" />
        <label for="shallot">Shallot</label>
        <input
          type="checkbox"
          name="shiitake-mushroom"
          id="shiitake-mushroom"
        />
        <label for="shiitake-mushroom">Shiitake Mushroom</label>
        <input type="checkbox" name="shimeji-mushroom" id="shimeji-mushroom" />
        <label for="shimeji-mushroom">Shimeji Mushroom</label>
        <input type="checkbox" name="soybean" id="soybean" />
        <label for="soybean">Soybean</label>
        <input type="checkbox" name="spinach" id="spinach" />
        <label for="spinach">Spinach</label>
        <input type="checkbox" name="spaghetti-squash" id="spaghetti-squash" />
        <label for="spaghetti-squash">Spaghetti Squash</label>
        <input type="checkbox" name="summer-squash" id="summer-squash" />
        <label for="summer-squash">Summer Squash</label>
        <input type="checkbox" name="sweet-pepper" id="sweet-pepper" />
        <label for="sweet-pepper">Sweet Pepper</label>
        <input type="checkbox" name="sweet-potato" id="sweet-potato" />
        <label for="sweet-potato">Sweet Potato</label>
        <input type="checkbox" name="thai-chile" id="thai-chile" />
        <label for="thai-chile">Thai Chile</label>
        <input type="checkbox" name="tomatillo" id="tomatillo" />
        <label for="tomatillo">Tomatillo</label>
        <input type="checkbox" name="tomato" id="tomato" />
        <label for="tomato">Tomato</label>
        <input type="checkbox" name="truffle" id="truffle" />
        <label for="truffle">Truffle</label>
        <input type="checkbox" name="trumpet-mushroom" id="trumpet-mushroom" />
        <label for="trumpet-mushroom">Trumpet Mushroom</label>
        <input type="checkbox" name="turnip" id="turnip" />
        <label for="turnip">Turnip</label>
        <input type="checkbox" name="water-chestnut" id="water-chestnut" />
        <label for="water-chestnut">Water Chestnut</label>
        <input type="checkbox" name="watercress" id="watercress" />
        <label for="watercress">Watercress</label>
        <input type="checkbox" name="yam" id="yam" />
        <label for="yam">Yam</label>
        <input type="checkbox" name="Zucchini" id="Zucchini" />
        <label for="Zucchini">Zucchini</label>
      </fieldset>
    </form>
  </main>
`;
