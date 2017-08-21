## Component Hierarchy

**Header**

**NavigationBar**

**AuthFormContainer**
 - AuthForm
  - Three steps to login
  - State of AuthForm determines which part step of form is shown

**HomePageContainer**
 - Daily Summary

**FoodDiaryContainer**
 - FoodDiaryHeader
 - FoodDiaryIndex
  - FoodDiaryIndexItem
  - FoodDiaryTotal

**ExerciseDiaryContainer**
 - ExerciseDiaryHeader
 - ExerciseDiaryIndex
  - ExerciseDiaryIndexItem
  - ExerciseDiaryTotal

**SearchContainer**
 - Search
  - SearchResultsIndex
    - SearchResultsIndexItem

**AddFoodContainer**
  - AddFoodForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" | "HomePageContainer" |
| "/food-diary/:foodDiaryId" | "FoodDiaryContainer" |
| "/food-diary/:foodDiaryId/log-food" | "SearchContainer" |
| "/add-food" | "AddFoodContainer" |
"/exercise-diary/:exerciseDiaryId" | "ExerciseDiaryContainer" |
| "/exercise-diary/:exerciseDiaryId/log-food" | "SearchContainer" |
