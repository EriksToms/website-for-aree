function parbaudiParoli(){
    var password = document.getElementById("parole").value;
    if(password.length < 8){
        console.log('Kļūda: Nepieciešams minimālais simbolu skaits 8');
        alert('Nepieciešams minimālais simbolu skaits 8');
    }else if(password.search(/[a-z]/) < 0) {
        console.log('Kļūda: Parolei jāsatur mazie burti');
        alert('Parolei jāsatur mazie burti');
    }else if(password.search(/[A-Z]/) < 0) {
        console.log('Kļūda: Parolei jāsatur liele burti');
        alert('Parolei jāsatur lielie burti');
    }else if(password.search(/[0-9]/) < 0) {
        console.log('Kļūda: Parolei jāsatur cipari');
    }else {
        console.log('Veiksmīgi esi ielogojies');
        alert('Veiksmīgi esi ielogojies');
    }
}