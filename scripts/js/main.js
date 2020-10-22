document.addEventListener('DOMContentLoaded', function () {
  
  
  Vue.component("modal", {
    template: "#modal-template"
  });

 
    new Vue({
      el: '#app',
      data: { 
        answers: [],
        showRes: false,
        showModal: false,
        title: "Как хорошо вы знаете Киев?",
        questions: [
          {
                id: 1,
                text: "Перед мной (выбрать из двух вариантов):",
                answer1: {
                    id: 0,
                    text: "А) Софийский собор и его колокольня",
                    correct: false
                },
                answer2: {
                    id: 1,
                    text: "Б) Михайловский собор и его колокольня",
                    correct: true
                },
                image: "../assets/images/sofia.jpg"
          },
          {
              id: 2,
              text1: "Это",
              text2: "домик",
              answer: "шоколадный",
              image: "../assets/images/choco.jpg"
          },
          {
              id: 3,
              text1: "Это здание киевляне называют дом с",            
              answer: "химерами",
              image: "../assets/images/himera.jpg"
          },
          {
              id: 4,
              text1: "Это парк",     
              text2: "горка",         
              answer: "Владимирская",
              image: "../assets/images/vladimir.jpg"
          },
          {
              id: 5,
              text1: "Это",     
              text2: "театр",         
              answer: "Оперный",
              image: "../assets/images/opera.jpg"
          },
          {
              id: 6,
              text1: "На Николаевском соборе установлена скульптура св.",                          
              answer: "Михаила",
              image: "../assets/images/nikolsobor.jpg"
          },
          {
              id: 7,  // баг! коли нажати на саме питання(не radio)перекидає на перше запитання і ставить там вибрану відповідь - fixed
              text:"Михайловскому собору более",
              answer1: {
                id: 0,
                text: "А) 200 лет",
                correct: false
            },
              answer2: {
                id: 1,
                text: "Б) 20 лет",
                correct: true
            },
            
          },
          {
              id: 8, 
              text:"Место в Киеве, где как утверждают исторические источники, был построен первый на Руси православный храм",
              answer1: {
                id: 0,
                text: "А) Десятинная церковь",
                correct: false
            },
              answer2: {
                id: 1,
                text: "Б) Ильинская церковь",
                correct: true
            },
           
          },
          {
              id: 9, 
              text:"Это памятник",
              answer1: {
                id: 0,
                text: "А) Ярославу Мудрому",
                correct: true
            },
              answer2: {
                id: 1,
                text: "Б) Владимиру Великому",
                correct: false
            },
                image:"../assets/images/memorial.jpg"
          },
          {
              id: 10, 
              text:"На флаге Киева увидим изображение",
              answer1: {
                id: 0,
                text: "А) листьев каштанов",
                correct: false
            },
              answer2: {
                id: 1,
                text: "Б) архистратига Михаила",
                correct: true
            },
          },
          {
            id: 11, 
            text1: "Святой покровитель города Киева арх.",                       
            answer: "Михаил"
           
          }

        ],
        results:[
        {
          id:1,
          restext1:"Ваша оценка",
          restext2:"из 11 – «Класс! Вы отлично знаете город!» С удовольствием помогу Вам узнать еще больше на своих авторских экскурсиях. Думаю, мне есть чем Вас удивить!"
        },
        {
          id:2,
          restext1:"Ваша оценка",
          restext2:"из 11 – «Вы молодец! Вы хорошо справились с заданием. Немного неточностей, но это все можно исправить. Гуляйте больше по городу» Хотите прогуляемся вместе?"
        },
        {
          id:3,
          restext1:"Ваша оценка",
          restext2:"– Неплохо! Но есть неточности. Хотите исправим их?  С удовольствием покажу Вам основные достопримечательности Киева  и малоизвестные места во время своих экскурсий."
        },
        {
          id:4,
          restext1:"Ваша оценка",
          restext2:"У Вас начальные знания о городе. Хотите я помогу Вам узнать больше?  Резервируйте прогулку, чтобы узнать город лучше и потом с восторгом делиться новыми маршрутами с друзьями."
        },
        ]
      },
      methods: {
             checkTest() {
               this.showModal = true
               console.log(this.answers)
             }
      },
      computed: {
        // pass
      }
    })
    
 
  })
