const steps = [
  {
    title: 'Welcome to kyleFitnessPal!',
    text: 'kyleFitnessPal allows you to create food and exercise \
    diaires to track your daily calorie burn',
    selector: '.tour-button',
    position: 'bottom',
    nextPage: null,
  },
  {
    title: 'Food Diaries',
    text: 'Clicking here takes you to today\'s food diary',
    selector: '.nav-link.food',
    position: 'bottom',
    nextPage: 'diary',
  },
  {
    title: 'Food Diaries',
    text: 'Click here to switch between diaries on different days',
    selector: '.food-diary.date',
    position: 'right',
    nextPage: null,
  },
  {
    title: 'Adding Food Entries',
    text: 'Click here to add a food to today\'s diary',
    selector: '.diary-item.first.add-food',
    position: 'left',
    nextPage: 'log-food',
  },
  {
    title: 'Searching For Foods',
    text: 'Type here to search our food database for your favorite foods',
    selector: '.food-search',
    position: 'left',
    nextPage: null,
  },
  {
    title: 'Adding Food To Diary',
    text: 'Specify the amount of servings you ate and which meal. \
    Then add the food to your diary.',
    selector: '.add-form',
    position: 'right',
    nextPage: null,
  },
  {
    title: 'Adding Foods To Our Databse',
    text: 'If you can\'t find your food by searching above, no worries! \
    Click here to add a new food to our database.',
    selector: '.new-food.link',
    position: 'top',
    nextPage: 'diary',
  },
  {
    title: 'Diary Totals',
    text: 'The total caloric info of all your food entries are summed \
    here and compared with your daily calorie allowance.',
    selector: '.total-category',
    position: 'left',
    nextPage: null,
  },
  {
    title: 'Exercise Diaries',
    text: 'Clicking here takes you to today\'s exercise diary',
    selector: '.nav-link.exercise',
    position: 'bottom',
    nextPage: 'exercise_diary',
  },
  {
    title: 'Adding Exercise Entries',
    text: 'Exercise diaries work the same as food diaries. Click \'Add \
    Exercise\' to search our exercise databse and log your workouts',
    selector: '.diary-item.first.add-food',
    position: 'left',
    nextPage: null,
  },
  {
    title: 'Home Page',
    text: 'Click here to return to the home page',
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
    title: 'Goals Page',
    text: 'Click here to review your suggested nutritional and fitness goals',
    selector: '.nav-link.goals',
    position: 'bottom',
    nextPage: null,
  },
  {
    title: 'Thanks For Using kyleFitnessPal!',
    text: 'Enjoy using kyleFitnessPal. If you\'d like to take the tour \
    again, please click here.',
    selector: '.tour-button',
    position: 'bottom',
    nextPage: null,
  },
];

export default steps;
