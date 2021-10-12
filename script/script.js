// Скрипт скрывающий и роздывающий полный список меню слева

// Кнопка отвечающая за открытия диалогового большого меню
let btnReversal = document.querySelector(`.menu__icon-menu`);

// Кнопка закрывающая расркытое модульное оккно
let btnClose = document.querySelector(`.pull-menu__top__icon`);

// Сам блок с левим окном
let openMenu = document.querySelector(`.menu`);

// Сам блок с раскрытым левым окном
let closeMenu = document.querySelector(`.pull-menu`);



	btnReversal.addEventListener(`click`, ()=>{
		openMenu.style.marginLeft = `-100%`;
		closeMenu.style.marginLeft = `0%`;
	});


	btnClose.addEventListener(`click`, ()=>{
		openMenu.style.marginLeft = `0%`;
		closeMenu.style.marginLeft = `-120%`;
	})



// Конец Скрипта скрывающего и раздыгающего полный список меню слева





// Подписка на рассилку от сайта

// Поле в которое вводиться текст
let field = document.querySelector(`#subscribe`);

// Текст указанного email в нашом поле установиться в модульное окно
// подтверждения успешной отправки рассылки
let inputSub = document.querySelector(`.modul-subscribee__email`);

// Само модульное окно подтверждения рассылки
let modulSub = document.querySelector(`.modul-subscribee`);

document.querySelector(`#btn-subsribe`).addEventListener(`click`, ()=>{
	// Регульрное выражения для проверки валидности указанного текста в поле
	let regular = /^[a-z]{4,17}@(gmail|yandex|mail)\.ru/gi;
	// Получаем теккущее значения текстаа в веденном наме поле
	let textValue = field.value;
	// Проверяем валидность указанного нами текста спомощю метода .test()
	let copy = regular.test(textValue);
		// Если указанный текст валиден то в диалоговое окно устанавливаеться наш email
		// а также происходит выдвижения нашего диалогового окна, спустя 3сек диалоговое окно убереться.
		if(copy){
			console.log(`Удачно прошлоо`)
			inputSub.innerHTML = field.value;
			modulSub.style.left = `10%`;

			setTimeout(()=>{
				modulSub.style.left = `-100%`;				
			}, 3000);
		}
	
	
})

// Конец подписки на рассилку от сайта






// Скрипт добавляющий коменты справа в блоке

// Все комментарии в этом массиве храняться
let mesComment = document.querySelectorAll(`.chat__comments`);

// Количество коментарией которые нужно показать сраазу (отсчет от ноля)
let commentCounter = 3;

// Устанавливаем количество видимых комментариев путем перебера массива видиммых комментариев
for(let i = 0; i < commentCounter; i++){
		mesComment[i].style.display = `flex`;
}

document.querySelector(`.button`).addEventListener(`click`, ()=>{
	// Сообщаем переменной что теперь на адин комментарий больше
	commentCounter++;

	// Если количество комментариев в массиве больше или равно количеству заригестрированных
	// видимых комментарий - то запуститься цикл который опять переберет все елементы
	// и сделаит нужное количество видимыми
	if(mesComment.length >= commentCounter){
		for(let i = 0; i < commentCounter; i++){
			mesComment[i].style.display = `flex`;
		}

		// Если количество комментариев равно количеству видимых комментариев то кнопка пропадет
		if(mesComment.length <= commentCounter){
			document.querySelector(`.button`).style.display = `none`;
		}
	} 

	

})	

// Конец скрипта чата справа в блоке






// Рандомный показ аниме при каждой перезагрузки страницы в верхнем блоке
	
	// Массив картинок аниме
	let mesAnim = document.querySelectorAll(`#catalog-anime`);
	// Блок аниме в котором хранятться картинки
	let blockAnim = document.querySelector(`.top-blog__info-image`);
	// Массив картинок после перебора и удаления их циклом в изначальном массиве
	let newMesAnim = [];

		for(let elem of mesAnim){
			newMesAnim.push(elem);
			elem.remove();			
		}

	// Блок с английским названиям аниме
	let endName = document.querySelector(`.top-blog-info__english-name`);

	// Блок с русским названиям аниме
	let rusName = document.querySelector(`.top-blog-info__russian-name`);

	// Блок с описанием аниме
	let description = document.querySelector(`.top-blog-info__description`);
	
	// Обект русских названий аниме
	let objRusName = {
		0: `Токийский Гуль перерождение демона`,
		1: `Бездомный бог`,
		2: `Юрий на льду 2`
	}

	// Обект английских названий аниме
	let objEndName = {
		0: `Tokyo Ghoul`,
		1: `Homeless God`,
		2: `Yuri on Ice 2`
	}

	// Обект описания аниме
	let objDesc = {
		1: `Встреченная им девушка Хиёри и новый напарник-дух Юкине становятся        
		бездомному богу Noragami настоящими друзьями и помогают ему осуществить
	 заветную мечту`,
		0: `В этом мире параллельно с людьми существует раса гулей - созданий,
		 стоящих выше людей в пищевой цепи.`,
		2: `Несколько часов убеждений закончились согласием Кацуки участвовать 
		вместе с ребятами в очередном мировом турнире.`
	}

	// Переменная рандомно выбирающая аниме при каждой перезагрузки или загрузки страницы
	let endAnimRand = Math.floor(Math.random() * 3);


	blockAnim.appendChild(newMesAnim[endAnimRand]);
	endName.innerHTML = objEndName[endAnimRand];
	rusName.innerHTML = objRusName[endAnimRand];
	description.innerHTML = objDesc[endAnimRand];
	

// Конец рандомного показа аниме при каждой перезагрузки страницы в верхнем блкое





// Скрипт скрывающий блоки "Новинки этого сезона"
	
	// Массив с всеми блоками уникальных жанров
	let mesUnique = document.querySelectorAll(`.new-season__mini-block`);

	// Число выдемых блоков
	let numUnique = 4;

	// Цикл перебырающий массив и устанавлюющий число видимых блоков
	for(let elem = 0; elem < numUnique; elem++){
		mesUnique[elem].style.display = `block`;
	}

	document.querySelector(`#unique-genres`).addEventListener(`click`, ()=>{
		numUnique++;

		for(let elem = 0; elem < numUnique; elem++){
			mesUnique[elem].style.display = `block`;
		}

		if(numUnique == 6){
			document.querySelector(`#unique-genres`).style.display = `none`;
		}

	})

// Конец скрипта скрывающего блоки "Новинки этого сезона"











// Скрипт разворачивающий видео при вкключении фоновой музыки
	
	// Диалоговое окно с выборами ответа
	let modulChoice = document.querySelector(`.accept-music`);

	// Блок в который нужно добавить наше видео
	let videoContainer = document.querySelector(`.main-block__video`);

	// Кнопка включения видео
	let musicOn = document.querySelector(`.accept-music__info__bottom-button__button-accept`);

	// Кнопка отклоненияя о включении видео
	let musicOff = document.querySelector(`.accept-music__info__bottom-button__button-close`);
	
	// При нажатии на кнопку отказа о включении видео диалоговое окно с выбором уедет
	// с поля зрения в лево
	musicOff.addEventListener(`click`, ()=>{
		modulChoice.style.right = `130%`;
	});


	// При нажатии на кнопку одобряющею включения диалоговое окно также улетит влево,
	// но добавиться код самого видео в наш контейнер, и установит высоту контейнера.
	musicOn.addEventListener(`click`, ()=>{
		modulChoice.style.right = `130%`;
		videoContainer.innerHTML = `<video src="MMV - KEAN DYSSO - Plain Jane.mp4" muted>`;
		videoContainer.style.height = `39vw`;


		// Через 400млс (через 300 млс раскроеться блок с видео) включиться видео а также
		// включеться звук на нем.
		setTimeout(()=>{
			document.querySelector(`video`).play();
			document.querySelector(`video`).muted = false;
		}, 400);



		

	})

// Конец скрипта разворачивающего видео при включении фоновой музыки




















// Модульное окно авторизации

// Диалоговое оккно с авторизацией на сайте
let auth = document.querySelector(`#auth`);
// Диалоговое окно с регистрацией на сайте
let reg = document.querySelector(`#register`);

// Кнопка в диалоговом окне авторизации для вызова окна регистрации
let nextPage = document.querySelector(`#last-page`);
// Кнопка в диалоговом окне регистрации для вызова окна авторизации
let login = document.querySelector(`#log-in`);


// При нажатии на кнопку скривает оккно авторизации и открываеться окно регистрации
nextPage.addEventListener(`click`, (event)=>{
	auth.style.display = `none`;
	reg.style.display = `flex`;

})


// При нажатии на кнопку скривает окно регистрации и открывает окно авторизации
login.addEventListener(`click`, (event)=>{
	reg.style.display = `none`;
	auth.style.display = `flex`;	
})


// При нажатии на кнопку на странице откриваеться диалоговое окно авторизации
document.querySelector(`.menu__login`).addEventListener(`click`, (event)=>{
	auth.style.display = `flex`;

})

// При клике на окно авторизации (окна поверх авторизации не реагируют) оно скриваеться
auth.addEventListener(`click`, (event)=>{
	if(event.target == auth){
		auth.style.display = `none`;
	}
})

// При клике на окно регистрации (окна поверх регистрации не реагируют) оно скриваеться
reg.addEventListener(`click`, (event)=>{
	if(event.target == reg){
		reg.style.display = `none`;
	}
})




// Конец модульного окна авторизации





// Кнопка для раздвыгающегося адаптивного меню на телефонах

document.querySelector(`#icon-menu`).addEventListener(`click`, ()=>{ 

	if(getComputedStyle(document.querySelector(`#icon-menu`)).color == `rgb(255, 255, 255)`){ 
		document.querySelector(`.menu`).style.left = `0%`;
		document.querySelector(`#icon-menu`).style.color = `#8053E1`;
		document.querySelector(`#icon-menu`).style.backgroundColor = `white`;
	} else {
		document.querySelector(`.menu`).style.left = `-100%`;
		document.querySelector(`#icon-menu`).style.color = `white`;
		document.querySelector(`#icon-menu`).style.backgroundColor = `#8053E1`;
	}
})

// Конец кнопки для раздвыгающегося адаптивного меню на телефонах















