import html from "html-literal";
export default () => html`
  <main>
    <h2>HOW TO USE</h2>
    <hr />
    <p>
      Before you begin to improve your kitchen skills, here's a little overview
      of meal prepping. All recipes results feature nutrition labels to help you
      track your calories or any other important micro- or
      macronutrient&#40;s&#41;. Whether you are losing weight, building muscle,
      or maintaining your overall health, tracking your nutrients is the key to
      success.
    </p>
    <h3>Basal Metabolic Rate &#40;BMR&#41;</h3>
    <p>
      Following the equations
      <a
        href="https://archive.org/details/biometricstudyof00harruoft/"
        target="_blank"
        >first published in 1919</a
      >
      by Harris and Benedict, then
      <a
        href="https://www.sciencedirect.com/science/article/abs/pii/S0002916523166986?via%3Dihub"
        target="_blank"
        >improved in 1990</a
      >
      by Mifflin and St. Jeor, you can calculate your
      <strong>Basal Metabolic Rate &#40;BMR&#41;</strong> based on your weight,
      height, age, gender, etc. Below are the equations when using imperial
      measurements:
    </p>
    <article class="measurement">
      <p>
        Men's BMR = &#40;4.5 &#215; weight in lbs&#41; + &#40;16 &#215; height
        in inches&#41; - &#40;5 &#215; age&#41; + 5
      </p>
      <p>
        Women's BMR = &#40;4.5 &#215; weight in lbs&#41; + &#40;16 &#215; height
        in inches&#41; - &#40;5 &#215; age&#41; - 161
      </p>
    </article>
    <p>
      However, for better accuracy, you should convert your weight and height to
      metric measurements, which you can find by using an online metric
      calculator.
    </p>
    <article class="measurement">
      <p>
        Men's BMR = &#40;10 &#215; weight in kg&#41; + &#40;6.25 &#215; height
        in cm&#41; - &#40;5 &#215; age&#41; + 5
      </p>
      <p>
        Women's BMR = &#40;10 &#215; weight in kg&#41; + &#40;6.25 &#215; height
        in cm&#41; - &#40;5 &#215; age&#41; - 161
      </p>
    </article>
    <p>
      The result of either set of equations is your daily calories needed to
      function, even if you slept the whole day.
    </p>
    <p>
      Let's assume we have a 25-year-old man, measuring 6 feet tall, weighing
      180 pounds. Using imperial measurements for weight and height, his BMR
      equation is:
    </p>
    <article class="measurement">
      <p>
        &#40;4.5 &#215; 180 lbs&#41; + &#40;16 &#215; 72 in&#41; - &#40;5 &#215;
        25&#41; + 5 = 1840 calories
      </p>
    </article>
    <p>
      If we converted his weight and height to metric measurements, his BMR
      equation is:
    </p>
    <article class="measurement">
      <p>
        &#40;10 &#215; 81.7 kg&#41; + &#40;6.25 &#215; 182.88 cm&#41; - &#40;5
        &#215; 25&#41; + 5 = 1840 calories
      </p>
    </article>
    <h3>Your Activity</h3>
    <p>
      Since we have other such priorities as work, family, friends, and fitness
      in our lives, we cannot sleep the whole day. These other commitments use
      calories, too, so multiplying your BMR by one of the following multipliers
      will determine the necessary calories to maintain weight.
    </p>
    <article class="measurement">
      <ul>
        <li>Sedentary: BMR &#215; 1.2</li>
        <li>Lightly active: BMR &#215; 1.375</li>
        <li>Moderately active: BMR &#215; 1.55</li>
        <li>Active: BMR &#215; 1.725</li>
        <li>Very active: BMR &#215; 1.9</li>
      </ul>
    </article>
    <p>
      Using our example person, his BMR is 1840 calories. If he visits the gym
      4-5 days per week, walks or bikes around his community, but works a desk
      job, we can say he's very active.
    </p>
    <article class="measurement">
      <p>1840 &#215; 1.9 = 3496</p>
    </article>
    <p>
      To maintain his weight at this activity level, he must consume nearly 3500
      calories per day. If he wanted to lose weight
    </p>
    <h3>Calories</h3>
    <p>
      If you wish to lose weight, you should eat fewer calories. If you wish to
      build more muscle, you should eat more calories.
    </p>
    <article class="measurement">
      <ul>
        <li>Calorie Deficit: eat 500 fewer calories than calculated.</li>
        <li>Calorie Maintenance: eat calculated amount.</li>
        <li>Calorie Surplus: eat 250-500 more calories than calculated.</li>
      </ul>
    </article>
    <p>
      For our example person to lose weight, he should eat roughly 3000
      calories; to gain weight, roughly 3750-4000 calories.
    </p>
    <h3>Macronutrients</h3>
    <p>
      Calories represent how much energy a serving of food contains. A typical
      diet is 2000 calories per day, but individual calorie needs vary. Your
      calories should ideally come from a mix of macronutrients &#40;fats,
      carbohydrates, and proteins&#41;.
    </p>
    <p>
      Each macronutrient &#40;macro&#41; has a calorie value per gram, and each
      food's breakdown is different. A food could have low calories but the
      majority may come from carbohydrates, or high calories with the majority
      from fat. Keep the following exchange rates in mind:
    </p>
    <article class="measurement">
      <ul>
        <li>1 gram of carbohydrate = 4 calories</li>
        <li>1 gram of protein = 4 calories</li>
        <li>1 gram of fat = 9 calories</li>
      </ul>
    </article>
    <p>
      Protein is the most important macronutrient, as it helps promote muscle
      retention, muscle growth, and keeps you fuller longer. It is the easiest
      macro to calculate; figure 1 gram protein per pound of body weight. For
      our example person at 180 pounds, he should consume at least 180 grams
      protein.
    </p>
    <p>
      Fats store energy in your body for later use. Too much fat, however, can
      lead to health problems such as heart disease, so you should work to keep
      this number low; figure between 0.3-0.5 grams fat per pound of body
      weight. Meeting in the middle of that range, our example person at 180
      pounds should consume 72 grams fat.
    </p>
    <p>
      After finding daily protein and fat intake, we can find the remainder of
      our calories which should come from carbohydrates like this:
    </p>
    <article class="measurement">
      <p>180g protein &#215; 4 = 720 calories from protein</p>
      <p>72g fat &#215; 9 = 648 calories from fat</p>
      <p>720 + 648 = 1368 total fat and protein calories</p>
    </article>
    <p>
      Carbohydrates &#40;Carbs&#41; provide quick energy, usually in the form of
      fiber, sugar, or starch. After adding the fat and protein calories
      together, we can then subtract that number from total daily calories to
      determine how many calories should come from carbohydrates:
    </p>
    <article class="measurement">
      <p>3496 - 1368 = 2128 calories from carbohydrates</p>
    </article>
    <p>Divide this number by 4 to find your daily intake of carbohydrates:</p>
    <article class="measurement">
      <p>2128 ÷ 4 = 532g carbohydrates</p>
    </article>
    <p>
      In order for our example person to maintain his weight, here is his macro
      breakdown:
    </p>
    <article class="measurement">
      <ul>
        <li>3496 calories</li>
        <li>72g fat</li>
        <li>532g carbohydrates</li>
        <li>180g protein</li>
      </ul>
    </article>
    <h3>In Closing</h3>
    <p>
      Your results may vary. Your amounts may be too high, or too low, depending
      on specific factors like low muscle tone or high body fat. Try eating the
      calculated numbers for a couple of weeks to determine whether your counts
      are accurate or if they need adjusting. If your weight does not change,
      your calculations are on point.
    </p>
    <p>
      The best way to make sure you meet your calculated numbers would be to use
      a tracking app or writing them in a food diary. Also, when meal prepping,
      a food scale is ideal for getting the exact measurements of the foods you
      eat.
    </p>
    <p>
      Above all, please remember that it takes time and patience to lose weight
      or gain muscle. If your goal is to lose weight, you should aim to lose 1-2
      pounds per week. On the other hand, if you're building muscle, you should
      strive to gain 1 pound per month. Those rates may seem too small to notice
      any change, but please do not let them discourage you. These numbers are a
      healthy average.
    </p>
  </main>
`;
