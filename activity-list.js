const invalidOpration = "Invalid Opration";
const invalidDay = "Invalid Day";
const invalidActivity = "Invalid Activity";
const dayMessage = "Day :";
const activityMessage = "Activity :";
const turkish = "tr";
const str = "";

const days = ["pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi", "pazar"];
const toDoList = [];
let day;

for (let i = 0; i < 7; i++) {
  day = prompt(dayMessage);

  if (day !== null) {

    day = day.toLocaleLowerCase(turkish).trim();

    if (day === str) {
      alert(invalidOpration);
      i--;
      continue;
    }

    if (!days.includes(day)) {
      alert(invalidDay);
      i--;
      continue;
    }

    let activity = prompt(activityMessage);

    if (!activity) {
      alert(invalidActivity);
      i--;
      continue;
    }

    toDoList[i] = { day: day, activity: activity.trim() };

  } else break;


}

if (toDoList) {
  for (const toDo of toDoList) {
    console.log(toDo.day, ":", toDo.activity);
  }
}