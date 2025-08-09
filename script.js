// Current date tracking
const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentView = 'monthly';

// DOM Elements
const elements = {
    monthlyViewBtn: document.getElementById('monthlyViewBtn'),
    yearlyViewBtn: document.getElementById('yearlyViewBtn'),
    currentYearDisplay: document.getElementById('currentYear'),
    prevYearBtn: document.getElementById('prevYearBtn'),
    nextYearBtn: document.getElementById('nextYearBtn'),
    currentMonthDisplay: document.getElementById('currentMonth'),
    prevMonthBtn: document.getElementById('prevMonthBtn'),
    nextMonthBtn: document.getElementById('nextMonthBtn'),
    monthlyView: document.getElementById('monthlyView'),
    yearlyView: document.getElementById('yearlyView'),
    monthControls: document.getElementById('monthControls'),
    calendar: document.getElementById('calendar'),
    holidayMonthYear: document.getElementById('holidayMonthYear'),
    holidayYear: document.getElementById('holidayYear'),
    holidayList: document.getElementById('holidayList'),
    yearlyHolidayList: document.getElementById('yearlyHolidayList'),
    holidayPopup: document.getElementById('holidayPopup'),
    popupHolidayName: document.getElementById('popupHolidayName'),
    popupHolidayDate: document.getElementById('popupHolidayDate'),
    popupHolidayDesc: document.getElementById('popupHolidayDesc'),
    closePopupBtns: document.querySelectorAll('#closePopupBtn, #closePopupBtn2')
};

// Event Listeners
elements.monthlyViewBtn.addEventListener('click', () => setView('monthly'));
elements.yearlyViewBtn.addEventListener('click', () => setView('yearly'));
elements.prevYearBtn.addEventListener('click', () => changeYear(-1));
elements.nextYearBtn.addEventListener('click', () => changeYear(1));
elements.prevMonthBtn.addEventListener('click', () => changeMonth(-1));
elements.nextMonthBtn.addEventListener('click', () => changeMonth(1));
elements.closePopupBtns.forEach(btn => btn.addEventListener('click', closeHolidayPopup));

// Malaysia holidays data (same as before)
const malaysiaHolidays = {
    "01-01": { name: "New Year's Day", desc: "Public holiday celebrating the new year" },
    // ... rest of your holiday data ...
};

// Chinese zodiac signs and months (same as before)
const zodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
const chineseMonths = ["Zhēngyuè", "Èryuè", "Sānyuè", "Sìyuè", "Wǔyuè", "Liùyuè", "Qīyuè", "Bāyuè", "Jiǔyuè", "Shíyuè", "Shíyīyuè", "Làyuè"];
const islamicMonths = ["Muḥarram", "Ṣafar", "Rabīʿ al-awwal", "Rabīʿ al-thānī", "Jumādā al-ūlā", "Jumādā al-ākhirah", "Rajab", "Shaʿbān", "Ramaḍān", "Shawwāl", "Dhū al-Qaʿdah", "Dhū al-Ḥijjah"];

// Cache for Islamic dates
const islamicDateCache = {};

// Initialize the calendar
document.addEventListener('DOMContentLoaded', initCalendar);

async function initCalendar() {
    updateYearDisplay();
    await generateCalendar();
    generateHolidayList();
    await generateYearlyCalendar();
    checkTodayHoliday();
}

// ... rest of your JavaScript functions (setView, changeYear, changeMonth, etc.)
// Copy all the remaining functions from your original script
// Just change the DOM references to use the elements object
// For example:
// document.getElementById('currentYear') becomes elements.currentYearDisplay
