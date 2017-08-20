{
  session: {

    currentUser: {
      id: 1,
      username: "Kyle",
      current_weight: 200,
      goal_weight: 190,
      height: 74,
      gender: "M",
      age: 27,
      activity_level: "Lightly Active",
      goal: "Lose 1 pound per week",
      foodDiaryIDs: [1, 2, 3], // Link currentUser to their food diaries
      exerciseDiaryIDs: [1, 2, 3]  // Link currentUser to their exercise diaries
    },

    errors: []

    },

  entities: {
    // Entities will only have food/exercise diaries and loggings that belong to currentUser
    // But will have all the foods and exercises

    foodDiaries: {
      byId: {
        1: {
          id: 1,
          date: "Aug 16, 2017",
          user_id: 1,
          foodLoggingIDs: [1, 2, 3]  // Link each food diary to foods eaten that day
        },
        ...
      },
      ord: [1, 2, 3]
    },

    foodLoggings: {
      1: {
        id: 1,
        servings: 3,
        meal: lunch,
        food_id: 1,
        food_diary_id: 1
      },
      ...
    },

    foods: {
      1: {
        id: 1,
        brand: "Hostess",
        name: "Twinkies",
        calories: 270,
        carbohydrates: 46,
        protein: 2,
        fats: 9
        servingSize: "2 cakes"
      },
      ...
    },

    exerciseDiaries: {
      byId: {
        1: {
          id: 1,
          date: "Aug 16, 2017",
          user_id: 1,
          exerciseLoggingIDs: [1, 2, 3]  // Link each exercise diary to exercises done that day
        },
        ...
      },
      ord: [1, 2, 3]
    },

    exerciseLoggings: {
      1: {
        id: 1,
        minutes: 30,
        exercise_id: 1
        exercise_diary_id: 1
      },
      ...
    },

    exercises: {
      1: {
        id: 1,
        name: "Running, 10 mph",
        calsBurnedPerMin: 21
      },
      ...
    }
  }
}
