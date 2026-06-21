let gradepoints = [
    {
        name: "15",
        percent: 0,
        grade: "1+",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "14",
        percent: 0,
        grade: "1",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "13",
        percent: 0,
        grade: "1-",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "12",
        percent: 0,
        grade: "2+",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "11",
        percent: 0,
        grade: "2",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "10",
        percent: 0,
        grade: "2-",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Abitur", index: 0},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "9",
        percent: 0,
        grade: "3+",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "8",
        percent: 0,
        grade: "3",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "7",
        percent: 0,
        grade: "3-",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
            {name: "Berechtigung Übergang Gymnasiale Oberstufe", index: 3}
        ]
    },
    {
        name: "6",
        percent: 0,
        grade: "4+",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "MSA", index: 1},
        ]
    },
    {
        name: "5",
        percent: 0,
        grade: "4",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "BBR/eBBR", index: 2},
            {name: "MSA", index: 1}
        ]
    },
    {
        name: "4",
        percent: 0,
        grade: "4-",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "BBR/eBBR", index: 2},
            {name: "MSA", index: 1}
        ]
    },
    {
        name: "3",
        percent: 0,
        grade: "5+",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "BBR/eBBR", index: 2},
            {name: "MSA", index: 1}
        ]
    },
    {
        name: "2",
        percent: 0,
        grade: "5",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Kein Abschluss", index: 4}
        ]
    },
    {
        name: "1",
        percent: 0,
        grade: "5-",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Kein Abschluss", index: 4}
        ]
    },
    {
        name: "0",
        percent: 0,
        grade: "6",
        haveGrade: false,
        schoolleavingqualifications: [
            {name: "Kein Abschluss", index: 4}
        ]
    },
    
]
let percentages = [
    {
        name: "98",
        value: 98,
        points: 0
    },
    {
        name: "89.6",
        value: 94,
        points: 0
    },
    {
        name: "83.2",
        value: 90,
        points: 0
    },
    {
        name: "76.8",
        value: 85,
        points: 0
    },
    {
        name: "70.4",
        value: 80,
        points: 0
    },
    {
        name: "64",
        value: 75,
        points: 64
    },
    {
        name: "57.6",
        value: 70,
        points: 0
    },
    {
        name: "51.2",
        value: 65,
        points: 0
    },
    {
        name: "44.8",
        value: 60,
        points: 0
    },
    {
        name: "38.4",
        value: 55,
        points: 0
    },
    {
        name: "32",
        value: 50,
        points: 0
    },
    {
        name: "25.6",
        value: 45,
        points: 0
    },
    {
        name: "19.2",
        value: 35,
        points: 0
    },
    {
        name: "12.8",
        value: 25,
        points: 0
    },
    {
        name: "6.4",
        value: 15,
        points: 0
    },
    {
        name: "0",
        value: 0,
        points: 0
    },
]
let schoolleavingqualifications = [
    {
        name: "Abitur",
        id: "abi",
        width: 440
    },
    {
        name: "MSA",
        id: "msa",
        width: 440
    },
    {
        name: "BBR/eBBR",
        id: "bbr",
        width: 218
    },
    {
        name: "Berechtigung Übergang Gymnasiale Oberstufe",
        id: "bügo",
        width: 670
    },
    {
        name: "Kein Abschluss",
        id: "ka",
        width: 218
    },
]
let resultGradePoints;
let percent;
let grade;
let amount = 0;
function updateTable() {
    let grades = 0;
    let totalgradepoints = 0;
    let averagegrade = 0;
    amount += 1;
    let points = Number(document.getElementById("points").value);
    let maxpoints = Number(document.getElementById("maxpoints").value);
    let pointcontainer = document.getElementById("pointcontainer");
    let percantcontainer = document.getElementById("percantcontainer");
    let gradepointcontainer = document.getElementById("gradepointcontainer");
    let gradecontainer = document.getElementById("gradecontainer");
    let gradeAmount = document.getElementById("gradeAmount");
    pointcontainer.innerHTML = ``;
    gradecontainer.innerHTML = ``;
    gradepointcontainer.innerHTML = ``;
    if(amount == 1){
        gradeAmount.innerHTML = ``;
        gradeAmount.innerHTML += `<td class="text">Anzahl der Schüler</td>`;
    }
    pointcontainer.innerHTML += `<td class="text">Rohpunkte</td>`;
    gradepointcontainer.innerHTML += `<td class="text">Notenpunkte</td>`;
    gradecontainer.innerHTML += `<td class="text">Noten</td>`;
    
    for (let index = 0; index < gradepoints.length; index++) {
        let percant = Number(document.getElementById("percant" + (index + 1)).value);
        percentages[index].value = percant;
        let calculatepercant = percentages[index].value;
        let grade = maxpoints * calculatepercant / 100;
        let displaygrade = Math.round(grade);
        percentages[index].points = displaygrade;
        gradepoints[index].haveGrade = false;
        if(amount == 1){
            gradeAmount.innerHTML += `<td class="number"><input type="number" id="${index + 1}"></td>`;
        }
    }
    for (let index = 0; index < gradepoints.length; index++) {
        for (let iii = 0; iii < schoolleavingqualifications.length; iii++) {
            document.getElementById(schoolleavingqualifications[iii].id).style.backgroundColor = "";
        }
        
        if(points >= percentages[index].points){
            resultGradePoints = gradepoints[index].name;
            gradepoints[index].haveGrade = true;
            document.getElementById(index + 1).value =
            Number(document.getElementById(index + 1).value) + 1;
            
            for (let ii = 0; ii < gradepoints[index].schoolleavingqualifications.length; ii++) {
                document.getElementById(schoolleavingqualifications[gradepoints[index].schoolleavingqualifications[ii].index].id).style.backgroundColor = "rgb(62, 206, 26)";
            }
            break;
        }
    }
    for (let index = 0; index < gradepoints.length; index++) {
        let percantborder = document.getElementById("percantborder" + (index + 1))
        if(gradepoints[index].haveGrade){
            pointcontainer.innerHTML += `<td style="background-color:  rgb(62, 206, 26);" class="number">${percentages[index].points}</td>`;
            gradepointcontainer.innerHTML += `<td style="background-color: rgb(62, 206, 26);" class="number">${gradepoints[index].name}</td>`;
            gradecontainer.innerHTML += `<td style="background-color: rgb(62, 206, 26);" class="number">${gradepoints[index].grade}</td>`;
            percantborder.style.backgroundColor = "rgb(62, 206, 26)";
        }else{
            pointcontainer.innerHTML += `<td class="number">${percentages[index].points}</td>`;
            gradepointcontainer.innerHTML += `<td class="number">${gradepoints[index].name}</td>`;
            gradecontainer.innerHTML += `<td class="number">${gradepoints[index].grade}</td>`;
            percantborder.style.backgroundColor = "";
        }
        
        let gradeInput = Number(document.getElementById(index + 1).value);
        if(!isNaN(gradeInput) && gradeInput > 0){
            grades += gradeInput;
            totalgradepoints += gradeInput * Number(gradepoints[index].name);
        }
        
        
    }
    document.getElementById("gradepoint").textContent = resultGradePoints;

    if(!isNaN(totalgradepoints / grades)){
            averagegrade = totalgradepoints / grades;
        }else{
            averagegrade = 0;
    }
    document.getElementById("averagegrade").textContent =  averagegrade.toFixed(1);
}
updateTable();
