var $name = ["Yaakov", "John", "Jame", "Jay", "Hover", "Name"];
for($i = 0; $i < $name.length;$i++)
{
	if($name[$i][[0]] == "J")
	{
		byeSpeaker.speak($name[$i]);
	}
	else
	helloSpeaker.speak($name[$i]);
	
}


// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
});


