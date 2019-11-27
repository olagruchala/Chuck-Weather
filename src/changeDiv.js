function changeDiv ()
{
    if(window.localStorage['user']===undefined)
    {
        //Wyświetlamy pole input
        document.getElementById("terazNieWiem").innerHTML = 
            "<div class='form-group'>"+
            "<label for='usr'>Enter your name</label>"+
            "<input type='text' class='form-control' id='usr' name='username' min-length='3' maxlength='15' placeholder='My name is...'/><br>"+
            "<button id='nextButton' class='btn btn-primary btn-lg mp-2'>Next</button>"+
            "</div>";
        const nextButton = document.getElementById("nextButton");
        nextButton.addEventListener('click', function ()
        {
            let userName = document.getElementById("usr").value;

            if(userName.length>2)
            {
                localStorageChange('user', document.getElementById("usr").value);
                document.getElementById("firstpage").style.display = "none";
                document.getElementById("secondpage").style.display = "block";
            }

        });
        const userInput = document.getElementById("usr");
        userInput.addEventListener('keyup', function(){
            if(event.keyCode === 13)
            {
                document.getElementById("firstpage").style.display = "none";
                document.getElementById("secondpage").style.display = "block";
            }
        });
    }
    else{
        //Wyświetlamy imie użytkownika
        document.getElementById("terazNieWiem").innerHTML =
        "<h4>Cześć, "+window.localStorage['user']+"!</h4><br><button id='showWeatherBtn' class='btn btn-primary btn-lg mp-2'>Show weather</button>";
        const showWeatherButton = document.getElementById("showWeatherBtn");
        showWeatherButton.addEventListener('click', function ()
        {
            document.getElementById("firstpage").style.display = "none";
            document.getElementById("mainpage").style.display = "block";
        });
    }

    const cityInput = document.getElementById("city");
    cityInput.addEventListener('keyup', function(){
        if(event.keyCode === 13)
        {
            localStorageChange('city', document.getElementById("city").value);
            document.getElementById("secondpage").style.display = "none";
            document.getElementById("thirdpage").style.display = "block";
        }
    });

    const todayButton = document.getElementById("today_btn");
    todayButton.addEventListener('click', function ()
    {
        document.getElementById("thirdpage").style.display = "none";
        document.getElementById("mainpage").style.display = "block";
    });

    const nextDaysButton = document.getElementById("nextdays_btn");
    nextDaysButton.addEventListener('click', function ()
    {
        document.getElementById("thirdpage").style.display = "none";
        document.getElementById("fivedays").style.display = "block";
    });
    
    const nextDaysButtonMain = document.getElementById("nextdays_btn_main");
    nextDaysButtonMain.addEventListener('click', function ()
    {
        document.getElementById("mainpage").style.display = "none";
        document.getElementById("fivedays").style.display = "block";
    });

    const backButton = document.getElementById("back");
    backButton.addEventListener('click', function ()
    {
        document.getElementById("fivedays").style.display = "none";
        document.getElementById("mainpage").style.display = "block";
    });

    const changeNameButton = document.getElementById("changeNameBtn");
    changeNameButton.addEventListener('click', function ()
    {
        document.getElementById("mainpage").style.display = "none";
        document.getElementById("firstpage").style.display = "block";
    });

    const changeCityButton = document.getElementById("changeCityBtn");
    changeCityButton.addEventListener('click', function ()
    {
        document.getElementById("mainpage").style.display = "none";
        document.getElementById("secondpage").style.display = "block";
    });

    const confirmCityButton = document.getElementById("confirmCityBtn");
    confirmCityButton.addEventListener('click', function ()
    {
        document.getElementById("secondpage").style.display = "none";
        document.getElementById("thirdpage").style.display = "block";
    });

}

function localStorageChange(storageKey, value)
{
    window.localStorage.setItem(storageKey, value);
}

export default changeDiv