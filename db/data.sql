insert into users (password, email, user_name) VALUES ('passwords', 'peter@gmail.com', 'Peter');
insert into users (password,email,profile_pic,user_name) values ('1234','cock@cuntmail.com','/Volumes/SD/OSX Stuff/DownloadsEX/meme_man.webp' , 'fuckface');
insert into users (password,email,profile_pic,user_name) values ('88888888', 'dicks@dicksmail.com','/Volumes/SD/OSX Stuff/DownloadsEX/photo-1576618148400-f54bed99fcfd.jpeg','dickface');

insert into cuisine (name) VALUES ('Japanese');
insert into cuisine (name) values ('chinese');
insert into cuisine (name) values ('Thai');

insert into diet (name) VALUES (not);

insert into allergies (name) VALUES ('seafood'),('lemon');

insert into diet (name) VALUES ('vegetarian'),('meat_lover'),('pescetarian'),('ketogenic');

ALTER TABLE recipe ALTER TITLE TYPE text;

insert into recipe (user_id, title, video, cuisine_id, calories, content, diet_id) VALUES (2, '星米', null, 2, 300, '落獲上獲', 3);
insert into recipe (user_id, title, video, cuisine_id, calories, content, diet_id) VALUES (3, '牛河', null, 2, 300, '河先牛後', 3);
insert into recipe (user_id, title, video, cuisine_id, calories, content, diet_id) VALUES (3, '西多', null, 3, 300, '落包炸爆', 3);


insert into recipe_image (recipe_id, image, is_cover) values ( 1, 'chicken.jpg', true);
insert into recipe_image (recipe_id, image, is_cover) values ( 1, '/Users/Man/Downloads/chickenleg.jpg"', true);
insert into recipe_image (recipe_id, image, is_cover) values ( 2, '"C:\Users\Man\Downloads\fishdishes.jpg"', true);
insert into recipe_image (recipe_id, image, is_cover) values ( 3, '"C:\Users\Man\Downloads\pork.jpg"', true);


insert into recipe_ingredient (recipe_id, ingredient_name, amount, unit) values ( 1, 'chicken', 1, 'kg'); 
insert into recipe_ingredient (recipe_id, ingredient_name, amount, unit) values ( 1, 'flour', 0.5, 'kg'); 
insert into recipe_ingredient (recipe_id, ingredient_name, amount, unit) values ( 2, 'fish', 2, 'kg');
insert into recipe_ingredient (recipe_id, ingredient_name, amount, unit) values ( 2, 'salt', 3, 'tsp');

DELETE FROM allergies WHERE id IN (1, 2);

insert into allergies (name) values ('Peanut');
insert into allergies (name) values ('Gluten');

update allergies set id = 1 where id = 3;
update allergies set id = 2 where id = 4;

insert into recipe_allergies ()
insert into recipe_image (recipe_id, image, is_cover) VALUES (1, '/Users/Man/Downloads/lovepik-boys-head-png-image_400233604_wh1200.png', true);


insert into allergies (name) values ('Seafood');
insert into allergies (name) values ('Gluten');

insert into diet (name) values ('Meat Lover');
insert into diet (name) values ('Ketogenic');

insert into cuisine (name) values ('North American');
insert into cuisine (name) values ('Vietnamese');
insert into cuisine (name) values ('Italian');
insert into cuisine (name) values ('French');

insert into avoid (name) values ('Alcohol');
insert into avoid (name) values ('Pork');
insert into avoid (name) values ('Beef');
insert into avoid (name) values ('Seafood');
insert into avoid (name) values ('Starch');
insert into avoid (name) values ('Spicy');

update allergies set name = 'Dairy' where id = 6;


select distinct recipe.id, user_name, title as recipe_title, calories, content, diet.name as diet, cuisine.name as cuisine, image, is_cover, ingredient_name, amount, unit, profile_pic, allergies from recipe
		join users on recipe.user_id = users.id
		join diet on recipe.diet_id = diet.id
		join cuisine on recipe.cuisine_id = cuisine.id
		join recipe_image on recipe_image.recipe_id = recipe.id
        join recipe_ingredient on recipe.id = recipe_ingredient.recipe_id
        join recipe_allergies on recipe.id = recipe_allergies.recipe_id
        join allergies on allergies.id = recipe_allergies.allergies_id
        where recipe.id = 1