
module.exports.getDate=function(){
	const date= new Date();
	let options = {
		weekday:"long",
		month:"long",
		day:"numeric",
		year:"numeric"
	}
	return date.toLocaleDateString("en-US",options);
}
