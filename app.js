const quizData = [{
        question: "Which of the following data structure is NOT a linear data structure?",
        a: "Arrays",
        b: "Linked List",
        c: "Stack",
        d: "Graph",
        correct: "d",
    },
    {
        question: "What is complexiety of Merge Sort?",
        a: "O(n log n)",
        b: "O(n)",
        c: "O(log n)",
        d: "O(n^2)",
        correct: "a",
    },
    {
        question: "Minimum number of moves required to solve a Tower of Hanoi puzzle?",
        a: "2^(n^2)",
        b: "2^(n-1)",
        c: "2^n-1",
        d: "2n-1",
        correct: "c",
    },
    {
        question: "A recursive program with no base case..?",
        a: "does not execute",
        b: "execute until all condition matches",
        c: "execute infinitely",
        d: "obtain progressive approach",
        correct: "c",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);
