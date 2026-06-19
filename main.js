let gradepoints = [
    {
        name: "15",
        percent: 0,
        grade: "1+",
        haveGrade: false
    },
    {
        name: "14",
        percent: 0,
        grade: "1",
        haveGrade: false
    },
    {
        name: "13",
        percent: 0,
        grade: "1-",
        haveGrade: false
    },
    {
        name: "12",
        percent: 0,
        grade: "2+",
        haveGrade: false
    },
    {
        name: "11",
        percent: 0,
        grade: "2",
        haveGrade: false
    },
    {
        name: "10",
        percent: 0,
        grade: "2-",
        haveGrade: false
    },
    {
        name: "9",
        percent: 0,
        grade: "3+",
        haveGrade: false
    },
    {
        name: "8",
        percent: 0,
        grade: "3",
        haveGrade: false
    },
    {
        name: "7",
        percent: 0,
        grade: "3-",
        haveGrade: false
    },
    {
        name: "6",
        percent: 0,
        grade: "4+",
        haveGrade: false
    },
    {
        name: "5",
        percent: 0,
        grade: "4",
        haveGrade: false
    },
    {
        name: "4",
        percent: 0,
        grade: "4-",
        haveGrade: false
    },
    {
        name: "3",
        percent: 0,
        grade: "5+",
        haveGrade: false
    },
    {
        name: "2",
        percent: 0,
        grade: "5",
        haveGrade: false
    },
    {
        name: "1",
        percent: 0,
        grade: "5-",
        haveGrade: false
    },
    {
        name: "0",
        percent: 0,
        grade: "6",
        haveGrade: false
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
    percantcontainer.innerHTML = ``;
    gradecontainer.innerHTML = ``;
    gradepointcontainer.innerHTML = ``;
    if(amount == 1){
        gradeAmount.innerHTML = ``;
        gradeAmount.innerHTML += `<td class="text">Anzahl der Schüler</td>`;
    }
    pointcontainer.innerHTML += `<td class="text">Rohpunkte</td>`;
    percantcontainer.innerHTML += `<td class="text">Prozent</td>`;
    gradepointcontainer.innerHTML += `<td class="text">Notenpunkte</td>`;
    gradecontainer.innerHTML += `<td class="text">Noten</td>`;
    
    for (let index = 0; index < gradepoints.length; index++) {
        percent = percentages[index].value;
        grade = maxpoints * percent / 100;
        let displaygrade = Math.round(grade);
        percentages[index].points = displaygrade;
        gradepoints[index].haveGrade = false;
    }
    for (let index = 0; index < gradepoints.length; index++) {
        if(points >= percentages[index].points){
            resultGradePoints = gradepoints[index].name;
            gradepoints[index].haveGrade = true;
            break;
        }
    }
    for (let index = 0; index < gradepoints.length; index++) {
        if(gradepoints[index].haveGrade){
            pointcontainer.innerHTML += `<td style="border: 5px  rgb(89, 255, 47) inset;" class="number">${percentages[index].points}</td>`;
            percantcontainer.innerHTML += `<td style="border: 5px  rgb(89, 255, 47) inset;" class="number">${percentages[index].value} %</td>`;
            gradepointcontainer.innerHTML += `<td style="border: 5px  rgb(89, 255, 47) inset;" class="number">${gradepoints[index].name}</td>`;
            gradecontainer.innerHTML += `<td style="border: 5px  rgb(89, 255, 47) inset;" class="number">${gradepoints[index].grade}</td>`;
        }else{
            pointcontainer.innerHTML += `<td class="number">${percentages[index].points}</td>`;
            percantcontainer.innerHTML += `<td class="number">${percentages[index].value} %</td>`;
            gradepointcontainer.innerHTML += `<td class="number">${gradepoints[index].name}</td>`;
            gradecontainer.innerHTML += `<td class="number">${gradepoints[index].grade}</td>`;
        }
        if(amount == 1){
            gradeAmount.innerHTML += `<td class="number"><input type="number" id="${index + 1}"></td>`;
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
