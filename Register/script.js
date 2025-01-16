
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
}

GetParams()

function GetReturnValue(){
    if(window.location === 'https://hk-tommy.github.io/HKFindFriends/Register/index.html?action=persional'){
        document.getElementById("Info_Account").style.display = 'none'
        document.getElementById("Info_Persional").style.display = ''
    }
}
GetReturnValue()

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