# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - Sign up
- `PATCH /api/users/:userId` - Edit user's goals

### Session

- `POST /api/session` - Sign in
- `DELETE /api/session` - Sign out

### Foods

- `GET /api/foods` - Get all foods for adding food to diary
- `GET /api/foods/:foodId` - Get data for one food item
- `POST /api/foods` - Add a new food to the database
- `PATCH /api/foods/:foodId` - Edit a foods nutrition info

### Food Diaries

- `GET /api/food_diaries/:foodDiaryId` - Get diary data for one day
- `PATCH /api/food_diaries/:foodDiaryId` - Update diary with food
- `POST /api/food_diaries/` - Add new diary
- `GET /api/food_diaries/:foodDiaryId/foods` - Get all food data for a diary

### Exercises

- `GET /api/exercises` - Get all exercises for adding exercise to diary
- `GET /api/exercises/:exerciseId` - Get data for one exercise

### Exercise Diaries

- `GET /api/exercise_diaries/:exerciseDiaryID` - Get diary data for one day
- `PATCH /api/exercise_diaries/:exerciseDiaryID` - Update diary with exercise
- `POST /api/exercise_diaries/` - Add new diary
- `GET /api/exercise_diaries/:exerciseDiaryID/exercises` - Get all exercise data for a diary
