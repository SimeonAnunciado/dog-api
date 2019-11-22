function init(){
	fired_events();
	setTimeout(function(){
		fired_events();
	},5000);
}
init();

function show_alert(msg,type){
	let t = '';
	if (type == 'error') {
		t = 'danger';
	}
	if (type == 'success') {
		t = 'success';
	}
	let div = document.createElement('div');
	div.className = `alert alert-${t}`;
	div.appendChild(document.createTextNode(msg));	

	const parent_row = document.querySelector('.row .col-md-6');
	const form =document.querySelector('#form_id');
	parent_row.insertBefore(div,form);
	setTimeout(()=> document.querySelector('.col-md-6 .alert').remove(),3000);
}


function empty_value(){
	document.querySelector('#breed_option_select').value = '';
	document.querySelector('#breed_count').value = '';
}

function fired_events(){
	document.querySelector('#form_id').addEventListener('submit', (e) =>{
	const breed = document.querySelector('#breed_option_select').value;
	const breed_count = document.querySelector('#breed_count').value;

	if (breed !='' && breed_count !='') {
		dog_api_process(breed,breed_count)
		.then(resp => display_dog_img(resp,breed))
		.catch(err => console.log(err));

	}else{
		show_alert('Please fill All fields','error');
	}

	e.preventDefault();
});
}


async function dog_api_process(breed,breed_count){
	const request = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${breed_count}`);
	const reponse_data = await request.json();
	return reponse_data;
}

function display_dog_img(resp,breed){
	let output = `<div class="text-left alert alert-success">Breed : <strong> ${breed} </strong></div><br>`;

	resp.message.forEach((v)=>{
		output += `	
		<div class="thumbnail">

		<a href="#">
		<img src="${v}" alt="Nature" style="width:100%">
		<div class="caption">
		<a href='https://dog.ceo' target="_blank" class='btn btn-success btn-block '>View More<a>
		</div>
		</a>
		</div>
		`;
	})
	document.getElementById('get_dog').innerHTML = output;
	empty_value(); // empty value
}


selected_option_breed();
function selected_option_breed(){
	const all_breed = ['affenpinscher','african','airedale','akita','appenzeller','basenji','beagle','bluetick','borzoi','bouvier','boxer','brabancon','briard','bostonbulldog','englishbulldog','frenchbulldog','staffordshirebullterrier','cairn','australiancattledog','chihuahua','chow','clumber','cockapoo','bordercollie','coonhound','cardigancorgi','cotondetulear','dachshund','dalmatian','greatdane','scottishdeerhound','dhole','dingo','doberman','norwegianelkhound','entlebucher','eskimo','bichonfrise','germanshepherd','italiangreyhound','groenendael','afghanhound','bassethound','bloodhound','englishhound','ibizanhound','walkerhound','husky','keeshond','kelpie','komondor','kuvasz','labrador','leonberg','lhasa','malamute','malinois','maltese','bullmastiff','englishmastiff','tibetanmastiff','mexicanhairless','mix','bernesemountain','swissmountain','newfoundland','otterhound','papillon','pekinese','pembroke','miniaturepinscher','germanpointer','germanlonghairpointer','pomeranian','miniaturepoodle','standardpoodle','toypoodle','pug','puggle','pyrenees','redbone','chesapeakeretriever','curlyretriever','flatcoatedretriever','goldenretriever','rhodesianridgeback','rottweiler','saluki','samoyed','schipperke','giantschnauzer','miniatureschnauzer','englishsetter','gordonsetter','irishsetter','englishsheepdog','shetlandsheepdog','shiba','shihtzu','blenheimspaniel','brittanyspaniel','cockerspaniel','irishspaniel','japanesespaniel','sussexspaniel','welshspaniel','englishspringer','stbernard','americanterrier','australianterrier','bedlingtonterrier','borderterrier','dandieterrier','foxterrier','irishterrier','kerryblueterrier','lakelandterrier','norfolkterrier','norwichterrier','patterdaleterrier','russellterrier','scottishterrier','sealyhamterrier','silkyterrier','tibetanterrier','toyterrier','westhighlandterrier','wheatenterrier','yorkshireterrier','vizsla','weimaraner','whippet','irishwolfhound',];
	let select = `<select class="form-control" id="breed_option_select"> <option disabled selected value >Select Dog Breed</option>`;
	all_breed.forEach((breed,index)=>{
		select +=`<option value='${breed}'>${breed}</option>`;
	});
	select +='</select>';

	let breed_option = document.querySelector('#breed_option');
	breed_option.innerHTML = select;
}