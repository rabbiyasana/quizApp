window.onload = function () {
    ques_display(0);

}
var questions=[{
	id: 1,
	question: "Pakistan best free learing Platform?",
	answer: "Saylani Mass IT Training",
	option:[
		"LUMS",
		"Comsats",
		"Saylani Mass IT Training",
		"UET"
	]
},
			   {
	id: 2,
	question: "What is the best Programming language to learn in 2020?",
	answer: "JavaScript",
	option:[
		"JavaScript",
		"C++",
		"PHP",
		"Java"
	]
},
			   {
	id: 3,
	question: "What is the biggest problem in the world now?",
	answer: "Corona Virus",
	option:[
		"Anti Virus",
		"Corona Virus",
		"World War",
		"Economy"
	]
},
			   
			  
];

var ques_count = 0;

function next_ques(){
	ques_count++;
	
	console.log(ques_count);
	ques_display(ques_count);
} 

function ques_display(e){
	var ques_dis = document.getElementById("ques");
	ques_dis.innerHTML = `<h4 class="font-weight-bold text-light"> ${questions[e].question}</h4>
            <ol class="list list-group">
            	<li class="option list-group-item my-2">${questions[e].option[0]}</li>
            	<li class="option list-group-item my-2">${questions[e].option[1]}</li>
            	<li class="option list-group-item my-2">${questions[e].option[2]}</li>
            	<li class="option list-group-item my-2">${questions[e].option[3]}</li>
            </ol>

`;
}





