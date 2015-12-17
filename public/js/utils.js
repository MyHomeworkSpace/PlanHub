window.utils = {};

window.utils.b64EncodeUnicode = function(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
};

window.utils.getLongNameForFeature = function(feature) {
	switch (feature) {
		case "overview":
			return "Overview";

		case "planner":
			return "Planner";

		case "hwView":
			return "Homework View";

		case "myDay":
			return "My Day";

		case "admin":
			return "Administrative panel";

		case "admin-feedback":
			return "Feedback";

		case "admin-stats":
			return "Statistics";

		case "admin-about":
			return "About server";
	}
};

window.utils.getMonthName = function(month) {
	switch (month) {
		case 0:
			return "January";
		case 1:
			return "February";
		case 2:
			return "March";
		case 3:
			return "April";
		case 4:
			return "May";
		case 5:
			return "June";
		case 6:
			return "July";
		case 7:
			return "August";
		case 8:
			return "September";
		case 9:
			return "October";
		case 10:
			return "November";
		case 11:
			return "December";
		default:
			return "Unknown";
	}
};

window.utils.getDayOfWeek = function(dow) {
	switch (dow) {
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
		default:
			return "Unknown";
	}
};

window.utils.formatDate_api = function(dateObj) {
	var month = (dateObj.getMonth() + 1).toString();
	var date = dateObj.getDate().toString();
	if (month.length == 1) {
		month = "0" + month;
	}
	if (date.length == 1) {
		date = "0" + date;
	}
	return dateObj.getFullYear() + "-" + month + "-" + date;
};

window.utils.formatDate_pretty = function(dateObj) {
	return (dateObj.getMonth() + 1) + "/" + dateObj.getDate();
};

window.utils.formatDate_english = function(date) {
	return window.utils.getDayOfWeek(date.getDay()) + ", " + window.utils.getMonthName(date.getMonth()) + " " + date.getDate() + ", " + (date.getYear() + 1900);
};

window.utils.getPrefix = function(text) {
	return text.split(' ')[0].trim().substr(0, 12); // limit to 12 chars
};

window.utils.getPrefixes = function() {
	return [
		{
			color: "cal_hw",
			words: ["hw", "read", "reading"],
			tabSystem: true
		},
		{
			color: "cal_project",
			words: ["project"],
			tabSystem: true
		},
		{
			color: "cal_paper",
			words: ["report", "essay", "paper"],
			tabSystem: true
		},
		{
			color: "cal_quiz",
			words: ["quiz"],
			tabSystem: true
		},
		{
			color: "cal_quiz",
			words: ["popquiz"],
			tabSystem: false
		},
		{
			color: "cal_test",
			words: ["test", "final", "exam", "midterm"],
			tabSystem: true
		},
		{
			color: "cal_ica",
			words: ["ica"],
			tabSystem: true
		},
		{
			color: "cal_lab",
			words: ["lab", "study", "memorize"],
			tabSystem: true
		},
		{
			color: "cal_docid",
			words: ["docid"],
			tabSystem: true
		},
		{
			color: "cal_hex",
			words: ["trojun", "hex"],
			tabSystem: false
		},
		{
			color: "cal_no_hw",
			words: ["nohw", "none"],
			tabSystem: true
		}
	];
};

window.utils.getPrefixClass = function(prefix) {
	var chkPrefix = prefix.toLowerCase();
	var prefixes = window.utils.getPrefixes();
	for (var prefixIndex in prefixes) {
		var prefix = prefixes[prefixIndex];
		if (prefix.indexOf(chkPrefix) > -1) {
			return prefix.color;
		}
	}
	return "cal_no_prefix";
};
