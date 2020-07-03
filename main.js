function submit() {
    var message = document.getElementById("messagebody").value;
    message = encodeURIComponent(message.trim());
    var link = "mailto:melrosejonte@gmail.com?subject=Website%20Order&body=";
    link = link + message;
    window.open(link, '_blank');
}