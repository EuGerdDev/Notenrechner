let gradepoints = [
    {
        name: "15",
        percent: 0,
        grade: "1+"
    },
    {
        name: "14",
        percent: 0,
        grade: "1"
    },
    {
        name: "13",
        percent: 0,
        grade: "1-"
    },
    {
        name: "12",
        percent: 0,
        grade: "2+"
    },
    {
        name: "11",
        percent: 0,
        grade: "2"
    },
    {
        name: "10",
        percent: 0,
        grade: "2-"
    },
    {
        name: "9",
        percent: 0,
        grade: "3+"
    },
    {
        name: "8",
        percent: 0,
        grade: "3"
    },
    {
        name: "7",
        percent: 0,
        grade: "3-"
    },
    {
        name: "6",
        percent: 0,
        grade: "4+"
    },
    {
        name: "5",
        percent: 0,
        grade: "4"
    },
    {
        name: "4",
        percent: 0,
        grade: "4-"
    },
    {
        name: "3",
        percent: 0,
        grade: "5+"
    },
    {
        name: "2",
        percent: 0,
        grade: "5"
    },
    {
        name: "1",
        percent: 0,
        grade: "5-"
    },
    {
        name: "0",
        percent: 0,
        grade: "6"
    },
    
]
let percentages = [
    {
        name: "96",
        value: 96,
        points: 0
    },
    {
        name: "89.6",
        value: 89.6,
        points: 0
    },
    {
        name: "83.2",
        value: 83.2,
        points: 0
    },
    {
        name: "76.8",
        value: 76.8,
        points: 0
    },
    {
        name: "70.4",
        value: 70.4,
        points: 0
    },
    {
        name: "64",
        value: 64,
        points: 64
    },
    {
        name: "57.6",
        value: 57.6,
        points: 0
    },
    {
        name: "51.2",
        value: 51.2,
        points: 0
    },
    {
        name: "44.8",
        value: 44.8,
        points: 0
    },
    {
        name: "38.4",
        value: 38.4,
        points: 0
    },
    {
        name: "32",
        value: 32,
        points: 0
    },
    {
        name: "25.6",
        value: 25.6,
        points: 0
    },
    {
        name: "19.2",
        value: 19.2,
        points: 0
    },
    {
        name: "12.8",
        value: 12.8,
        points: 0
    },
    {
        name: "6.4",
        value: 6.4,
        points: 0
    },
    {
        name: "0",
        value: 0,
        points: 0
    },
]

function updateTable() {
    let points = Number(document.getElementById("points").value);
    let maxpoints = Number(document.getElementById("maxpoints").value);
    let pointcontainer = document.getElementById("pointcontainer");
    let percantcontainer = document.getElementById("percantcontainer");
    let gradepointcontainer = document.getElementById("gradepointcontainer");
    let gradecontainer = document.getElementById("gradecontainer");
    pointcontainer.innerHTML = ``;
    percantcontainer.innerHTML = ``;
    gradecontainer.innerHTML = ``;
    gradepointcontainer.innerHTML = ``;
    for (let index = 0; index < gradepoints.length; index++) {
        let percent = percentages[index].value;
        let grade = maxpoints * percent / 100;
        let displaygrade = Math.ceil(grade);
        
        percentages[index].points = displaygrade;
        pointcontainer.innerHTML += `<td>${displaygrade}</td>`;
    }
    for (let index = 0; index < gradepoints.length; index++) {
        percantcontainer.innerHTML += `<td>${percentages[index].name}</td>`;
    }
    for (let index = 0; index < gradepoints.length; index++) {
        gradepointcontainer.innerHTML += `<td>${gradepoints[index].name}</td>`;
    }
    for (let index = 0; index < gradepoints.length; index++) {
        gradecontainer.innerHTML += `<td>${gradepoints[index].grade}</td>`;
    }
    let resultGradePoints = 0;
    for (let index = 0; index < percentages.length; index++) {
        if(points >= percentages[index].points){
            resultGradePoints = gradepoints[index].name;
            break;
        }
    }
    document.getElementById("gradepoint").textContent = resultGradePoints;
}
updateTable();
