UI.registerHelper('textSlicer', function (text, type) {
	var MAX_TEXT_LENGT_CHARS = 150;

	if (type == 'text') {
		var MAX_TEXT_LENGT_CHARS = 150;
	}

	if(type == 'title') {
		MAX_TEXT_LENGT_CHARS = 35;
	}

	if(text.length < MAX_TEXT_LENGT_CHARS) {
		return text;
	}

	text = text.slice(0, MAX_TEXT_LENGT_CHARS);
	text = text.slice(0, text.lastIndexOf(' '));
	return text + '…';
});

UI.registerHelper('formatDate', function (date) {
	var TODAY = new Date();
	if(TODAY.getDate() === date.getDate() && TODAY.getMonth() === date.getMonth() && TODAY.getFullYear() === date.getFullYear())
		return 'Today';

	var day = date.getDate(), 
	month = date.getMonth() + 1, 
	year = date.getFullYear();

	if(day < 10)
		day = '0' + day;
	if(month < 10)
		month = '0' + month;
	
	var formattedDate;
	formattedDate = day + '.' + month + '.' + year;
	return formattedDate;
});
