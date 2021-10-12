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

















// Раскрывающийся список при выборе варианта



// Два раскрывающихся списка
let videoPlayer = document.querySelectorAll(`#player`);






	

// Цикл перебырающий эти два плеера
for(let elem of videoPlayer){

	// При клике на адин из плееров выполняються определенние дейтсвия
	// с его дочерними елементами, тем самым не нужно брать каждый елемент из дерева
	// DOM
	elem.addEventListener(`click`, ()=>{

		if(getComputedStyle(elem.children[1]).display == `none`){
			elem.children[1].style.display = `block`;
			elem.children[2].style.transform = `rotate(86deg)`;
		} else if (getComputedStyle(elem.children[1]).display == `block`){
			elem.children[1].style.display = `none`;
			elem.children[2].style.transform = `rotate(-91deg)`;
		}

	})


	// Также при клике на любой елемент кроми виделеного его дочерние елементы
	// скрываються и изменяються
	window.addEventListener(`click`, (event)=>{

		if(event.target != elem.children[0]){
			elem.children[1].style.display = `none`;
			elem.children[2].style.transform = `rotate(-91deg)`;
		}


	});

}


// Конец раскрывающегося списка при выборе варианта









// Модульное окно на плеере (мне уже есть 18)

	document.querySelector(`.video-player__bottom__warnings-position`).addEventListener(`click`, ()=>{
		document.querySelector(`.video-player__bottom__warnings-position`).style.display = `none`;
	})



// Конец модульного окна на плеере (мне уже есть 18)






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
