var todayDate = new Date();
todayDate.setDate(todayDate.getDate() - todayDate.getDay());
var year = todayDate.getFullYear();
var month = todayDate.getMonth();
var day = todayDate.getDate();

var event1 = {
  options: {
    timeslotsPerHour: 4,
    timeslotHeight: 20,
    defaultFreeBusy: { free: true }
  },
  events: [
    { 'id': 1, 'start': new Date(year, month, day, 12), 'end': new Date(year, month, day, 13, 30), 'title': 'Lunch with Mike', userId: 0 },
    { 'id': 2, 'start': new Date(year, month, day, 14), 'end': new Date(year, month, day, 14, 45), 'title': 'Dev Meeting', userId: 1 },
    { 'id': 3, 'start': new Date(year, month, day + 1, 18), 'end': new Date(year, month, day + 1, 18, 45), 'title': 'Hair cut', userId: 1 },
    { 'id': 4, 'start': new Date(year, month, day + 2, 8), 'end': new Date(year, month, day + 2, 9, 30), 'title': 'Team breakfast', userId: 0 },
    { 'id': 5, 'start': new Date(year, month, day + 1, 14), 'end': new Date(year, month, day + 1, 15), 'title': 'Product showcase', userId: 1 }
  ]
};

todayDate = new Date();
todayDate.setDate(todayDate.getDate() - (todayDate.getDay() - 3));
year = todayDate.getFullYear();
month = todayDate.getMonth();
day = todayDate.getDate();

var event2 = {
  options: {
    timeslotsPerHour: 3,
    timeslotHeight: 30,
    defaultFreeBusy: { free: false }
  },
  events: [
    { 'id': 1, 'start': new Date(year, month, day, 12), 'end': new Date(year, month, day, 13, 00), 'title': 'Lunch with Sarah', userId: [1, 2] },
    { 'id': 2, 'start': new Date(year, month, day, 14), 'end': new Date(year, month, day, 14, 40), 'title': 'Team Meeting', userId: 0 },
    { 'id': 3, 'start': new Date(year, month, day + 1, 18), 'end': new Date(year, month, day + 1, 18, 40), 'title': 'Meet with Joe', userId: 1 },
    { 'id': 4, 'start': new Date(year, month, day - 1, 8), 'end': new Date(year, month, day - 1, 9, 20), 'title': 'Coffee with Alison', userId: 1 },
    { 'id': 5, 'start': new Date(year, month, day + 1, 14), 'end': new Date(year, month, day + 1, 15, 00), 'title': 'Product showcase', userId: 0 }
  ]
};