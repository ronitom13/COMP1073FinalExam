//Javascript document
let url = 'https://ronitom13.github.io/COMP1073FinalExam/Q3/cats.json';

let catsButton =  document.getElementById('btn1');
catsButton.addEventListener('click', function(){

fetch(url).then(function(response){
    return response.json()})
    
		.then(function cats(jsonObj){
			
			let cats = jsonObj.cats;
			
			for (let i = 0; i < cats.length; i++) {
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				let list = document.createElement('ul');

                let section = document.querySelector('section');

                img.setAttribute('src', 'https://github.com/ronitom13/COMP1073FinalExam/tree/master/Q3/assets' + cats[i].image);
                img.setAttribute('alt', cats[i].name);
				h2.textContent = cats[i].name;
                p1.textContent = 'Species: ' +  cats[i].species;
				p2.textContent = 'Age: ' + cats[i].age;
                let favFoods = cats[i].favFoods;
                
				for (let j = 0; j < favFoods.length; j++) {
					let listItem = document.createElement('li');
                    listItem.textContent = favFoods[j];
					list.appendChild(listItem);
				}
				
				article.appendChild(img);
				article.appendChild(h2);
                article.appendChild(p1);
				article.appendChild(p2);
				article.appendChild(list);
				section.appendChild(article);
				}
			});
        });
