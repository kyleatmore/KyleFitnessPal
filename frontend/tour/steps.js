const steps = [
  {
    title: 'Welcome to kyleFitnessPal!',
    text: 'kyleFitnessPal is a calorie tracking application that allows \
    you to create food and exercise diaires to track the amount of calories \
    you\'re burning each day.',
    selector: '.logo',
    position: 'right',
    nextPage: null,
  },
  {
    title: 'Food Diaries',
    text: 'Click here to view today\'s food diary.',
    selector: '.nav-link.food',
    position: 'bottom',
    nextPage: 'diary',
  },
  {
    title: 'Food Diaries',
    text: 'Click here to toggle between food diaries for different days. \
    You can view your old diaries or make diaries for dates in the future.',
    selector: '.food-diary.date',
    position: 'right',
    nextPage: null,
  },
  {
    title: 'Adding Food Entries',
    text: 'Click here to add a food entry to today\'s diary.',
    selector: '.diary-item.first.add-food',
    position: 'left',
    nextPage: 'log-food',
  },
  {
    title: 'Searching For Foods',
    text: 'Type here to search our food database for the food you want to add. \
    Once you find the food you\'re looking for, you can specify \
    the amount you ate and for which meal (breakfast, lunch, or dinner) \
    and then add it to your food diary.',
    selector: '.food-search',
    position: 'left',
    nextPage: null,
  },
  {
    title: 'Adding Foods To Our Databse',
    text: 'If you can\'t find the food you\'re looking for, no worries! \
    Click here and you can add a new food to our database.',
    selector: '.new-food.link',
    position: 'top',
    nextPage: 'diary',
  },
  {
    title: 'Food Diary Totals',
    text: 'Once you\'ve made some entries to your diary, the macronutrient \
    totals will be here. You\'ll be able to compare these with your daily \
    calorie allowance and view your remaining calories.',
    selector: '.total-category',
    position: 'left',
    nextPage: null,
  },
  {
    title: 'Exercise Diaries',
    text: 'Click here to view today\'s exercise diary.',
    selector: '.nav-link.exercise',
    position: 'bottom',
    nextPage: 'exercise_diary',
  },
  {
    title: 'Adding Exercise Entries',
    text: 'Exercise diaries work the same way as food diaries. Clicking \'Add \
    Exercise\' will let you search our exercise database and log your \
    workouts.',
    selector: '.diary-item.first.add-food',
    position: 'left',
    nextPage: null,
  },
  {
    title: 'Home Page',
    text: 'Click here to return to the home page.',
    selector: '.nav-link.home',
    position: 'bottom',
    nextPage: 'home',
  },
  {
    title: 'Daily Summary',
    text: 'On your home page, you can track your daily progression towards \
    your calorie goals. Remember that exercise subtracts from calories \
    consumed, letting you eat more!',
    selector: '.daily-summary',
    position: 'right',
    nextPage: null,
  },
  {
    title: 'Goals Summary',
    text: 'Click here if you want to review your suggested nutritional \
    and fitness goals.',
    selector: '.nav-link.goals',
    position: 'bottom',
    nextPage: null,
  },
  {
    title: 'Thanks For Using kyleFitnessPal!',
    text: 'If you\'d like to take the tour \
    again, please click here.',
    selector: '.tour',
    position: 'right',
    nextPage: null,
  },
];

export default steps;
