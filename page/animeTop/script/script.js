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








// Скрипт фильтра

let filter = document.querySelector(`#filter`);


filter.addEventListener(`click`, (event)=>{
	if(getComputedStyle(filter.children[2]).display == `none`){
		filter.children[2].style.display = `block`;
	} else if (getComputedStyle(filter.children[2]).display == `block`){
		filter.children[2].style.display = `none`;
	}
})


// Конец скрипта фильтра






// Скрипт переключающий блоки рекламного аниме (адаптивен под любое количество блоков)

// Массив со всеми блоками аниме
let listBlock = document.querySelectorAll(`.list-block__center`);

// Левая кнопка переключения
let leftToggle = document.querySelector(`#left-toggle`);

// Правая кнопка переключения
let rightToggle = document.querySelector(`#right-toggle`);

// Счетчик для цикла который первой елементу установит одну позицию,
// а другим всем позицию -127%
let counterToggle = 0;

// Задаю текущею позицию каждому елементу после загрузки саййта
for(let elem of listBlock){
	elem.style.left = `${(120 * counterToggle) + 3}%`;

	// Если это не первый блок в массиве то их позиция всегда будет -127%
	if(counterToggle == 0){
		counterToggle++;
	}
}

// Счетчик подсчитывающий текущий блок аниме
let nowToggle = 0;



leftToggle.addEventListener(`click`, ()=>{
	// Если количество имеющихся рекламных блоков меньше количества блоков
	// счетчика то мы выполняем текущий скрипт, если же нет то мы
	// анулируем счетчик и делаим елементы в изначальные позиции
	if(nowToggle + 1 < listBlock.length){

		
		// Ссовиваю теккущий блок влево полностю
		listBlock[nowToggle].style.left = `${-120}%`;
		// Регистрирую что нужно поставить новый блокк
		nowToggle++;
		// Устанавливаю текущий блок в видемое положения для пользователя
		listBlock[nowToggle].style.left = `${3}%`;

		// Делаю блок который ссунулся невидимым и устанавливаю в положения 
		// где и все блоки
		listBlock[nowToggle - 1].style.display = `none`;
		listBlock[nowToggle - 1].style.left = `-127%`;

		// После того как убраный блок установиться в нужно положения 
		// делаю его видимым
		setTimeout(()=>{
			listBlock[nowToggle - 1].style.display = `flex`;
		}, 200)



	} else {
		// Делаю все что и выше токо счетчик я анулирую а елемент убранный
		// я потом устанавливаю ориентируясь на последний елемент в массиве блоков
		listBlock[nowToggle].style.display = `none`;
		listBlock[nowToggle].style.left = `-127%`;

		setTimeout(()=>{
			listBlock[listBlock.length - 1].style.display = `flex`;
		}, 200);
		
		nowToggle = 0;
		listBlock[nowToggle].style.left = `${3}%`;


	}
});


rightToggle.addEventListener(`click`, ()=>{
	// Делаю тоже что и делалось в левой кнопке
	if(nowToggle + 1 < listBlock.length){

		

		listBlock[nowToggle].style.left = `${-120}%`;
		nowToggle++;
		listBlock[nowToggle].style.left = `${3}%`;

		listBlock[nowToggle - 1].style.display = `none`;
		listBlock[nowToggle - 1].style.left = `-127%`;

		setTimeout(()=>{
			listBlock[nowToggle - 1].style.display = `flex`;
		}, 200)



	} else {
		listBlock[nowToggle].style.display = `none`;
		listBlock[nowToggle].style.left = `-127%`;

		setTimeout(()=>{
			listBlock[listBlock.length - 1].style.display = `flex`;
		}, 200);
		
		nowToggle = 0;
		listBlock[nowToggle].style.left = `${3}%`;


	}
})

// Конец скрипта переключающего блоки рекламного аниме





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








































