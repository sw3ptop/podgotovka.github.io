// Все вопросы по темам (ключи должны совпадать с именами HTML-файлов БЕЗ "1")
const questionsByTopic = {
   
    gymnosperms: [ //голосеменные
        {   
            type: "text",
            question: "Каким номером на рисунке обозначена структура растения, в которой находятся гомологи тычинок?",
            image: "/фото/гс.jpg",
            correct: "3"
        },
        {
            type: "single",
            question: "Какое голосеменное растение является реликтом мезозойской эры?" ,
            options: { a: "Сосна обыкновенная", b: "Можжевельник казацкий", c: "Гинкго двулопастный", d:"Ель сибирская" },
            correct: "c"
        },
        {
            type: "single",
            question: "Какой набор хромосом имеет эндосперм семени голосеменных?" ,
            options: { a: "Гаплоидный (n)", b: "Диплоидный (2n)", c: "Триплоидный (3n)", d:"Тетраплоидный (4n)" },
            correct: "a"
        },
        {
            type: "single",
            question: "Почему хвойные растения сохраняют иголки зимой?" ,
            options: { a: "Иголки содержат антифризные вещества", b: "Малая площадь листа уменьшает испарение воды", c: "Восковая кутикула на иголках отражает снег", d:"Иголки накапливают питательные вещества" },
            correct: "b"
        },
        {
            type: "single",
            question: "Какое основное эволюционное преимущество голосеменных растений по сравнению с папоротникообразными?" ,
            options: { a: "Независимость полового размножения от воды", b: "Наличие цветков и плодов", c: "Способность к вегетативному размножению", d:"Отсутствие проводящих тканей" },
            correct: "a"
        }
    ],
    photosynthesis: [//фотосинтез
        {   
            type: "single",
            question: "Где происходит фотосинтез?" ,
            options: { a: "В корнях", b: "В листьях", c: "В стеблях" },
            correct: "b"
        },
        {   
            type: "single",
            question: "При каком условии прекратится выделение O₂ в процессе фотосинтеза, но продолжится синтез АТФ?" ,
            options: { a: "Отсутствие CO₂", b: "Отсутствие воды", c: "Низкая интенсивность света", d: "Высокая температура" },
            correct: "a"
        },
        {   
            type: "single",
            question: "Какой пигмент НЕ участвует непосредственно в световой фазе фотосинтеза?" ,
            options: { a: "Хлорофилл a", b: "Хлорофилл b", c: "Каротиноиды", d: "Феофитин" },
            correct: "c"
        },
        {
            type: "single",
            question: "Что такое фотолиз воды?" ,
            options: { a: "Распад молекул воды на ионы под действием тепла", b: "Поглощение воды корнями растения", c: "Расщепление воды в хлоропластах под действием квантов света", d: "Испарение воды через устьица листьев" },
            correct: "c"
        },
        {
            type: "text",
            question: "Каким номером на рисунке обозначена фаза фотосинтеза, в ходе которой происходит запасание протонов с помощью специального переносчика?",
            image: "/фото/фаза.jpg",
            correct: "1"
        }
    ],
    botany_kingdom: [//царства растений
        {   
            type: "single",
            question: "Какая группа растений НЕ относится к высшим споровым?",
            options: { a: "Мохообразные", b: "Плауновидные", c: "Папоротникообразные", d: "Саговниковые" },
            correct: "d"
        },
        {
            type: "single",
            question: "Какие органоиды растительной клетки содержат собственную ДНК?",
            options: { a: "Вакуоли и клеточная стенка", b: "Митохондрии и хлоропласты", c: "Лейкопласты и рибосомы", d: "Аппарат Гольджи и ЭПС" },
            correct: "b"
        },
        {
            type: "multiple",
            question: "Выберите из приведенного ниже списка три признака, которые присущи растениям.",
            options: { a: "Ограниченный рост", b: "Размножение только спорами", c: "Смена гаплоидной и диплоидной фаз развития", d: "Активный способ передвижения",
                e: "Наличие метаморфоза в онтогенезе", f: "Автотрофный способ питания"},
            correct: ["c","e","f"]
        },
        {
            type: "text",
            question: "Укажите цифру, под которой обозначена митохондрия.",
            image: "/фото/раст.png",
            correct: "12"
        },
        {
            type: "multiple",
            question: "Укажите, что характерно для растительной клетки",
            options: { a: "Имеются пластиды", b: "Есть лизосомы", c: "Запасное вещество - гликоген", d: "Запасное вещество - крахмал",
                e: "Имеется клеточный центр, образованный двумя центриолями", f: "Содержатся крупные вакуоли, заполненные клеточным соком"},
            correct: ["a","d","f"]
        }
    ],
    unicellular_algae: [//одноклеточные водоросли
        {
            type: "single",
            question: "Почему у красных водорослей (багрянок) фотосинтез возможен на глубине более 30 метров, а у зелёных — только до 12 метров?",
            options: { a: "Из-за отсутствия хлорофилла", b: "Благодаря фикобилинам, поглощающим синий свет", c: "Из-за меньшего размера клеток", d: "Потому что они не используют воду для фотосинтеза" },
            correct: "b"
        },
        {
            type: "multiple",
            question: "Какие из перечисленных особенностей характерны для хламидомонады?",
            options: { a: "Наличие двух жгутиков для передвижения", b: "Гаплоидный набор хромосом в вегетативной клетке", c: "Способность к конъюгации (как у спирогиры)", d: "Наличие светочувствительного глазка (стигмы)", e: "Образование зигоспоры при половом размножении" },
            correct: ["a","b","d","e"]
        },
        {
            type: "multiple",
            question: "Для низших растений характерны следующие признаки",
            options: { a: "Имеют вегетативные и генеративные органы", b: "Обычно живут в водной среде", c: "Имеют разнообразные ткани", d: "Тело представляет собой таллом, или слоевище", e: "Имеют цветки и плоды", f: "Включают одноклеточные организмы" },
            correct: ["b","d","f"]
        },
        {
            type: "multiple",
            question: "Одноклеточная зелёная водоросль хламидомонада как представитель царства Растения, имеет",
            options: { a: "Клеточную стенку, содержащую хитин", b: "Клеточную стенку, содержащую клетчатку", c: "Хроматофор, содержащий хлорофилл", d: "Ядерное содержимое, находящееся в цитоплазме без оболочки", e: "Запасное вещество крахмал", f: "Кольцевую хромосому" },
            correct: ["a","d","f"]
        },
        {
            type: "text",
            question: "Под какой цифрой указан глазок у хламидомонады",
            image: "/фото/555.jpg",
            correct: "2"
        }
        

        
    ],
    angiosperms: [ //покрытосеменные
        {
            type: "multiple",
            question: "Какой цифрой на рисунке обозначено растение, древесина которого состоит в основном из трахеид?",
            image: "/фото/тест111.jpg",
            options: { a: "1", b: "2", c: "3" },
            correct: ["c","b"]
        },
        {
            type: "text",
            question: "Каким номером на рисунке обозначена яйцеклетка?",
            image: "/фото/яйце.jpg",
            correct: "3"
        },
        {
            type: "multiple",
            question: "Какие структуры образуются в результате двойного оплодотворения у покрытосеменных?",
            options: { a: "Диплоидная зигота (2n)", b: "Триплоидный эндосперм (3n)", c: "Гаплоидный спорофит (n)", d: "Гаплоидная яйцеклетка (n)" },
            correct: ["a","b"]
        },
        {
            type: "single",
            question: "Какие части цветка участвуют в образовании плода?",
            options: {a: "Чашелистики", b: "Лепестки",c: "Завязь пестика", d: "Тычинки"},
            correct: "c"
        },
        {
            type: "multiple",
            question: "Какие из перечисленных приспособлений помогают покрытосеменным распространять семена с помощью животных?",
            options: {a: "Сочные плоды (ягоды, яблоки)", b: "Крылатки (как у клёна)",c: "Парашютики (как у одуванчика)", d: "Крючки и шипы (лопух, репейник)"},
            correct: ["a","d"]  
        }

    ],
    lichens: [ //лишайники
        {
            type: "single",
            question: "Какие организмы образуют симбиоз в лишайнике?",
            options: { a: "Гриб + бактерия", b: "Гриб + водоросль (или цианобактерия)", c: "Водоросль + мох", d: "Гриб + корень растения" },
            correct: "b"
        },
        {
            type: "single",
            question: "Какой тип лишайников представлен на изображении?",
            image: "/фото/куст.jpeg",
            options: { a: "Накипные", b: "Листоватые", c: "Кустистые", d: "Пластинчатые" },
            correct: "c"
        },
        {
            type: "single",
            question: "Какое вещество в лишайнике «ягель» делает его ценным кормом для оленей зимой?",
            options: { a: "Глюкоза", b: "Витамин С", c: "Белки", d: "Жиры" },
            correct: "b"
        },
        {
            type: "single",
            question: "Почему лишайники называют «пионерами» растительного покрова?",
            options: { a: "Они растут быстрее всех других растений и быстро захватывают территорию.", b: "Они выделяют токсины, которые убивают конкурентов, освобождая место для себя.", c: "Лишайники первыми поселяются в самых бесплодных местах.", d: "Они могут жить только в местах, где уже есть почва, созданная другими организмами." },
            correct: "c"
        },
        {
            type: "multiple",
            question: "Выберите из приведенного ниже списка три признака, которые характеризуют лишайники.",
            options: { a: "Рост медленный", b: "Только бесполое размножение", c: "Фаготрофный способ питания", d: "Комплексные симбиотические организмы", e:"Влагу впитывают всей поверхностью тела",f: "Одноклеточные эукариотические организмы" },
            correct: ["a","d","e"]
        }

    ],
    spore_plants: [ //споровым растениям
        {   
            type: "multiple",
            question: "Чем споровые растения принципиально отличаются от водорослей?",
            options: { a: "Наличием цветков и семян", b: "Приспособленностью к жизни на суше", c: "Способностью к фотосинтезу", d: "Отсутствием клеточной стенки",e: "Наличием ткани" },
            correct: ["b", "e"]
        },
        {   
            type: "single",
            question: "Какое поколение в жизненном цикле споровых растений является диплоидным?",
            options: { a: "Гаметофит", b: "Спорофит", c: "Зигота", d: "Спора"},
            correct: "b"
        },
        {   
            type: "single",
            question: "Какой орган у папоротников отвечает за образование спор?",
            options: { a: "Семязачаток", b: "Цветок", c: "Лист (вайя) со спорангиями", d: "Корень"},
            correct: "с"
        },
        {   
            type: "text",
            question: "Выберите три верных ответа из шести и запишите цифры, под которыми они указаны. Для изображённого на рисунке растения характерны",
            image: "/фото/зигота.jpg",
            correct: "146"
        },
        {
            type: "text",
            question: "Проанализируйте таблицу «Споровые растения». Заполните пустые ячейки таблицы, используя термины и понятия, приведённые в списке. Для каждойячейки, обозначенной буквой, выберите соответствующий термин или соответствующее понятие из предложенного списка.",
            images: ["/фото/вопрос.png", "/фото/ответы.png"],
            correct: "146"
        }

    ],
    clubmosses: [//плауны
        {
            type: "single",
            question: "Какая проводящая ткань характерна для плаунов?",
            options: { a: "Сосуды", b: "Трахеиды", c: "Ситовидные трубки", d: "Лубяные волокна" },
            correct: "b" 
        },
        {
            type: "single",
            question: "Какое поколение преобладает в жизненном цикле плаунов?",
            options: { a: "Гаметофит", b: "Спорангий", c: "Спорофит", d: "Зигота" },
            correct: "c"  
        },
        {
            type: "multiple",
            question: "Почему для полового размножения плаунам необходима вода?",
            options: { a: "Сперматозоиды подвижны и требуют воды для движения", b: "Вода нужна для фотосинтеза заростка", c: "Оплодотворение происходит в водной среде", d: "Без воды споры не созревают" },
            correct: ["a","c"]
        },
        {
            type: "single",
            question: "Где у плаунов образуются споры?",
            options: { a: "В корнях", b: "На нижней стороне листьев", c: "В спороносных колосках на верхушках побегов", d: "В специальных подземных клубнях" },
            correct: "c" 
        },
        {
            type: "multiple",
            question: "Какие из перечисленных признаков помогают плаунам выживать в тенистых лесах?",
            options: { a: "Стелющиеся побеги с дихотомическим ветвлением", b: "Мелкие листья с одной жилкой", c: "Быстрый рост и однолетний жизненный цикл", d: "Способность к вегетативному размножению" },
            correct: ["a","b","d"]
        },
        {
            type: "single",
            question: "Какое значение в жизненном цикле плаунов имеет заросток (гаметофит)",
            options: { a: "На нём образуются половые клетки (гаметы)", b: "Это основная фотосинтезирующая часть растения", c: "Он выполняет функцию корневой системы", d: "В нём созревают споры" },
            correct: "a" 
        }
    ],
    infloreascences: [//по соцветиям
        {
            type: "single",
            question: "Какое соцветие изображено на рисунке?",
            image: "/фото/щиток.jpg",
            options: { a: "Колос", b: "Щиток", c: "Кисть",d:"Зонтик" },
            correct: "b"
        },
        {
            type: "single",
            question: "Какое из перечисленных соцветий является сложным?",
            options: { a: "Кисть", b: "Зонтик", c: "Метелка",d:"Колос" },
            correct: "c"
        },
        {
            type: "multiple",
            question: "Какие признаки характерны для соцветий ветроопыляемых растений",
            options: { a: "Мелкие невзрачные цветки", b: "Длинные свисающие тычинки", c: "Крупные яркие лепестки",d:"Отсутствие запаха" },
            correct: ["a","b","d"]
        },
        {
            type: "single",
            question: "У подсолнечника корзинка окружена зелёными листочками обёртки. К какому типу относится это соцветие?",
            options: { a: "Головка", b: "Корзинка", c: "Зонтик",d:"Початок" },
            correct: "b"
        },
        {
            type: "single",
            question: "Какое соцветие характерно для растения, у которого главная ось укорочена, а цветоножки всех цветков имеют одинаковую длину, благодаря чему цветки располагаются в одной плоскости?",
            options: { a: "Кисть", b: "Колос", c: "Щиток",d:"Метелка" },
            correct: "с"
        }

    ],
    leaf_fall: [//по листопаду
        {
            type: "single",
            question: "Какой фактор является основным сигналом к началу листопада у растений?",
            options: { a: "Понижение температуры воздуха", b: "Уменьшение длины светового дня", c: "Обильные осенние дожди",d:"Первые заморозки" },
            correct: "b"
        },
        {
            type: "single",
            question: "Какое вещество разрушается в листьях перед листопадом, вызывая изменение их окраски?",
            options: { a: "Ксилема", b: "Хлорофилл", c: "Целлюлоза",d:"Лигнин" },
            correct: "b"
        },
        {
            type: "multiple",
            question: "Какие преимущества даёт листопад растениям?",
            options: { a: "Снижение испарения воды зимо", b: "Удаление накопленных вредных веществ", c: "Увеличение фотосинтеза осенью",d:"Предотвращение поломки ветвей под снегом" },
            correct: ["a","b","d"] 
        },
        {
            type: "single",
            question: "Где образуется отделительный слой, обеспечивающий опадание листа?",
            options: { a: "В центре листовой пластинки", b: "У основания черешка", c: "В проводящих пучках",d:"В месте прикрепления черешка к побегу" },
            correct: "d"
        },
        {
            type: "single",
            question: "Какие пигменты придают листьям красные и пурпурные оттенки осенью?",
            options: { a: "Каротиноиды", b: "Антоцианы", c: "Фикобилины",d:"Меланин" },
            correct: "b"
        },
        {
            type: "text",
            question: "Укажите правильную последовательность этапов листопада: 1. Накопление вредных веществ в листьях 2.Разрушение хлорофилла 3.Образование отделительного слоя 4.Изменение окраски листьев 5.Опадение листьев ",
            correct: "12435"
        }
    ],
    plant_tissues: [//по тканям
        {
            type: "single",
            question: "Какая особенность строения эпидермиса листьев способствует уменьшению испарения воды?",
            options: { a: "Наличие хлоропластов", b: "Присутствие кутикулы", c: "Развитая система межклетников",d:"Тонкие клеточные стенки" },
            correct: "b"
        },
        {
            type: "single",
            question: "Где расположена вторичная меристема у древесных растений?",
            options: { a: "В кончике корня", b: "В листовых пластинках", c: "В сердцевине стебля",d:"Между ксилемой и флоэмой (камбий)" },
            correct: "d"
        },
        {
            type: "single",
            question: "Какие клетки обеспечивают восходящий ток веществ в растении?",
            options: { a: "Трахеиды и сосуды ксилемы", b: "Ситовидные трубки флоэмы", c: "Клетки-спутницы",d:"Лубяные волокна" },
            correct: "a"
        },
        
        {
            type: "single",
            question: "Какая структура обеспечивает связь между клетками ситовидных трубок?",
            options: { a: "Плазмодесмы", b: "Ситовидные пластинки", c: "Поры в клеточных стенках",d:"Межклетники" },
            correct: "b"
        },
        {
            type: "text",
            image: "/фото/ткань.jpg",
            question: "Какой цифрой на рисунке обозначены клетки зоны стебля, выполняющие запасающую функцию?",
            correct: "5" 
        }
    ],
    plant_stem: [//по стеблю растений

    ],
    plant_leaf: [//по листу растений
        {
            
        }
    ]

    
};

let currentQuestions = [];
let incorrectAnswers = [];

// Перемешивание массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Отображение теста
function renderQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        let inputHTML = '';
        
        // Обработка разных типов вопросов
        switch(q.type || 'single') {
            case 'single':
                for (const [key, value] of Object.entries(q.options)) {
                    inputHTML += `<label><input type="radio" name="q${index}" value="${key}"> ${value}</label><br>`;
                }
                break;
                
            case 'multiple':
                for (const [key, value] of Object.entries(q.options)) {
                    inputHTML += `<label><input type="checkbox" name="q${index}" value="${key}"> ${value}</label><br>`;
                }
                break;
                
            case 'text':
                inputHTML = `<input type="text" name="q${index}" placeholder="Введите ответ">`;
                break;
        }

        // Добавляем отображение изображений (одного или нескольких)
        let imagesHTML = '';
        if (q.images) {
            // Если images - массив
            q.images.forEach(img => {
                imagesHTML += `<img src="${img}" alt="Иллюстрация" class="quiz-image">`;
            });
        } else if (q.image) {
            // Если image - строка (для обратной совместимости)
            imagesHTML += `<img src="${q.image}" alt="Иллюстрация" class="quiz-image">`;
        }

        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <div class="images-container">${imagesHTML}</div>
            ${inputHTML}
            <p class="feedback" style="font-weight: bold;"></p>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

// Загрузка теста
function loadQuiz(topic) {
    const topicKey = topic.replace('1', ''); // Удаляем "1" из названия (если есть)
    if (!questionsByTopic[topicKey]) {
        console.error("Тема не найдена:", topicKey);
        return;
    }

    currentQuestions = [...questionsByTopic[topicKey]];
    shuffle(currentQuestions);
    renderQuiz();
}

// Проверка результатов с улучшенным выводом
function calculateScore() {
    let score = 0;
    let partialScore = 0;
    incorrectAnswers = [];

    currentQuestions.forEach((q, index) => {
        const feedbackDiv = document.querySelectorAll('.feedback')[index];
        let isFullyCorrect = false;
        let isPartiallyCorrect = false;
        let correctSelectedCount = 0;

        switch(q.type || 'single') {
            case 'single':
                const radioSelected = document.querySelector(`input[name="q${index}"]:checked`);
                isFullyCorrect = radioSelected && radioSelected.value === q.correct;
                break;
                
            case 'multiple':
                const checkedBoxes = Array.from(document.querySelectorAll(`input[name="q${index}"]:checked`));
                const selectedValues = checkedBoxes.map(cb => cb.value);
                
                correctSelectedCount = selectedValues.filter(val => q.correct.includes(val)).length;
                isFullyCorrect = selectedValues.length === q.correct.length && 
                               q.correct.every(val => selectedValues.includes(val));
                isPartiallyCorrect = correctSelectedCount > 0;
                break;
                
            case 'text':
                const textInput = document.querySelector(`input[name="q${index}"]`);
                isFullyCorrect = textInput && 
                               textInput.value.trim().toLowerCase() === q.correct.toLowerCase();
                break;
        }

        if (isFullyCorrect) {
            score++;
            feedbackDiv.textContent = "Верно!";
            feedbackDiv.style.color = "green";
        } else if (isPartiallyCorrect) {
            partialScore++;
            feedbackDiv.textContent = `Частично верно! Правильно отмечено ${correctSelectedCount} из ${q.correct.length}. Полные правильные ответы: ${q.correct.map(c => q.options[c]).join(', ')}`;
            feedbackDiv.style.color = "orange";
            incorrectAnswers.push({
                question: q.question,
                correctAnswer: q.correct.map(c => q.options[c]).join(', '),
                userScore: `${correctSelectedCount}/${q.correct.length}`
            });
        } else {
            feedbackDiv.textContent = q.type === 'multiple' ?
                `Ошибка! Правильные ответы: ${q.correct.map(c => q.options[c]).join(', ')}` :
                `Ошибка! Правильный ответ: ${q.options ? q.options[q.correct] : q.correct}`;
            feedbackDiv.style.color = "red";
            incorrectAnswers.push({
                question: q.question,
                correctAnswer: q.type === 'multiple' ? 
                    q.correct.map(c => q.options[c]).join(', ') : 
                    (q.options ? q.options[q.correct] : q.correct)
            });
        }
    });

    // Улучшенный вывод результатов
    let resultText;
    if (partialScore === 0) {
        resultText = `Результат: ${score} правильных ${pluralize(score, 'ответ', 'ответа', 'ответов')} из ${currentQuestions.length}`;
    } else if (score === 0) {
        resultText = `Результат: ${partialScore} частично правильных ${pluralize(partialScore, 'ответ', 'ответа', 'ответов')} из ${currentQuestions.length}`;
    } else {
        resultText = `Результат: ${score} полных и ${partialScore} частичных правильных ответов из ${currentQuestions.length}`;
    }

    document.getElementById('modal-content').innerHTML = `
        <p>${resultText}</p>
        <button class="close-modal" onclick="closeModal()">Закрыть</button>
    `;
    document.getElementById('modal').style.display = 'flex';
}

// Функция для склонения слов
function pluralize(number, one, few, many) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return one;
    }
    if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return few;
    }
    return many;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}