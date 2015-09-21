// var Quote = function(text, author){
// 	this.text = text;
// 	this.author = author;
// 	if(this.text === undefined){
// 		this.text = "text"
// 	}
// 	if(this.author === undefined){
// 		this.author = "author"
// 	}
// }


// ROBS ANSWER

var Quote = function(quoteText, quoteAuthor){
	this.text = quoteText || "This is so empty..";
	this.author = quoteAuthor || "Anonymous";
}

var quote1 = new Quote("here's some text!", "Author1")
console.log(quote1)

var quote2 = new Quote("Some more text!", "Author2")
console.log(quote2)
 
var quote3 = new Quote()
console.log(quote3)

// Quote.prototype.numCount = function(){
// 	var textArray = this.text.split(" ");
// 	console.log(textArray.length)
// }

// Quote.prototype.upperCase = function(){
// 	console.log(this.text.toUpperCase() + "!!!")
// }

// ROBS ANSWER
Quote.prototype.countWords = function(){
	console.log( this.text.split(" ").length)
}

Quote.prototype.yell = function (){
	console.log(this.text.toUpperCase()+ "!!!")
}