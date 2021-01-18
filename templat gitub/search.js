var myrequest = new XMLHttpRequest();
myrequest.open("GET", "https://api.github.com/users?per_page=4", true);
myrequest.send();
myrequest.onload = function () {
    document.getElementById('btn').style.background = "gray";
    document.getElementById("profiles").disabled = true;

    if (this.status === 200) {
        var datta = JSON.parse(this.response);
        console.log(datta);
        //MEthode 1 bocle forEtch
        datta.forEach(element => {
            var cardsContainer = document.getElementsByClassName("cards")[0];
            var myDiv = document.createElement("div");
            myDiv.className += "card";
            cardsContainer.appendChild(myDiv);
            var myImage = document.createElement("img");
            myImage.src = element.avatar_url;
            myDiv.appendChild(myImage);
            var myspan = document.createElement("span");
            myspan.innerHTML = element.login;
            myDiv.appendChild(myspan)
        });

         //MEthode 2 bocle for

        // for (i = 0; i < 4; i++) {
        //     var cardsContainer = document.getElementsByClassName("cards")[0];
        //     var myDiv = document.createElement("div");
        //     myDiv.className += "card";
        //     cardsContainer.appendChild(myDiv);
        //     var myImage = document.createElement("img");
        //     myImage.src = datta[i].avatar_url;
        //     myDiv.appendChild(myImage);
        //     var myspan = document.createElement("span");
        //     myspan.innerHTML = datta[i].login;
        //     myDiv.appendChild(myspan)
        // }

    }



}
//

function check() {
    var username = document.getElementById("inp").value;
    if (username == "") {
        document.getElementById('btn').style.background = "gray";
        document.getElementById("profiles").disabled = true;

    } else {
        document.getElementById("profiles").disabled = false;
        document.getElementById('btn').style.background = "black";
    }

}

function recherche() {

    var username = document.getElementById("inp").value;


    if (username == "") {
        document.getElementById('btn').style.background = "gray";
        document.getElementById("profiles").disabled = true;


    } else {
        document.getElementById("profiles").disabled = false;
        document.getElementById('btn').style.background = "black";
   




    document.getElementById("profiles").style.display = "block";
    document.getElementById("imagee").src = "githup.png";
    var myinput = new XMLHttpRequest();
    var donee = "https://api.github.com/users/"+username;
    myinput.open("GET", donee, true);
    var objSerch;
    myinput.onload = function () {
        if (this.status == 200) {

            jsonTable = JSON.parse(this.responseText);
            console.log(jsonTable)
            objSerch = {
                login: jsonTable.login,
                avatar: jsonTable.avatar_url,
                repos: jsonTable.public_repos,
                followers: jsonTable.followers
            }

            document.getElementById("imagee").src = objSerch.avatar;
            document.getElementById("nameProfil").innerHTML = objSerch.login;
            document.getElementById("followers").innerHTML = objSerch.followers;
            document.getElementById("repos").innerHTML = objSerch.repos;
            document.getElementById("link").target = "_blank";
            document.getElementById("link").href = "https://github.com/" + objSerch.login
                ;
        } else {
            document.getElementById("imagee").src = "githup.png";
            document.getElementById("nameProfil").innerHTML = "Profile not found ! ";
            document.getElementById("followers").innerHTML = "00";
            document.getElementById("repos").innerHTML = "00";
            document.getElementById("link").href = "#";
            document.getElementById("link").target = "";

        }

    }
    myinput.send();
}


}