let gradepoints = [
    {
        name: "15",
        percent: 98,
        points: 0,
        grade: {
            gr: "",
            er: "1+"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "rgb(0, 150, 0)"
    },
    {
        name: "14",
        percent: 94,
        points: 0,
        grade: {
            gr: "",
            er: "1"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "rgb(0, 150, 0)"
    },
    {
        name: "13",
        percent: 90,
        points: 0,
        grade: {
            gr: "",
            er: "1-"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "rgb(0, 150, 0)"
    },
    {
        name: "12",
        percent: 85,
        points: 0,
        grade: {
            gr: "1",
            er: "2+"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "rgb(62, 206, 26)"
    },
    {
        name: "11",
        percent: 80,
        points: 0,
        grade: {
            gr: "1",
            er: "2"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "rgb(62, 206, 26)"
    },
    {
        name: "10",
        percent: 75,
        points: 0,
        grade: {
            gr: "1",
            er: "2-"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "rgb(62, 206, 26)"
    },
    {
        name: "9",
        percent: 70,
        points: 0,
        grade: {
            gr: "2",
            er: "3+"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "rgb(191, 228, 42)"
    },
    {
        name: "8",
        percent: 65,
        points: 0,
        grade: {
            gr: "2",
            er: "3"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "yellow"
    },
    {
        name: "7",
        percent: 60,
        points: 0,
        grade: {
            gr: "2",
            er: "3-"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ],
        color: "yellow"
    },
    {
        name: "6",
        percent: 55,
        points: 0,
        grade: {
            gr: "3",
            er: "4+"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
        ],
        color: "yellow"
    },
    {
        name: "5",
        percent: 50,
        points: 0,
        grade: {
            gr: "3",
            er: "4"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "BBR/eBBR", index: 2},
            {name: "MSA", index: 1}
        ],
        color: "orange"
    },
    {
        name: "4",
        percent: 45,
        points: 0,
        grade: {
            gr: "4",
            er: "4-"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "BBR/eBBR", index: 2},
            {name: "MSA", index: 1}
        ],
        color: "orange"
    },
    {
        name: "3",
        percent: 35,
        points: 0,
        grade: {
            gr: "4",
            er: "5+"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "BBR/eBBR", index: 2},
            {name: "MSA", index: 1}
        ],
        color: "orange"
    },
    {
        name: "2",
        percent: 25,
        points: 0,
        grade: {
            gr: "5",
            er: "5"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Kein Abschluss", index: 4}
        ],
        color: "red"
    },
    {
        name: "1",
        percent: 15,
        points: 0,
        grade: {
            gr: "5",
            er: "5-"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Kein Abschluss", index: 4}
        ],
        color: "red"
    },
    {
        name: "0",
        percent: 0,
        points: 0,
        grade: {
            gr: "6",
            er: "6"
        },
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Kein Abschluss", index: 4}
        ],
        color: "red"
    },
    
]
let schoolleavingqualifications = [
    {
        name: "Abitur",
        id: "abi"
    },
    {
        name: "MSA",
        id: "msa"
    },
    {
        name: "BBR/eBBR",
        id: "bbr"
    },
    {
        name: "Berechtigung Übergang Gymnasiale Oberstufe",
        id: "bügo"
    },
    {
        name: "Kein Abschluss",
        id: "ka"
    },
]
let calculations = 0;
let resultGradePoints = 0;
let resultGrade = 0;
function initTable() {
    generatePercentInputs();
    calculatePoints();
    renderGradePointRelativeFrequency();
    calculateStudents();
    renderTable();
    renderText();
}
function calculatePoints() {
    let maxpoints = document.getElementById("maxpoints").value;
    for (let index = 0; index < gradepoints.length; index++) {
        let percent = Number(document.getElementById("percent" + (index + 1)).value);
        gradepoints[index].percent = percent;
        let calculatepercent = gradepoints[index].percent;
        let grade = maxpoints * calculatepercent / 100;
        
        let displaygrade = Math.round(grade);
        gradepoints[index].points = displaygrade;
        gradepoints[index].haveGrade = false;
    }
}
function generatePercentInputs() {
    percentcontainer.innerHTML = `<td class="text">Prozent</td>`;
    for (let index = 0; index < gradepoints.length; index++) {
        percentcontainer.innerHTML += `<td id="percentborder${index + 1}" class="number"><input id="percent${index + 1}"  type="number" value="${gradepoints[index].percent}"></td>`;
    }
}
function calculateGrade() {
    let points = Number(document.getElementById("points").value);
    for (let iii = 0; iii < schoolleavingqualifications.length; iii++) {
        document.getElementById(schoolleavingqualifications[iii].id).style.backgroundColor = "";
    }
    for (let index = 0; index < gradepoints.length; index++) {
        if(points >= gradepoints[index].points){
            resultGradePoints = gradepoints[index].name;
            gradepoints[index].haveGrade = true;
            document.getElementById(index + 1).value =
            Number(document.getElementById(index + 1).value) + 1;
            
            for (let ii = 0; ii < gradepoints[index].schoolleavingqualifications.length; ii++) {
                document.getElementById(schoolleavingqualifications[gradepoints[index].schoolleavingqualifications[ii].index].id).style.backgroundColor = gradepoints[index].color;
            }
            resultGrade = gradepoints[index].grade.er;
            break;
        }
    }
}
function calculateStudents() {
    let grades = 0;
    let totalgradepoints = 0;
    for (let index = 0; index < gradepoints.length; index++) {
        let gradeInput = Number(document.getElementById(index + 1).value);
        if(!isNaN(gradeInput) && gradeInput > 0){
            grades += gradeInput;
            totalgradepoints += gradeInput * Number(gradepoints[index].name);
        } 
    }
    for (let index = 0; index < gradepoints.length; index++) {
        let gradeInput = Number(document.getElementById(index + 1).value);
        if(grades >= 1){
            let rh = gradeInput / grades * 100;
            let displayrh = rh.toFixed(0);
            document.getElementById(index + "rh").textContent = displayrh + " %";
        }else{
            document.getElementById(index + "rh").textContent = 0 + " %";
        }
    } 
    calculateGradePointAverage(grades, totalgradepoints);
}
function renderGradePointRelativeFrequency() {
    gradeAmount.innerHTML = `<td class="text">Anzahl der Schüler</td>`;
    for (let index = 0; index < gradepoints.length; index++) {
        gradeAmount.innerHTML += `<td class="number"><input type="number" id="${index + 1}"><span id="${index}rh"></span></td>`;
    }
}
function calculateGradePointAverage(grades, totalgradepoints) {
    let averagegrade = 0;
    if(!isNaN(totalgradepoints / grades)){
            averagegrade = totalgradepoints / grades;
        }else{
            averagegrade = 0;
    }
    document.getElementById("averagegrade").textContent =  averagegrade.toFixed(1);
}
function renderTable() {
    pointcontainer.innerHTML = `<td class="text">Rohpunkte</td>`;
    gradepointcontainer.innerHTML = `<td class="text">Notenpunkte</td>`;
    gradecontainer.innerHTML = `<td class="text">Noten GR Niveau</td>`;
    ergradecontainer.innerHTML = `<td class="text">Noten ER Niveau</td>`;
    for (let index = 0; index < gradepoints.length; index++) {
        let percentborder = document.getElementById("percentborder" + (index + 1))
        if(gradepoints[index].haveGrade){
            pointcontainer.innerHTML += `<td style="background-color:  ${gradepoints[index].color};">${gradepoints[index].points}</td>`;
            gradepointcontainer.innerHTML += `<td style="background-color:  ${gradepoints[index].color};" class="number">${gradepoints[index].name}</td>`;
            gradecontainer.innerHTML += `<td style="background-color:  ${gradepoints[index].color};" class="number">${gradepoints[index].grade.gr}</td>`;
            ergradecontainer.innerHTML += `<td style="background-color:  ${gradepoints[index].color};" class="number">${gradepoints[index].grade.er}</td>`;
            percentborder.style.backgroundColor = gradepoints[index].color;
        }else{
            pointcontainer.innerHTML += `<td class="number">${gradepoints[index].points}</td>`;
            gradepointcontainer.innerHTML += `<td class="number">${gradepoints[index].name}</td>`;
            gradecontainer.innerHTML += `<td class="number">${gradepoints[index].grade.gr}</td>`;
            ergradecontainer.innerHTML += `<td class="number">${gradepoints[index].grade.er}</td>`;
            percentborder.style.backgroundColor = "";
        }
    }
}
function renderText(calculations) {
    if(resultGradePoints == 1){
        document.getElementById("gradepointtext").textContent = "Notenpunkt";
    }else{
        document.getElementById("gradepointtext").textContent = "Notenpunkte";
    }
    document.getElementById("gradetext").textContent = " Note ";
    document.getElementById("gradepoint").textContent = resultGradePoints;
    document.getElementById("grade").textContent = resultGrade;
    document.getElementById("calculations").textContent = calculations;
    document.getElementById("points").value = "";
}
function updateTable() {
    calculations += 1;
    calculatePoints();
    calculateGrade();
    calculateStudents();
    renderTable();
    renderText();
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        updateTable();
    }
});
initTable();
