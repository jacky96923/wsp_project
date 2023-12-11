async function loadCard() {
  try {
    let res = await fetch("/userprofile/1");
    let profiles = await res.json();

    renderData(profiles);
  } catch (error) {
    console.error("error loading content:", error);
  }
}

function renderData(profiles) {
  let recipe_cardTemplate = document.querySelector("#template");
  let recipe_card = document.querySelector("#recipe_card");
  recipe_card.textContent = " ";
  for (let recipe of profiles.recipes) {
    let node = recipe_cardTemplate.content.cloneNode(true);
    let recipeNameElement = node.querySelector("#recipeName");
    let userNameElement = node.querySelector("#userName");
    let coverImageElement = node.querySelector("#coverImage");
    let imagePath = `/uploads/${recipe.cover_image}`;
    coverImageElement.src = imagePath;

    recipeNameElement.textContent = recipe.recipe_title;

    userNameElement.textContent = recipe.user_name;

    //delete button
    const delete_btn = node.querySelector(".deleteButton");
    recipe_card.appendChild(node);
    delete_btn.addEventListener("click", async () => {
      try {
        let res = await fetch("/recipe/" + recipe.id, {
          method: "DELETE",
        });

        if (res.ok) {
          console.log("Recipe deleted");
          loadCard();
        } else {
          console.error("Failed to delete recipe");
        }
      } catch (error) {
        console.error("error loading content:", error);
      }
    });
  }
}

loadCard();

// delete button
// const delete_btn = document.getElementById("deleteButton");

// delete_btn.addEventListener("click", async () => {
//   try {
//     let res = await fetch("/recipe/1", {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       console.log("Recipe deleted");
//     } else {
//       console.error("Failed to delete recipe");
//     }
//   } catch (error) {
//     console.error("error loading content:", error);
//   }
// });

// loadCard();
