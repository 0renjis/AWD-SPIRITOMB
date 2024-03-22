    document.addEventListener("DOMContentLoaded", function() {
        const recipeCards = document.querySelectorAll(".recipe-link");

        recipeCards.forEach(function(card) {
            card.addEventListener("click", function(e) {
                e.preventDefault();
                const recipe = this.dataset.recipe;
                const recipeDetails = getRecipeDetails(recipe);
                document.getElementById("recipe-details").innerHTML = recipeDetails;
                document.getElementById("menu").style.display = "none";
                document.getElementById("recipe-info").style.display = "block";
            });
        });

        document.querySelector(".back-btn").addEventListener("click", function() {
            document.getElementById("recipe-info").style.display = "none";
            document.getElementById("menu").style.display = "block";
        });

        function getRecipeDetails(recipe) {
            let recipeDetails = "";

            switch (recipe) {
                case "pasta_bolognese":
                    recipeDetails = `
                        <h5>Pasta Bolognese</h5>
                        <p>Ingredients:</p>
                        <ul>
                            <li>1/4 cup extra-virgin olive oil, divided</li>                            
                            <li>1 medium onion, finely diced</li>
                            <li>1 medium carrot, finely diced</li>
                            <li>2 ounces pancetta, thickly sliced, finely diced</li>
                            <li>1 medium celery rib, finely diced</li>
                            <li>1/2 pound ground beef</li>                           
                            <li>1/2 pound ground veal</li>
                            <li>1/4 pound ground pork</li>
                            <li>2 garlic cloves, chopped</li>
                            <li>3/4 cup dry white wine</li>
                            <li>1 (28-ounce) can peeled Italian tomatoes, seeded and finely chopped, juices reserved</li>                
                            <li>1 cup chicken stock or canned low-sodium broth</li>
                            <li>1/2 teaspoon dried thyme</li>
                            <li>2 pounds penne rigate</li>
                            <li>Freshly grated Parmesan cheese, for serving</li>
                            <li>1/4 cup heavy cream</li>
                            
                        </ul>
                        <p>Directions:</p>
                        <ol>
                            <li>Heat 1 tablespoon of the olive oil in a large, heavy saucepan until shimmering. Add the onion, carrot, celery, and pancetta and cook over moderate heat, stirring occasionally, until the vegetables are softened but not browned, about 8 minutes. Scrape the vegetable mixture into a large bowl.
                            </li>
                            <li>Add the remaining 3 tablespoons of olive oil to the saucepan and heat until just shimmering. Add the beef, veal, and pork and cook over moderately high heat until just barely pink, about 5 minutes.</li>
                            <li>Return the vegetable mixture to the saucepan. Add the garlic and cook over high heat until fragrant, about 1 minute.</li>
                            <li>Add the wine and cook, stirring occasionally, until almost evaporated, about 8 minutes.
                            </li>
                            <li>Stir in the tomatoes and their juices, the chicken stock, thyme, and bay leaf. Season with a generous pinch of salt and pepper and bring to a boil over high heat. </li>
                            <li>Cover partially and cook over moderately low heat for 1 hour. Discard the bay leaf. Stir in the heavy cream and cook the sauce just until heated through. </li>
                            <li>Meanwhile, in a large pot of boiling salted water, cook the penne rigate until al dente.</li>
                            <li>Drain the pasta and return it to the pot. Add the sauce and toss over low heat until the pasta is evenly coated.</li>
                            <li>Serve the pasta in deep bowls, passing the Parmesan at the table.</li>
                        </ol>`;
                    break;
                case "fettuccine_alfredo":
                    recipeDetails = `
                        <h5>Fettuccine Alfredo</h5>
                        <p>Ingredients:</p>
                        <ul>
                            <li>1 pound uncooked fettuccine</li>                            
                            <li>4 tablespoons extra-virgin olive oil, divided
                            </li>
                            <li>3 garlic cloves, thinly sliced (about 2 tablespoons)</li>
                            <li>1 cup panko breadcrumbs</li>
                            <li>1/4 teaspoon kosher salt, plus more to taste</li>
                            <li>1/4 cup finely chopped fresh flat-leaf parsley</li>                           
                            <li>4 ounces Parmigiano-Reggiano cheese,</li>
                            <li>1/4 pound ground pork</li>
                            <li3/4 cup (6 ounces) cold unsalted butter, cubed
                            </li>
                            <li>Flaky salt</li>
                            
                        </ul>
                        <p>Directions:</p>
                        <ol>
                            <li>Bring a large pot of salted water to a boil over high. Add pasta, and cook according to package directions to just barely al dente. Using tongs, transfer pasta to a colander, and drain, reserving 3 1/2 cups pasta cooking water. Return pasta to warm pot; drizzle with 1 tablespoon of the oil, and gently stir with tongs to coat. Set aside.
                            </li>
                            <li>While pasta cooks, heat remaining 3 tablespoons oil in a large skillet over medium until glossy and lighter in color. Add garlic; cook, stirring constantly, until fragrant and golden brown, 20 to 30 seconds. Add panko; cook, stirring constantly, until golden brown, 2 to 3 minutes. Transfer to a heatproof bowl; add kosher salt, and stir to combine. Let cool to room temperature, about 5 minutes. Wipe skillet clean. Add parsley and 1/4 cup of the cheese to panko mixture; stir to combine, and set aside.
                            </li>
                            <li>Add 3 cups of the reserved cooking water to cleaned large skillet; bring to a boil over medium-high. Reduce heat to medium-low. Gradually add butter to skillet, whisking constantly and letting each butter cube melt before the next addition, until butter has emulsified into liquid, 10 to 12 minutes.</li>
                            <li>Add pasta to butter sauce in skillet; toss to evenly coat. Cook over medium, stirring constantly, until sauce comes to a boil (you will see bubbles in liquid in center of skillet), 3 to 5 minutes. . Sprinkle with 1 cup of the cheese; toss and stir to evenly coat pasta in cheese and sauce. Add remaining 1 1/4 cups cheese, and cook, tossing and stirring constantly, until pasta is evenly coated in sauce, about 2 minutes. If more liquid is needed for sauce, gradually add additional reserved cooking water 2 tablespoons at a time, stirring and tossing to coat. Remove from heat. Season to taste with kosher salt.
                            </li>
                            <li>Divide pasta evenly among plates. Top each with 1 tablespoon toasted panko mixture. Garnish with flaky salt and additional parsley. Serve immediately.</li>
                        </ol>`;
                    break;
                case "classic":
                        recipeDetails = `
                            <h5>Classic Spaghetti and Meatballs</h5>
                            <p>Ingredients:</p>
                            <ul>
                                <li>2 slices white sandwich bread, torn into small pieces</li>                            
                                <li>1/4 cup whole milk</li>
                                <li>1 pound ground beef chuck</li>
                                <li>1/2 pound ground veal</li>
                                <li>1/2 pound ground pork</li>
                                <li>2 tablespoons freshly grated Parmigiano-Reggiano cheese</li>                           
                                <li>4 ounces Parmigiano-Reggiano cheese,</li>
                                <li>1 1/2 tablespoons minced garlic</li>
                                <li>Kosher salt and freshly ground pepper</li>
                                <li>3 tablespoons chopped basil</li>
                                <li>1 teaspoon chopped oregano</li>
                                <li>2 (28-ounce) cans whole tomatoes</li>
                                <li>1/4 cup extra-virgin olive oil</li>
                                <li>1 1/2 pounds spaghetti</li>
                                
                            </ul>
                            <p>Directions:</p>
                            <ol>
                                <li>In a small bowl, soak the bread in the milk until the milk is absorbed, about 5 minutes. In a large bowl, gently mix the ground meats with the soaked bread, 2 tablespoons Parmigiano-Reggiano, 1/2 tablespoon of the garlic, 2 teaspoons salt, 1/4 teaspoon pepper, 1 tablespoon of the chopped basil and the oregano. Form the meat mixture into golf ball–size meatballs and transfer to a baking sheet. Cover and refrigerate until chilled, about 30 minutes.
                                </li>
                                <li>Meanwhile, in a food processor, pulse the tomatoes with their juices until finely chopped. In a large saucepan, heat 2 tablespoons of the olive oil. Add the remaining 1 tablespoon minced garlic and cook over moderate heat until light golden, about 3 minutes. Add the crushed red pepper, chopped tomatoes and the basil sprig. Bring to a simmer and cook over moderately low heat until the sauce is slightly thickened, about 25 minutes. Discard the basil sprig and season the sauce with salt and pepper.
                                </li>
                                <li>In a large skillet, heat the remaining 2 tablespoons of olive oil. Brown the meatballs in batches, about 3 minutes per side. Transfer the meatballs to the tomato sauce and simmer until cooked through, about 10 minutes. Discard the fat from the skillet. Add 1/4 cup of water and cook over moderately high heat, scraping up the brown bits from the bottom of the pan, about 2 minutes. Pour the water into the tomato sauce.</li>
                                <li>In a large pot of salted boiling water, cook the spaghetti until al dente. Drain and return the pasta to the pot. Pour in 2 cups of the tomato sauce and toss until the pasta is well coated, about 1 minute. Transfer the pasta to large shallow bowls. Spoon the meatballs and remaining tomato sauce over the spaghetti. Sprinkle with the remaining 2 tablespoons chopped basil. Serve at once, passing grated cheese at the table.</li>
                            </ol>`;
                            break;
                case "mac_cheese":
                    recipeDetails = `
                        <h5>Homemade Mac and Cheese</h5>
                        <p>Ingredients:</p>
                        <ul>
                            <li>8 oz. macaroni</li>                            
                            <li>3 Tbsp butter </li>
                            <li>3 Tbsp all-purpose flour</li>
                            <li>1/2 tsp onion powder</li>
                            <li>2 cups whole milk</li>
                            <li>1/2 tsp hot sauce</li>                           
                            <li>1/2 tsp salt </li>
                            <li>8 oz. block sharp cheddar, shredded</li>
                            
                        </ul>
                        <p>Directions:</p>
                        <ol>
                            <li>Cook the macaroni according to the package directions (boil for 7-8 minutes, or until tender). Drain the macaroni in a colander.</li>
                            <li>Place the butter, flour, and onion powder in a medium pot. Whisk and heat over medium until the butter is melted and the mixture begins to bubble. Once bubbling, continue to whisk and cook for one minute.</li>
                            <li>After cooking the butter and flour roux, whisk in the milk. Continue to cook and whisk over medium heat until the milk begins to gently simmer, at which point it will thicken to the consistency of heavy cream or gravy.</li>
                            <li>Turn the burner off. Season the white sauce with the salt and hot sauce.</li>
                            <li>Begin to add the shredded cheddar, one handful at a time, whisking it in until completely melted before adding more. Continue until all of the cheese has been melted into the sauce. If the sauce becomes too cold to melt the cheese, place it back over low heat only briefly to continue melting the cheese. Overheating the sauce can cause it to break and become grainy.</li>
                            <li>Add the cooked and drained pasta to the pot with the cheese sauce and stir to combine. Serve the mac and cheese hot and enjoy!</li>
                        </ol>`;
                        break;
                case "bacon_alfredo":
                            recipeDetails = `
                                <h5>Garlic Shrimp Bacon Alfredo</h5>
                                <p>Ingredients:</p>
                                <ul>
                                    <li>6 slices bacon, chopped</li>                            
                                    <li>1 lb shrimp(455 g), peeled and deveined</li>
                                    <li>½ medium yellow onion, diced</li>
                                    <li>1 medium tomato, diced</li>
                                    <li>3 cloves garlic, minced</li>
                                    <li>2 cups heavy cream(480 mL)</li>                           
                                    <li>1 lb fettuccine(455 g), cooked</li>
                                    <li>1 cup grated parmesan cheese(110 g)</li>
                                    <li>½ cup fresh parlsey(20 g), chopped</li>
                                    
                                </ul>
                                <p>Directions:</p>
                                <ol>
                                    <li>In a large pot, cook the bacon over medium heat until crispy.</li>
                                    <li>Add the shrimp, salt, and pepper and cook until the shrimp is pink and opaque. Remove the shrimp and bacon from the pot, leaving any fat from cooking the bacon behind.</li>
                                    <li>Add the onions, tomatoes, and garlic to the pot and cook until the garlic is starting to brown.</li>
                                    <li>Add the cream and bring to a boil.</li>
                                    <li>Once the cream is boiling, add the fettuccine. Return the shrimp and bacon to the pan, along with the Parmesan cheese and parsley. Stir until the cheese melts and the sauce coats the shrimp and pasta nicely.</li>
                                </ol>`;
                                break;
                case "parm_lasagna":
                                    recipeDetails = `
                                        <h5>Chicken Parm Lasagna</h5>
                                        <p>Ingredients:</p>
                                        <ul>
                                            <li>3 chicken breasts</li>                            
                                            <li>salt, to taste</li>
                                            <li>pepper, to taste</li>
                                            <li>1 cup all-purpose flour(125 g)</li>
                                            <li>5 eggs, divided</li>
                                            <li>2 cups italian bread crumbs(230 g)</li>                           
                                            <li>vegetable oil, fo frying</li>
                                            <li>2 cups ricotta cheese</li>
                                            <li>24 oz marinara sauce(680 g)</li>
                                            <li>8 lasagna noodles</li>
                                            <li>1 ½ cups shredded mozzarella cheese(150 g)</li>
                                            <li>1 ½ cups shredded parmesan cheese(160 g)</li>
                                            <li>fresh basil, to garnish</li>
                                            
                                        </ul>
                                        <p>Directions:</p>
                                        <ol>
                                            <li>Cut chicken breasts in half (pound thin if necessary) and season with salt and pepper.</li>
                                            <li>Add the flour, 4 eggs, and bread crumbs to 3 separate shallow dishes. Beat the eggs. Coat the chicken in the flour, then the eggs, and finally in the bread crumbs.</li>
                                            <li>Heat the vegetable oil in a cast iron skillet over medium heat. Fry the chicken on both sides until golden brown, about 4 minutes on each side. Let drain on paper towels.</li>
                                            <li>In a medium bowl, combine the ricotta cheese and the remaining egg</li>
                                            <li>Spread about ⅓ of the marinara sauce over the bottom of a casserole dish. Top with 4 lasagna noodles, ½ of the ricotta mixture, and 3 chicken cutlets. Sprinkle with ½ cup of mozzarella and ½ cup of Parmesan cheese. Repeat to make another layer, then finish with the remaining sauce and mozzarella and Parmesan cheeses.</li>
                                            <li>Cover with foil and bake for 45-60 minutes, uncovering the lasagna for the last 10 minutes of baking.</li>
                                            <li>Serve with a sprinkle of fresh basil.</li>
                                        </ol>`;
                                        break;
                    case "pochero":
                                    recipeDetails = `
                                        <h5>Pochero</h5>
                                        <p>Ingredients:</p>
                                        <ul>
                                            <li>3 tablespoons olive oil</li>                            
                                            <li>2 plantains, peeled and quartered</li>
                                            <li>2 small potatoes, quartered</li>
                                            <li>1 onion, chopped</li>
                                            <li>2 cloves garlic, minced</li>
                                            <li>4 pounds chicken</li>                           
                                            <li>2 links chorizo de bilbao</li>
                                            <li>diced tomatoes</li>
                                            <li>1 can garbanzo beans, drained</li>
                                            <li>1 small head cabbage, chopped</li>
                                            
                                        </ul>
                                        <p>Directions:</p>
                                        <ol>
                                            <li>Heat the olive oil in a large pot over medium heat; fry the plantains and potatoes in the hot oil until crisp on the outside, 5 to 7 minutes. Remove from the pot and set aside, keeping the oil in the pot.</li>
                                            <li>Cook and stir the onion and garlic in the hot oil until the onion is translucent, 5 to 7 minutes. Add the chicken and chorizo; season with salt and pepper. Cover the pot and cook for 5 minutes.</li>
                                            <li>Pour enough water over the chicken to cover completely; bring to a simmer and cook for 10 minutes. Add the tomatoes, cover, and cook another 10 minutes. Stir the plantains, potatoes, garbanzo beans, and cabbage into the mixture. Cook covered until the cabbage is wilted and everything is hot, about 5 minutes more. Serve hot.</li>
                                        </ol>`;
                                        break;
                    case "adobo":
                                            recipeDetails = `
                                                <h5>Pork and Chicken Adobo</h5>
                                                <p>Ingredients:</p>
                                                <ul>
                                                    <li>1 ¼ pounds boneless pork loin roast, cut into 2-inch pieces</li>                            
                                                    <li>1 ¼ pounds boneless, skinless chicken thighs, trimmed and cut into 2-inch pieces</li>
                                                    <li>2 tablespoons crushed garlic</li>
                                                    <li>2 bay leaves, torn</li>
                                                    <li>freshly ground black pepper</li>
                                                    <li>1 cup white vinegar</li>                           
                                                    <li>¼ cup soy sauce</li>
                                                    <li>1 tablespoon vegetable oil</li>
                                                    <li>2 cloves garlic, smashed</li>
                                                    
                                                </ul>
                                                <p>Directions:</p>
                                                <ol>
                                                    <li>Place pork and chicken into a stock pot. Rub with crushed garlic and torn bay leaf, season lightly with pepper, and coat with vinegar and soy sauce. Cover, and marinate in the refrigerator at least 2 hours or overnight.</li>
                                                    <li>Bring meat and marinating liquid to a boil in a cast iron casserole or Dutch oven. Reduce heat to a simmer and cook until meat is tender, about 30 minutes. If necessary, add water to prevent sauce from drying out.</li>
                                                    <li>Strain liquid from meat and set aside; discard bay leaves. Heat 1 tablespoon oil in a large skillet over medium-high heat. Brown the pork and chicken on all sides; reduce heat and stir in remaining 2 cloves of smashed garlic. Cook and stir for 2 minutes more. Pour in reserved cooking liquid, and continue simmering until sauce is slightly thickened. Serve hot.</li>
                                                </ol>`;
                                                break;
                    case "caldereta":
                                            recipeDetails = `
                                                        <h5>Caldereta</h5>
                                                        <p>Ingredients:</p>
                                                        <ul>
                                                            <li>3 tablespoons vegetable oil</li>                            
                                                            <li>1 ½ pounds cubed beef stew meat</li>
                                                            <li>3 cloves garlic, crushed</li>
                                                            <li>2 bay leaves, torn</li>
                                                            <li>3 cups water</li>
                                                            <li>½ cup unsweetened pineapple juice</li>                           
                                                            <li>1 onion, chopped</li>
                                                            <li>1 (14 ounce) can tomato sauce</li>
                                                            <li>¼ cup tomato paste</li>
                                                            <li>2 red potatoes, diced</li>
                                                            <li>1 red bell pepper, sliced</li>
                                                            <li>1 large carrot, sliced diagonally</li>
                                                            <li>½ pound miniature cocktail sausages</li>
                                                            <li>1 (8 ounce) can pineapple chunks, undrained</li>
                                                            <li>1 (6 ounce) can medium pitted ripe olives, drained</li>
                                                            <li>3 large bay leaves</li>
                                                            
                                                        </ul>
                                                        <p>Directions:</p>
                                                        <ol>
                                                            <li>Heat vegetable oil in a large pot over medium heat. Sprinkle beef with salt and black pepper and brown in the hot oil with garlic, about 10 minutes. Pour in water, pineapple juice, onion, tomato sauce, and tomato paste. Bring to a boil, turn heat to low, and simmer until beef is almost tender, 35 to 45 minutes.</li>
                                                            <li>Stir potatoes, red bell pepper, carrot, mini sausages, pineapple chunks with their juice, olives, and bay leaves into the stew. Bring back to a boil and simmer until potatoes are tender, about 20 more minutes. Season with hot pepper sauce, salt, and black pepper.</li>
                                                        </ol>`;
                                                        break;

            
                                                                        case "giniling":
                                                                            recipeDetails = `
                                                                                <h5>Filipino Beef Giniling</h5>
                                                                                <p>Ingredients:</p>
                                                                                <ul>
                                                                                    <li>1 tablespoon oil, or as needed</li>                            
                                                                                    <li>1 clove garlic, minced</li>
                                                                                    <li>2 pounds ground beef</li>
                                                                                    <li>1 ½ cups water, divided, or more as needed</li>
                                                                                    <li>ground black pepper to taste</li>
                                                                                    <li>2 medium red potatoes, cubed</li>                           
                                                                                    <li>10 baby carrots, or more to taste, cubed</li>
                                                                                    <li>6 tablespoons soy sauce, divided</li>
                                                                                    <li>½ cup raisins, or more to taste</li>
                                                                                    <li>1 ½ (6.5 ounce) cans tomato sauce with salt</li>
                                                                                    <li>½ medium orange bell pepper, diced</li>
                                                                                    <li>4 tablespoons white sugar</li> <!-- Added closing </li> tag -->
                                                                                </ul>
                                                                                <p>Directions:</p>
                                                                                <ol>
                                                                                    <li>Heat oil in a large saucepan over medium heat. Add garlic and cook until fragrant, about 1 minute.</li>
                                                                                    <li>Add beef and 1/2 cup water; cook and stir until browned and crumbly, 5 to 7 minutes. Season with black pepper and add more water as needed; do not let beef dry out.</li>
                                                                                    <li>Add potatoes, carrots, and 3 tablespoons soy sauce; cook for 4 minutes, adding more water if mixture is too dry. Add raisins and cook for 2 to 3 minutes, again adding water as needed.</li>
                                                                                    <li>Pour in one can tomato sauce. Fill the can with water and swirl to remove excess sauce; pour into the saucepan. Stir in remaining 1/2 can sauce until combined. Add more water as needed to create a saucy but not soupy consistency.</li>
                                                                                    <li>Stir in bell pepper, sugar, and remaining 3 tablespoons soy sauce. Cook, stirring occasionally and adding water as needed so sauce does not dry out, until all vegetables are tender, about 3 to 5 minutes.</li>
                                                                                </ol>`;
                                                                            break;
                                                                        
                        case "pinakbet":
                                                                                            recipeDetails = `
                                                                                                <h5>Pinakbet</h5>
                                                                                                <p>Ingredients:</p>
                                                                                                <ul>
                                                                                                    <li>3 tablespoons olive oil</li>                            
                                                                                                    <li>1 onion, chopped</li>
                                                                                                    <li>2 cloves garlic, minced</li>
                                                                                                    <li>½ pound pork loin, chopped</li>
                                                                                                    <li>½ pound peeled and deveined prawns</li>
                                                                                                    <li>1 tomato</li>                           
                                                                                                    <li>¼ pound zucchini</li>
                                                                                                    <li>¼ pound fresh okra</li>
                                                                                                    <li>¼ pound fresh green beans</li>
                                                                                                    <li>¼ pound eggplant,</li>
                                                                                                    <li>1 small bitter melon</li>
                                                                                                    
                                                                                                </ul>
                                                                                                <p>Directions:</p>
                                                                                                <ol>
                                                                                                    <li>Heat oil in a large pot over medium heat; stir in onion and garlic and cook until tender, about 5 minutes.</li>
                                                                                                    <li>Add pork; cook and stir until browned, 5 to 7 minutes.</li>
                                                                                                    <li>Add prawns; cook and stir until they turn pink, about 5 minutes.</li>
                                                                                                    <li>Stir in tomato; season with salt and pepper, cover and simmer for 5 minutes.</li>
                                                                                                    <li>Stir in zucchini, okra, green beans, eggplant, and bitter melon; cover and cook until the vegetables are tender, about 10 minutes.</li>
                                                                                                </ol>`;
                                                                                                break;
                                                                                                case "tinola":
                                                            recipeDetails = `
                                                                        <h5>Tinola</h5>
                                                                        <p>Ingredients:</p>
                                                                        <ul>
                                                                            <li>1 tablespoon cooking oil</li>                            
                                                                            <li>1 medium onion, chopped</li>
                                                                            <li>2 cloves garlic, minced</li>
                                                                            <li>1 (1 1/2 inch) piece fresh ginger, peeled and thinly sliced</li>
                                                                            <li>1 tablespoon fish sauce</li>
                                                                            <li>3 pounds chicken legs and thighs, rinsed and patted dry</li>                           
                                                                            <li>2 (14 ounce) cans chicken broth</li>
                                                                            <li>1 chayote squash, peeled and cut into bite-sized pieces</li>
                                                                            <li>1 head bok choy, chopped</li>
                                                                            <li>1 (8 ounce) package fresh spinach, chopped</li>
                                                                            
                                                                        </ul>
                                                                        <p>Directions:</p>
                                                                        <ol>
                                                                            <li>Heat oil in a large pot over medium heat. Add onion and garlic; cook and stir until fragrant, about 2 minutes.</li>
                                                                            <li>Add ginger and fish sauce; cook and stir for 1 to 2 minutes. Stir in chicken and cook for 5 minutes.</li>
                                                                            <li>Pour in chicken broth and cook for 5 minutes. Add squash and simmer until chicken is no longer pink in the center, about 10 minutes. Season with salt and pepper.</li>
                                                                            <li>Add bok choy and spinach; cook until spinach is just wilted, 1 to 2 minutes. Serve hot.</li>

                                                                        </ol>`;
                                                                        break;
                                                                        case "cassava":
    recipeDetails = `
        <h5>Cassava Cake</h5>
        <p>Ingredients:</p>
        <ul>
            <li>2 cups grated, peeled yuca</li>
            <li>1 (14 ounce) can coconut milk</li>
            <li>1 (14 ounce) can sweetened condensed milk</li>
            <li>1 (12 ounce) can evaporated milk</li>
            <li>2 large eggs, beaten</li>
        </ul>
        <p>Directions:</p>
        <ol>
            <li>Preheat the oven to 350 degrees F (175 degrees C).</li>
            <li>Stir yuca, coconut milk, condensed milk, evaporated milk, and eggs together in a bowl until thoroughly combined; pour into a 2-quart baking dish.</li>
            <li>Bake in the preheated oven until set, about 1 hour.</li>
            <li>Turn the broiler on and bake until top of cake is browned, 2 to 3 minutes. Cool completely in the refrigerator before serving, about 1 hour.</li>
        </ol>`;
    break;
    case "lumpia":
        recipeDetails = `
            <h5>Filipino Lumpia</h5>
            <p>Ingredients:</p>
            <ul>
                <li>1 (12 ounce) package lumpia wrappers</li>
                <li>1 pound ground beef</li>
                <li>½ pound ground pork</li>
                <li>⅓ cup finely chopped onion</li>
                <li>⅓ cup finely chopped green bell pepper</li>
                <li>⅓ cup finely chopped carrot</li>
                <li>1 quart oil for frying</li>
            </ul>
            <p>Directions:</p>
            <ol>
                <li>Make sure the lumpia wrappers are completely thawed. Lay several out on a clean dry surface and cover with a damp towel. The wrappers are very thin and the edges will dry out quickly.</li>
                <li>In a medium bowl, blend together the ground beef and pork, onion, green pepper, and carrot. Place about 2 tablespoons of the meat mixture along the center of the wrapper. The filling should be no bigger around than your thumb or the wrapper will burn before the meat is cooked. Fold one edge of the wrapper over to the other. Fold the outer edges in slightly, then continue to roll into a cylinder. Wet your finger, and moisten the edge to seal. Repeat with the remaining wrappers and filling, keeping finished lumpias covered to prevent drying. This is a good time to recruit a friend or loved one to make the job less repetitive!!</li>
                <li>Heat oil in a 9-inch skillet at medium to medium-high heat until the oil is 365 to 375 degrees F (170 to 175 degrees C). Fry 3-4 lumpia at a time. It should only take about 2-3 minutes for each side. The lumpia will be nicely browned when done. Drain on paper towels.</li>
            </ol>`;
        break;
        case "turon":
            recipeDetails = `
                <h5>Turon</h5>
                <p>Ingredients:</p>
                <ul>
                    <li>6 pieces bananas saba or plantains, cut in half (lengthwise)</li>
                    <li>1 cup ripe jackfruit, sliced</li>
                    <li>1 1/2 cups sugar</li>
                    <li>12 pieces lumpia wrapper</li>
                    <li>2 cups cooking oil</li>
                </ul>
                <p>Directions:</p>
                <ol>
                    <li>Roll the banana on the sugar plate and ensure that the banana is coated with enough sugar.</li>
                    <li>Place the banana with sugar coating in the spring roll wrapper and add some ripe jackfruit.</li>
                    <li>Fold and lock the spring roll wrapper, use water to seal the edge.</li>
                    <li>In a pan, heat the oil and put-in some sugar. Wait until the brown sugar floats.</li>
                    <li>Put-in the wrapped banana and fry until the wrapper turns golden brown and the extra sugar sticks on the wrapper.</li>
                </ol>`;
            break;
            case "onion_rings":
                recipeDetails = `
                    <h5>Onion Rings</h5>
                    <p>Ingredients:</p>
                    <ul>
                        <li>1 large yellow onion, sliced</li>
                        <li>1 1/4 cups all-purpose flour</li>
                        <li>1 teaspoon baking powder</li>
                        <li>1 teaspoon salt</li>
                        <li>1 piece egg, beaten</li>
                        <li>1 cup milk</li>
                        <li>1 cup Panko bread crumbs</li>
                        <li>1 teaspoon salt</li>
                        <li>1/4 teaspoon ground black pepper</li>
                        <li>3 cups cooking oil</li>
                    </ul>
                    <p>Directions:</p>
                    <ol>
                        <li>Break up the onion slices into rings. Set aside.</li>
                        <li>Combine flour, baking powder, and salt in a small bowl and mix well.</li>
                        <li>Dredge the onions in the flour mixture and set aside.</li>
                        <li>Meanwhile, make the batter by adding the egg and milk to the flour mixture and whisk.</li>
                        <li>Dip the onions in the batter and allow the extra batter to drip.</li>
                        <li>Place the breadcrumbs in a plastic bag or container and put the onion rings inside.</li>
                        <li>Heat a cooking pot and pour in cooking oil.</li>
                        <li>When the oil is hot, deep-fry the onions until the color turns golden brown (usually 2 minutes or so).</li>
                        <li>Remove the onion rings from the cooking pot and place them on a plate lined with paper towels to absorb the excess oil.</li>
                        <li>Transfer to a serving plate and serve.</li>
                    </ol>`;
                break;
            
                case "cheese_sticks":
                    recipeDetails = `
                        <h5>Cheese Sticks</h5>
                        <p>Ingredients:</p>
                        <ul>
                            <li>7 ounces cheddar cheese, sliced into individual strips (Pinoy cheese can be used for this recipe)</li>
                            <li>30 pieces spring roll (lumpia) wrappers</li>
                            <li>1 cup cooking oil</li>
                        </ul>
                        <p>Directions:</p>
                        <ol>
                            <li>Wrap the cheeses in spring roll wrappers.</li>
                            <li>Heat the pan and pour in the cooking oil. Let the oil heat up for a few minutes. (Use a smaller pan to save oil)</li>
                            <li>Deep-fry the cheese in spring roll wrappers (uncooked cheese sticks) for 4 minutes or until the color of the spring roll wrapper turns golden brown.</li>
                            <li>Remove from the pan and place on a plate with paper towels. Let stand for a few minutes for the oil to drain.</li>
                        </ol>`;
                    break;
                    case "popcorn":
                        recipeDetails = `
                            <h5>Chicken Popcorn</h5>
                            <p>Ingredients:</p>
                            <ul>
                                <li>1 lb. boneless chicken breasts, cubed</li>
                                <li>2 raw eggs, beaten</li>
                                <li>1 cup all-purpose flour</li>
                                <li>1/2 teaspoon salt</li>
                                <li>1/4 teaspoon ground black pepper</li>
                                <li>1/2 teaspoon garlic powder</li>
                                <li>1 teaspoon chili powder</li>
                                <li>1 1/2 cups cooking oil</li>
                            </ul>
                            <p>Directions:</p>
                            <ol>
                                <li>Sprinkle the chicken with salt and pepper. Mix well and let it sit for 10 minutes.</li>
                                <li>Meanwhile, combine the all-purpose flour, garlic powder, and chili powder in a Ziploc bag. Shake to mix.</li>
                                <li>Dip the chicken pieces in the beaten egg, and then put the first batch in the bag with the flour mixture. Shake well to coat.</li>
                                <li>Heat the cooking oil in a deep cooking pan. When the oil becomes hot, put the flour-coated chicken one-by-one. Continue frying in low to medium heat until the color turns light to golden brown.</li>
                                <li>Remove the chicken popcorn from the pan and place them on a plate lined with paper towels.</li>
                                <li>Serve with cornbread or cornbread muffin. Share and enjoy!</li>
                            </ol>`;
                        break;
                    
                    default:
                    recipeDetails = "<p>Recipe not found</p>";
                    break;
            }

            return recipeDetails;
        }
    });

