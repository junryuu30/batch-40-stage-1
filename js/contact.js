


function submitData(){

    let name = document.getElementById("inputName").value
    let email = document.getElementById("inputEmail").value
    let phoneNumber = document.getElementById("inputPhoneNumber").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("yourMessage").value

    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(subject);
    console.log(message);


    if (name == ""){
        return alert("name harus diisi!")
    } else if (email == "") {
        return alert ("email harus diisi!")
    } else if (phoneNumber == "") {
       return alert("Phone Number harus diisi!")
    } else if (subject == ""){
        return alert("Subject harus diisi!")
    } else if (message == "") {
        return alert("message harus diisi!")
    }


    // if (name == ""|| email =="" || phoneNumber == "" || message ==""){
    //     alert ("harus diisi semua")
    // }

    let emailReceiver = "Jihanfadilah330@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}. Tolong hubungi saya lagi di nomor ${phoneNumber}.Atas Perhatiannya terima kasih.`

    a.click()
}

