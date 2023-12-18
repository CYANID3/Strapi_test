getData()

$("#addBtn").on("click", () => {
    addData($("#name").val(), $("#desc").val())
})


function addData(newname, newdesc){
    let newData =  {name: newname, description: newdesc}
    $.ajax({
        type: "POST",
        url: "http://localhost:1337/api/restorans",
        data: newData,
        success: function (response) {
            console.log("Успешно!");
            getData();
        }
    });
}


function getData(){
    $.ajax({
        type: "GET",
        url: "http://localhost:1337/api/restorans?populate=image",
        success: function (response) {
            console.log(response);
            $("#list").html("");
            for (let i = 0; i < response.data.length; i++) {
            
                $("#list").append(`
                <li>
                <h1>${response.data[i].name}</h1>
                <h3>${response.data[i].description}</h3>
                <button onClick='delData(${response.data[i].id})'>Delete</button>
                <button onclick='changeData(${response.data[i].id})'>Change</button>
                </li>
                `)
                
            }
        }
    });
}

