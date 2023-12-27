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
        <input type="checkbox" name="pescatarian" id="pescatarian" />
        <label for="pescatarian">Pescatarian</label>
        <input type="checkbox" name="vegetarian" id="vegetarian" />
        <label for="vegetarian">Vegetarian</label>
        <input type="checkbox" name="vegan" id="vegan" />
        <label for="vegan">Vegan</label>
        <input type="checkbox" name="keto" id="keto" />
        <label for="keto">Keto</label>
        <input type="checkbox" name="low-cal" id="low-cal" />
        <label for="low-cal">Low Calorie</label>
        <input type="checkbox" name="gluten-free" id="gluten-free" />
        <label for="gluten-free">Gluten-Free</label>
        <input type="checkbox" name="low-carb" id="low-carb" />
        <label for="low-carb">Low Carb</label>
        <input type="checkbox" name="low-fat" id="low-fat" />
        <label for="low-fat">Low Fat</label>
        <input type="checkbox" name="high-protein" id="high-protein" />
        <label for="high-protein">High Protein</label>
        <input type="checkbox" name="immune-boost" id="immune-boost" />
        <label for="immune-boost">Immune System Booster</label>
        <input type="checkbox" name="kosher" id="kosher" />
        <label for="kosher">Kosher</label>
        <input type="checkbox" name="halal" id="halal" />
        <label for="halal">Halal</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Meat</legend>
        <input type="checkbox" name="chicken" id="chicken" />
        <label for="chicken">Chicken</label>
        <input type="checkbox" name="egg" id="egg" />
        <label for="egg">Egg</label>
        <input type="checkbox" name="turkey" id="turkey" />
        <label for="turkey">Turkey</label>
        <input type="checkbox" name="turkey-bacon" id="turkey-bacon" />
        <label for="turkey-bacon">Turkey Bacon</label>
        <input type="checkbox" name="pork" id="pork" />
        <label for="pork">Pork</label>
        <input type="checkbox" name="sausage" id="sausage" />
        <label for="sausage">Sausage</label>
        <input type="checkbox" name="bratwurst" id="bratwurst" />
        <label for="bratwurst">Bratwurst</label>
        <input type="checkbox" name="chorizo" id="chorizo" />
        <label for="chorizo">Chorizo</label>
        <input type="checkbox" name="ham" id="ham" />
        <label for="ham">Ham</label>
        <input type="checkbox" name="prosciutto" id="prosciutto" />
        <label for="prosciutto">Prosciutto</label>
        <input type="checkbox" name="bacon" id="bacon" />
        <label for="bacon">Bacon</label>
        <input type="checkbox" name="beef" id="beef" />
        <label for="beef">Beef</label>
        <input type="checkbox" name="steak" id="steak" />
        <label for="steak">Steak</label>
        <input type="checkbox" name="bison" id="bison" />
        <label for="bison">Bison</label>
        <input type="checkbox" name="lamb" id="lamb" />
        <label for="lamb">Lamb</label>
        <input type="checkbox" name="veal" id="veal" />
        <label for="veal">Veal</label>
        <input type="checkbox" name="venison" id="venison" />
        <label for="venison">Venison</label>
        <input type="checkbox" name="salmon" id="salmon" />
        <label for="salmon">Salmon</label>
        <input type="checkbox" name="shrimp" id="shrimp" />
        <label for="shrimp">Shrimp</label>
        <input type="checkbox" name="crab" id="crab" />
        <label for="crab">Crab</label>
        <input type="checkbox" name="lobster" id="lobster" />
        <label for="lobster">Lobster</label>
        <input type="checkbox" name="tilapia" id="tilapia" />
        <label for="tilapia">Tilapia</label>
        <input type="checkbox" name="catfish" id="catfish" />
        <label for="catfish">Catfish</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Vegetables</legend>
        <input type="checkbox" name="pepper" id="pepper" />
        <label for="pepper">Pepper</label>
        <input type="checkbox" name="lettuce" id="lettuce" />
        <label for="lettuce">Lettuce</label>
        <input type="checkbox" name="spinach" id="spinach" />
        <label for="spinach">Spinach</label>
        <input type="checkbox" name="cabbage" id="cabbage" />
        <label for="cabbage">Cabbage</label>
        <input type="checkbox" name="carrot" id="carrot" />
        <label for="carrot">Carrot</label>
        <input type="checkbox" name="tomato" id="tomato" />
        <label for="tomato">Tomato</label>
        <input type="checkbox" name="avocado" id="avocado" />
        <label for="avocado">Avocado</label>
        <input type="checkbox" name="broccoli" id="broccoli" />
        <label for="broccoli">Broccoli</label>
        <input type="checkbox" name="cauliflower" id="cauliflower" />
        <label for="cauliflower">Cauliflower</label>
        <input type="checkbox" name="corn" id="corn" />
        <label for="corn">Corn</label>
        <input type="checkbox" name="brussels-sprout" id="brussels-sprout" />
        <label for="brussels-sprout">Brussels Sprout</label>
        <input type="checkbox" name="eggplant" id="eggplant" />
        <label for="eggplant">Eggplant</label>
        <input type="checkbox" name="squash" id="squash" />
        <label for="squash">Squash</label>
        <input type="checkbox" name="cucumber" id="cucumber" />
        <label for="cucumber">Cucumber</label>
        <input type="checkbox" name="Zucchini" id="Zucchini" />
        <label for="Zucchini">Zucchini</label>
        <input type="checkbox" name="potato" id="potato" />
        <label for="potato">Potato</label>
        <input type="checkbox" name="onion" id="onion" />
        <label for="onion">Onion</label>
        <input type="checkbox" name="shallot" id="shallot" />
        <label for="shallot">Shallot</label>
        <input type="checkbox" name="beetroot" id="beetroot" />
        <label for="beetroot">Beetroot</label>
        <input type="checkbox" name="rutabaga" id="rutabaga" />
        <label for="rutabaga">Rutabaga</label>
        <input type="checkbox" name="leek" id="leek" />
        <label for="leek">Leek</label>
        <input type="checkbox" name="peas" id="peas" />
        <label for="peas">Peas</label>
        <input type="checkbox" name="asparagus" id="asparagus" />
        <label for="asparagus">Asparagus</label>
        <input type="checkbox" name="green-beans" id="green-beans" />
        <label for="green-beans">Green Beans</label>
        <input type="checkbox" name="artichoke" id="artichoke" />
        <label for="artichoke">Artichoke</label>
        <input type="checkbox" name="mushroom" id="mushroom" />
        <label for="mushroom">Mushroom</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Fruits</legend>
        <input type="checkbox" name="apple" id="apple" />
        <label for="apple">Apple</label>
        <input type="checkbox" name="orange" id="orange" />
        <label for="orange">Orange</label>
        <input type="checkbox" name="lemon" id="lemon" />
        <label for="lemon">Lemon</label>
        <input type="checkbox" name="lime" id="lime" />
        <label for="lime">Lime</label>
        <input type="checkbox" name="banana" id="banana" />
        <label for="banana">Banana</label>
        <input type="checkbox" name="peach" id="peach" />
        <label for="peach">Peach</label>
        <input type="checkbox" name="grapes" id="grapes" />
        <label for="grapes">Grapes</label>
        <input type="checkbox" name="pomegranate" id="pomegranate" />
        <label for="pomegranate">Pomegranate</label>
        <input type="checkbox" name="mango" id="mango" />
        <label for="mango">Mango</label>
        <input type="checkbox" name="peach" id="peach" />
        <label for="peach">Peach</label>
        <input type="checkbox" name="pineapple" id="pineapple" />
        <label for="pineapple">Pineapple</label>
        <input type="checkbox" name="pear" id="pear" />
        <label for="pear">Pear</label>
        <input type="checkbox" name="rhubarb" id="rhubarb" />
        <label for="rhubarb">Rhubarb</label>
        <input type="checkbox" name="cranberry" id="cranberry" />
        <label for="cranberry">Cranberry</label>
        <input type="checkbox" name="blueberry" id="blueberry" />
        <label for="blueberry">Blueberry</label>
        <input type="checkbox" name="strawberry" id="strawberry" />
        <label for="strawberry">Strawberry</label>
        <input type="checkbox" name="blackberry" id="blackberry" />
        <label for="blackberry">Blackberry</label>
        <input type="checkbox" name="apricot" id="apricot" />
        <label for="apricot">Apricot</label>
        <input type="checkbox" name="plum" id="plum" />
        <label for="plum">Plum</label>
        <input type="checkbox" name="watermelon" id="watermelon" />
        <label for="watermelon">Watermelon</label>
        <input type="checkbox" name="honeydew" id="honeydew" />
        <label for="honeydew">Honeydew</label>
        <input type="checkbox" name="cranberry" id="cantaloupe" />
        <label for="cantaloupe">Cantaloupe</label>
        <input type="checkbox" name="coconut" id="coconut" />
        <label for="coconut">Coconut</label>
        <input type="checkbox" name="dragonfruit" id="dragonfruit" />
        <label for="dragonfruit">Dragonfruit</label>
        <input type="checkbox" name="fig" id="fig" />
        <label for="fig">Fig</label>
        <input type="checkbox" name="jackfruit" id="jackfruit" />
        <label for="jackfruit">Jackfruit</label>
        <input type="checkbox" name="cranberry" id="passion-fruit" />
        <label for="passion-fruit">Passion Fruit</label>
        <input type="checkbox" name="grapefruit" id="grapefruit" />
        <label for="grapefruit">Grapefruit</label>
        <input type="checkbox" name="nectarine" id="nectarine" />
        <label for="nectarine">Nectarine</label>
        <input type="checkbox" name="kiwi" id="kiwi" />
        <label for="kiwi">Kiwi</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Nuts</legend>
        <input type="checkbox" name="almond" id="almond" />
        <label for="almond">Almond</label>
        <input type="checkbox" name="pecan" id="pecan" />
        <label for="pecan">Pecan</label>
        <input type="checkbox" name="cashew" id="cashew" />
        <label for="cashew">Cashew</label>
        <input type="checkbox" name="peanut" id="peanut" />
        <label for="peanut">Peanut</label>
        <input type="checkbox" name="pistachio" id="pistachio" />
        <label for="pistachio">Pistachio</label>
        <input type="checkbox" name="hazelnut" id="hazelnut" />
        <label for="hazelnut">Hazelnut</label>
        <input type="checkbox" name="pine-nut" id="pine-nut" />
        <label for="pine-nut">Pine Nut</label>
        <input type="checkbox" name="macadamia" id="macadamia" />
        <label for="macadamia">Macadamia</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Seeds</legend>
        <input type="checkbox" name="pumpkin-seed" id="pumpkin-seed" />
        <label for="pumpkin-seed">Pumpkin Seed</label>
        <input type="checkbox" name="sunflower-seed" id="sunflower-seed" />
        <label for="sunflower-seed">Sunflower Seed</label>
        <input type="checkbox" name="flaxseed" id="flaxseed" />
        <label for="flaxseed">Flaxseed</label>
        <input type="checkbox" name="chia" id="chia" />
        <label for="chia">Chia</label>
        <input type="checkbox" name="poppyseed" id="poppyseed" />
        <label for="poppyseed">Poppyseed</label>
        <input type="checkbox" name="pumpkin-seed" id="pumpkin-seed" />
        <label for="pumpkin-seed">Pumpkin Seed</label>
        <input type="checkbox" name="sesame-seed" id="sesame-seed" />
        <label for="sesame-seed">Sesame Seed</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Dairy</legend>
        <input type="checkbox" name="butter" id="butter" />
        <label for="butter">Butter</label>
        <input type="checkbox" name="margarine" id="margarine" />
        <label for="margarine">Margarine</label>
        <input type="checkbox" name="milk" id="milk" />
        <label for="milk">Milk</label>
        <input type="checkbox" name="sour-cream" id="sour-cream" />
        <label for="sour-cream">Sour Cream</label>
        <input type="checkbox" name="cottage-cheese" id="cottage-cheese" />
        <label for="cottage-cheese">Cottage Cheese</label>
        <input
          type="checkbox"
          name="liquid-egg-whites"
          id="liquid-egg-whites"
        />
        <label for="liquid-egg-whites">Liquid Egg Whites</label>
        <input type="checkbox" name="greek-yogurt" id="greek-yogurt" />
        <label for="greek-yogurt">Greek Yogurt</label>
        <input type="checkbox" name="whipped-cream" id="whipped-cream" />
        <label for="whipped-cream">Whipped Cream</label>
        <input type="checkbox" name="ghee" id="ghee" />
        <label for="ghee">Ghee</label>
        <input type="checkbox" name="heavy-cream" id="heavy-cream" />
        <label for="heavy-cream">Heavy Cream</label>
        <input type="checkbox" name="half-half" id="half-half" />
        <label for="half-half">Half & Half</label>
        <input type="checkbox" name="evaporated-milk" id="evaporated-milk" />
        <label for="evaporated-milk">Evaporated Milk</label>
        <input type="checkbox" name="frozen-yogurt" id="frozen-yogurt" />
        <label for="frozen-yogurt">Frozen Yogurt</label>
        <input type="checkbox" name="ice-cream" id="ice-cream" />
        <label for="ice-cream">Ice Cream</label>
        <input type="checkbox" name="milk-powder" id="milk-powder" />
        <label for="milk-powder">Milk Powder</label>
        <input type="checkbox" name="buttermilk" id="buttermilk" />
        <label for="buttermilk">Buttermilk</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Spices</legend>
        <input type="checkbox" name="basil" id="basil" />
        <label for="basil">Basil</label>
        <input type="checkbox" name="cilantro" id="cilantro" />
        <label for="cilantro">Cilantro</label>
        <input type="checkbox" name="buttermilk" id="turmeric" />
        <label for="turmeric">Turmeric</label>
        <input type="checkbox" name="cumin" id="cumin" />
        <label for="cumin">Cumin</label>
        <input type="checkbox" name="parsley" id="parsley" />
        <label for="parsley">Parsley</label>
        <input type="checkbox" name="chili-powder" id="chili-powder" />
        <label for="chili-powder">Chili Powder</label>
        <input type="checkbox" name="bay-leaf" id="bay-leaf" />
        <label for="bay-leaf">Bay Leaf</label>
        <input type="checkbox" name="dill" id="dill" />
        <label for="dill">Dill</label>
        <input type="checkbox" name="cinnamon" id="cinnamon" />
        <label for="cinnamon">Cinnamon</label>
        <input type="checkbox" name="garlic-powder" id="garlic-powder" />
        <label for="garlic-powder">Garlic Powder</label>
        <input type="checkbox" name="salt" id="salt" />
        <label for="salt">Salt</label>
        <input type="checkbox" name="black-pepper" id="black-pepper" />
        <label for="black-pepper">Black Pepper</label>
        <input type="checkbox" name="rosemary" id="rosemary" />
        <label for="rosemary">Rosemary</label>
        <input type="checkbox" name="paprika" id="paprika" />
        <label for="paprika">Paprika</label>
        <input type="checkbox" name="nutmeg" id="nutmeg" />
        <label for="nutmeg">Nutmeg</label>
        <input type="checkbox" name="garam-masala" id="garam-masala" />
        <label for="garam-masala">Garam Masala</label>
        <input type="checkbox" name="curry-powder" id="curry-powder" />
        <label for="curry-powder">Curry Powder</label>
        <input type="checkbox" name="cloves" id="cloves" />
        <label for="cloves">Cloves</label>
        <input type="checkbox" name="oregano" id="oregano" />
        <label for="oregano">Oregano</label>
        <input type="checkbox" name="chives" id="chives" />
        <label for="chives">Chives</label>
        <input type="checkbox" name="allspice" id="allspice" />
        <label for="allspice">Allspice</label>
        <input type="checkbox" name="celery-seed" id="celery-seed" />
        <label for="celery-seed">Celery Seed</label>
        <input type="checkbox" name="thyme" id="thyme" />
        <label for="thyme">Thyme</label>
        <input type="checkbox" name="ginger" id="ginger" />
        <label for="ginger">Ginger</label>
        <input type="checkbox" name="marjoram" id="marjoram" />
        <label for="marjoram">Marjoram</label>
        <input type="checkbox" name="caraway" id="caraway" />
        <label for="caraway">Caraway</label>
        <input type="checkbox" name="tarragon" id="tarragon" />
        <label for="tarragon">Tarragon</label>
        <input type="checkbox" name="sage" id="sage" />
        <label for="sage">Sage</label>
        <input type="checkbox" name="mint" id="mint" />
        <label for="mint">Mint</label>
      </fieldset>
      <hr />
      <fieldset class="recipe">
        <legend>Sweeteners</legend>
        <input type="checkbox" name="agave-nectar" id="agave-nectar" />
        <label for="agave-nectar">Agave Nectar</label>
        <input type="checkbox" name="honey" id="honey" />
        <label for="honey">Honey</label>
        <input type="checkbox" name="molasses" id="molasses" />
        <label for="molasses">Molasses</label>
        <input
          type="checkbox"
          name="confectioners-sugar"
          id="confectioners-sugar"
        />
        <label for="confectioners-sugar">Confectioner's Sugar</label>
        <input type="checkbox" name="maple-syrup" id="maple-syrup" />
        <label for="maple-syrup">Maple Syrup</label>
        <input type="checkbox" name="stevia" id="stevia" />
        <label for="stevia">Stevia</label>
        <input type="checkbox" name="brown-sugar" id="brown-sugar" />
        <label for="brown-sugar">Brown Sugar</label>
        <input type="checkbox" name="allulose" id="allulose" />
        <label for="allulose">Allulose</label>
        <input type="checkbox" name="cane-sugar" id="cane-sugar" />
        <label for="cane-sugar">Cane Sugar</label>
        <input type="checkbox" name="vanilla" id="vanilla" />
        <label for="vanilla">Vanilla</label>
        <input
          type="checkbox"
          name="monk-fruit-sweetener"
          id="monk-fruit-sweetener"
        />
        <label for="monk-fruit-sweetener">Monk Fruit Sweetener</label>
        <input type="checkbox" name="chocolate-sauce" id="chocolate-sauce" />
        <label for="chocolate-sauce">Chocolate Sauce</label>
      </fieldset>
    </form>
  </main>
`;
