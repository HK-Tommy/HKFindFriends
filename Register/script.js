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

function Complete() {
    Email = document.getElementById("Input_Email").value
    Passwords = document.getElementById("Input_Passwords").value
    ComformPasswords = document.getElementById("Input_ComfirmPasswords").value

    if (Email != null && Passwords !=null && ComformPasswords != null)
        if (validateEmail(Email)){
            if (Passwords === ComformPasswords){
                if (CheckPassword(Passwords)){
                    const urlParams = new URLSearchParams(window.location.search);
                    urlParams.set('email', Email);
                    urlParams.set('passwords', Passwords);

                    window.location.search = urlParams;
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