document.addEventListener('DOMContentLoaded', function () {
    new Vue({
      el: '#app',
      data: {
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
                image: "../assets/images/unnamed.jpg"
            },
            {
                id: 2,
                text1: "Это",
                text2: "домик",
                answer: "шоколадный"
            },
            {
                id: 3,
                text1: "Это здание киевляне называют дом с",
                text2: "",
                answer: "химерами"
            }
        ]
      },
      methods: {
         // pass
      },
      computed: {
        // pass
      }
    })
  })