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

// Malaysia holidays data
const malaysiaHolidays = {
    "01-01": { name: "New Year's Day", desc: "Public holiday celebrating the new year" },
    "01-28": { name: "Chinese New Year", desc: "Celebration of the Lunar New Year" },
    "01-29": { name: "Chinese New Year Holiday", desc: "Second day of Chinese New Year celebrations" },
    "02-01": { name: "Federal Territory Day", desc: "Celebrated in Kuala Lumpur, Labuan and Putrajaya" },
    "03-23": { name: "Hari Raya Puasa", desc: "End of Ramadan" },
    "03-24": { name: "Hari Raya Puasa Holiday", desc: "Additional day for Hari Raya Puasa" },
    "04-14": { name: "Good Friday", desc: "Christian holiday commemorating the crucifixion of Jesus" },
    "05-01": { name: "Labour Day", desc: "Celebrating workers and their contributions" },
    "05-22": { name: "Wesak Day", desc: "Buddhist celebration of Buddha's birth, enlightenment and death" },
    "06-07": { name: "King's Birthday", desc: "Birthday of the Yang di-Pertuan Agong" },
    "07-20": { name: "Hari Raya Haji", desc: "Islamic festival of sacrifice" },
    "08-31": { name: "National Day", desc: "Malaysia's Independence Day celebration" },
    "09-16": { name: "Malaysia Day", desc: "Commemorates the establishment of the Malaysian federation" },
    "10-24": { name: "Deepavali", desc: "Hindu festival of lights" },
    "11-06": { name: "Deepavali Holiday", desc: "Additional day for Deepavali celebrations" },
    "12-25": { name: "Christmas Day", desc: "Christian holiday celebrating the birth of Jesus" }
};

// Chinese zodiac signs
const zodiacSigns = [
    "Rat", "Ox", "Tiger", "Rabbit", 
    "Dragon", "Snake", "Horse", "Goat", 
    "Monkey", "Rooster", "Dog", "Pig"
];

// Chinese months
const chineseMonths = [
    "Zhēngyuè", "Èryuè", "Sānyuè", "Sìyuè",
    "Wǔyuè", "Liùyuè", "Qīyuè", "Bāyuè",
    "Jiǔyuè", "Shíyuè", "Shíyīyuè", "Làyuè"
];

// Islamic months
const islamicMonths = [
    "Muḥarram", "Ṣafar", "Rabīʿ al-awwal", "Rabīʿ al-thānī",
    "Jumādā al-ūlā", "Jumādā al-ākhirah", "Rajab", "Shaʿbān",
    "Ramaḍān", "Shawwāl", "Dhū al-Qaʿdah", "Dhū al-Ḥijjah"
];

// Cache for Islamic dates
const islamicDateCache = {};

// Initialize the calendar
document.addEventListener('DOMContentLoaded', initCalendar);

async function initCalendar() {
    setupEventListeners();
    updateYearDisplay();
    await generateCalendar();
    generateHolidayList();
    await generateYearlyCalendar();
    checkTodayHoliday();
}

function setupEventListeners() {
    elements.monthlyViewBtn.addEventListener('click', () => setView('monthly'));
    elements.yearlyViewBtn.addEventListener('click', () => setView('yearly'));
    elements.prevYearBtn.addEventListener('click', () => changeYear(-1));
    elements.nextYearBtn.addEventListener('click', () => changeYear(1));
    elements.prevMonthBtn.addEventListener('click', () => changeMonth(-1));
    elements.nextMonthBtn.addEventListener('click', () => changeMonth(1));
    elements.closePopupBtns.forEach(btn => btn.addEventListener('click', closeHolidayPopup));
}

// ... rest of your JavaScript functions (setView, changeYear, etc.)
// Keep all the existing functions but update DOM references to use elements object
// For example: document.getElementById('currentYear') becomes elements.currentYearDisplay
