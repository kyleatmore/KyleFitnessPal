# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null
password_digest | string    | not null
session_token   | string    | not null

## goals
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
current_weight  | integer   | not null
goal_weight     | integer   | not null
height          | integer   | not null
gender          | string    | limit: 1, not null
birth_date      | date      | not null
activity_level  | string    | not null
goal            | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed

## food_diaries
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
date            | date      | not null
user_id         | integer   | not null, foreign key (references users), indexed

## foods
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
brand           | string    | not null
name            | string    | not null
calories        | integer   | not null
carbohydrates   | integer   | not null
protein         | integer   | not null
fats            | integer   | not null
serving_size    | string    | not null

## food_loggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
servings        | integer   | not null
meal            | string    | not null
food_id         | integer   | not null, foreign key (references foods), indexed
food_diary_id   | integer   | not null, foreign key (references food_diaries), indexed

## exercise_diaries
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
date            | date      | not null
user_id         | integer   | not null, foreign key (references users), indexed

## exercises
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
name                | string    | not null
cals_burned_per_min | integer   | not null

## exercise_loggings
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
minutes             | integer   | not null
exercise_id         | integer   | not null, foreign key (references exercises), indexed
exercise_diary_id   | integer   | not null, foreign key (references exercise_diaries), indexed
