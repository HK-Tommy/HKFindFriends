
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

function CheckPassword(inputtxt) { 
    return inputtxt.match(
        /^[A-Za-z]\w{7,14}$/
    )
};
function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('Input_Email').value = urlParams.get('email');
    document.getElementById('Input_Passwords').value = urlParams.get('passwords');
    document.getElementById('Input_ComfirmPasswords').value = urlParams.get('passwords');
    const action = urlParams.get("action")

    if(action === 'persional'){
        document.getElementById("Info_Account").style.display = 'none'
        document.getElementById("Info_Persional").style.display = ''
        if (document.getElementById('Input_UserName').value != ""){
            document.getElementById('Input_UserName').value = urlParams.get('username');
            document.getElementById('Input_Birthday').value = urlParams.get('birthday');
            document.getElementById('gender').value = urlParams.get('gender');
            document.getElementById('country').value = urlParams.get('country');
            document.getElementById('language').value = urlParams.get('language');
        }
    }
}

GetParams()

document.getElementById('Complete').addEventListener('click', function() {
    const Email = document.getElementById("Input_Email").value
    const Passwords = document.getElementById("Input_Passwords").value
    const ComformPasswords = document.getElementById("Input_ComfirmPasswords").value

    if (Email != null && Passwords !=null && ComformPasswords != null)
        if (validateEmail(Email)){
            if (Passwords === ComformPasswords){
                if (CheckPassword(Passwords)){
                    window.location = window.location + "?email=" + Email + '&passwords=' + Passwords
                }
                else {
                    window.alert("密碼太弱了 ! 請重新設定 ! ")
                    document.getElementById("Input_Passwords").value = ''
                    document.getElementById("Input_ComfirmPasswords").value = ''
                }
            }
            else{
                window.alert("兩種密碼不相同 ! 請重新輸入 ! ")
                document.getElementById("Input_ComfirmPasswords").value = ''
            }
        }
        else{
            window.alert("請輸入正確的電郵地址 ! ")
            document.getElementById("Input_Email").value = ''
        }
    }
);
document.getElementById('signup').addEventListener('click', function() {
        window.location = window.location + '?action=Login'
})

document.getElementById('Complete_PersionalInfo').addEventListener('click', function() {
    const UserName = document.getElementById("Input_UserName").value;
    const Birthday = document.getElementById("Input_Birthday").value;
    const Gender = document.getElementById("gender").value; 
    const Country = document.getElementById("country").value;
    const Language = document.getElementById("language").value; 
    if(UserName != "" && Birthday != "" && Gender != "" && Country != "" && Language != ""){
        window.location = 'https://hk-tommy.github.io/HKFindFriends/Register/index.html?action=persional&state=completed&username=' + UserName + "&birthday=" + Birthday + "&gender=" + Gender + "&country=" + Country + "&language=" + Language
    }
})