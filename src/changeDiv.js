function changeDiv ()
{
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener('click', function ()
    {
        document.getElementById("firstpage").style.display = "none";
        document.getElementById("secondpage").style.display = "block";
    });
    const userInput = document.getElementById("usr");
    userInput.addEventListener('keyup', function(){
        if(event.keyCode === 13)
        {
            document.getElementById("firstpage").style.display = "none";
            document.getElementById("secondpage").style.display = "block";
        }
    });

    const cityInput = document.getElementById("city");
    cityInput.addEventListener('keyup', function(){
        if(event.keyCode === 13)
        {
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

export default changeDiv