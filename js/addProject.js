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

    console.log(nodeJs);
    console.log(python);
    console.log(reactJs);
    console.log(golang);

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

        // document.getElementById("contents").innerHTML = ""

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
                    <p>durasi: 3 bulan</p>
                </div>
                <h4>${dataProject[index].description}</h4>
                <div class="app">
                    <i class="fa-brands fa-${dataProject[index].nodejs}"></i>
                    <i class="fa-brands fa-${dataProject[index].reactJs}"></i>
                    <i class="fa-brands fa-${dataProject[index].python}"></i>
                    <i class="fa-brands fa-${dataProject[index].golang}"></i>
                </div>

                <div class="btn-card">
                    <button type="button" onclick="">edit</button>
                    <button type="button" onclick="">delete</button>
                </div>
            </div>
            `

        }
    }