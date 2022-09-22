let dataProject = []
function addProject(event){
    event.preventDefault()

    let title = document.getElementById("projectName").value
    let sdate = document.getElementById("startDate").value
    let edate = document.getElementById("endDate").value
    let description = document.getElementById("description").value
    let image = document.getElementById("input-img").files


    let nodejs = document.getElementById("nodeJs").checked
    let python = document.getElementById("python").checked
    let reactJs = document.getElementById("reactJs").checked
    let golang = document.getElementById("golang").checked

    if(nodejs){
        nodejs = document.getElementById("nodeJs").value
    } else {
        nodejs = ''
    }

    if(python){
        python = document.getElementById("python").value
    } else {
        python = ''
    }
    
    if(reactJs){
        reactJs = document.getElementById("reactJs").value
    } else {
        reactJs = ''
    }
    
    if(golang){
        golang = document.getElementById("golang").value
    } else {
        golang = ''
    }
    

    image = URL.createObjectURL(image[0])

    let project = {
        title,
        sdate,
        edate,
        description,
        image,
        nodejs,
        python,
        reactJs,
        golang,
    }

    dataProject.push(project)

    renderBlog()
}

    function renderBlog(){

        document.getElementById("contents").innerHTML = ""

        console.log(dataProject);

        for (let index = 0; index < dataProject.length; index++){
            console.log(dataProject[index]);

            document.getElementById("contents").innerHTML += `

            <div class="card">
                <div class="card-image">
                    <img src="${dataProject[index].image}" alt="">
                </div>
                <div class="title-content">
                    <a>${dataProject[index].title}</a>
                    <p>durasi: ${getDistanceTime(dataProject[index].sdate, dataProject[index].edate)}</p>
                </div>
                <h4>${dataProject[index].description}</h4>
                <div class="app">
                    <i class="fa-brands fa-${dataProject[index].nodejs}"></i>
                    <i class="fa-brands fa-${dataProject[index].reactJs}"></i>
                    <i class="fa-brands fa-${dataProject[index].python}"></i>
                    <i class="fa-brands fa-${dataProject[index].golang}"></i>
                </div>

                <div class="btn-card">
                    <div>
                        <button type="button" onclick="">edit</button>
                    </div>
                    <div>
                        <button type="button" onclick="">delete</button>
                    </div>
                </div>
            </div>
            `

        }
}

function getDistanceTime(start, end){

    let timeNow = new Date(end)
    let timePost = new Date(start)

    // waktu sekarang - waktu project dibuat
    let distance = timeNow - timePost // hasilnya milisecond
    console.log(distance);

    

    let milisecond = 1000 // milisecond
    let secondInHours = 3600 // 1 jam 3600 detik
    let hoursInDay = 24 // 1 hari 24 jam
    // let dayInMonth = 30 //1 bulan 30 hari 
    let miliSecondInMonth = 2629800000


    let distanceMonth = Math.floor (distance / (miliSecondInMonth))
    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    
    
    if (distanceMonth > 0){
        return `${distanceMonth} bulan`
    } else if(distanceDay > 0){
        return `${distanceDay} day`
    } else if (distanceDay <= 0) {
        return `0 day`
    }
    
}

