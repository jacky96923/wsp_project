// import "/userprofile/userprofile.js";

// let ingredientChoice_recipe_id = null;

// async function loadIngredientChoice() {
//   try {
//     let res = await fetch("/ingredentExist");
//     let json = await res.json();
//     console.log({ json });
//     if (json.error) {
//       throw new Error(json.error);
//     }
//     let filterIngredientTemplate = document.querySelector(".recipe_ingredient");

//     for (let choice of json.ingredientChoice) {
//       let node = filterIngredientTemplate.cloneNode(true);
//       console.log({ node });
//       node.querySelector(".confirmation").textcontent =
//         recipe_ingredient.ingredient.name;
//       node.onclick = () => {
//         document
//           .querySelectorAll(".recipe.selected")
//           .forEach((node) => node.classList.remove("selected"));
//         node.classList.add("selected");
//         selected_recipe_id = recipe.recipe_id;
//       };
//       filterIngredientList.appendChild(node);
//       filterIngredientTemplate.remove();
//     }
//   } catch (error) {
//     console.error("error loading content", error);
//   }
// }
// loadIngredientChoice();

// async function selectRecipe() {
//   let params = new URLSearchParams(result.search);
//   let recipe = params.get("recipe");
//   console.log(recipe);
//   // location.href = "/filter/filter.html?" + params;
//   // location.href = "/userprofile/userprofile.html?" + params;
//   let res = await fetch("/ingredentChoice", {
//     method: "POST",
//     body: JSON.stringify({ recipe }),
//     headers: { "content-type": "application/json" },
//   });
//   let json = await res.json();
//   let selectRecipe = [];
// }

// insertrecipe();

async function searchByIngredients(event) {
  event.preventDefault();
  let form = event.target;
  let formData = new FormData(form);
  let params = new URLSearchParams(formData);
  let res = await fetch(form.action + "?" + params);
  let json = await res.json();
  console.log("json:", json);
  filterItems.textContent = json.ingredientChoices.length + " matches";
  for (let ingredientChoice of json.ingredientChoices) {
    let recipe_card = template.content
      .querySelector(".recipe_card")
      .cloneNode(true);

    recipe_card.querySelector(".recipeName").textContent =
      ingredientChoice.title;

    recipe_card.querySelector("#coverImage").src =
      "/uploads/" + ingredientChoice.image;

    filterItems.appendChild(recipe_card);
  }
}
// let buttontemplate = document.querySelector(".selectionButton");
// buttontemplate.remove();

async function allIngredients() {
  console.log("allIngredients");
  // preventDefault();
  // let forms = event.target;
  // let formData = new FormData(form);
  // let params = new URLSearchParams(formData);
  let res = await fetch("/displayAllIngredient", {
    method: "GET",
  });
  // console.log("res from all ingredient:", res);
  let json = await res.json();
  console.log("json:", json);
  filterItems.textContent = json.allIngredient.length;
  for (let allIngredient of json.allIngredient) {
    // console.log("in the loop");
    let recipe_card = template.content
      .querySelector(".recipe_card")
      .cloneNode(true);
    // console.log("in the loop2");
    recipe_card.querySelector(".recipeName").textContent = allIngredient.title;
    // console.log("in the loop3");

    recipe_card.querySelector("#coverImage").src =
      "/uploads/" + allIngredient.image;

    recipe_card.querySelector("button").addEventListener("click", () => {
      window.location = `/recipes/recipes.html?id=${allIngredient.id}`;
    });

    filterItems.appendChild(recipe_card);

    let recipe_id = allIngredient.id;
    console.log(recipe_id);

    // let node = buttontemplate.cloneNode(true);
    // node.addEventListener("click", () => {
    //   window.location.href = `/recipes/recipes.html?id=${recipe_id}`;
    // });
    // recipe_card.appendChild(node);
  }
  // let recipeImage = template.image
  //   .querySelector(".recipeImage")
  //   .cloneNode(true);
}

allIngredients();

// let buttons = node.querySelectorAll(".detailContent");
// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     window.location.href = `/recipes/recipes.html?id=${recipe_id}`};
//   )};

// console.log(recipe_id);

//   }

//below from Jacky userprofile js
// async function loadCard() {
//   try {
//     let res = await fetch("/filter/filter");
//     let profiles = await res.json();

//     renderData(profiles);
//   } catch (error) {
//     console.error("error loading content:", error);
//   }
// }

// function renderData(profiles) {
//   let recipe_cardTemplate = document.querySelector("#template");
//   let recipe_card = document.querySelector("#recipe_card");
//   recipe_card.textContent = " ";
//   for (let recipe of profiles.recipes) {
//     let node = recipe_cardTemplate.content.cloneNode(true);
//     let recipeNameElement = node.querySelector("#recipeName");
//     let userNameElement = node.querySelector("#userName");
//     let coverImageElement = node.querySelector("#coverImage");
//     let imagePath = `/uploads/${recipe.cover_image}`;
//     coverImageElement.src = imagePath;

//     recipeNameElement.textContent = recipe.recipe_title;

//     userNameElement.textContent = recipe.user_name;

//     //delete button
//     const delete_btn = node.querySelector(".deleteButton");
//     recipe_card.appendChild(node);
//     delete_btn.addEventListener("click", async () => {
//       try {
//         let res = await fetch("/recipe/" + recipe.id, {
//           method: "DELETE",
//         });

//         if (res.ok) {
//           console.log("Recipe deleted");
//           loadCard();
//         } else {
//           console.error("Failed to delete recipe");
//         }
//       } catch (error) {
//         console.error("error loading content:", error);
//       }
//     });
//   }
// }

// loadCard();
