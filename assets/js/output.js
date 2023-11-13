let head = "<tr><td><font color='green'>SONG</font></td><td><font color='brown'>DOWNLOAD</font></td></tr>";
if (typeof All_song != "undefined") {
    let output = head;
    let list = All_song;
    for (var i=0;i<list.length;i++){
        output = output + "<tr><td>" + list[i].name + "</td><td><a href='" + list[i].path + "' download='download.mp3'>Download</a></td></tr>";
    };
    document.getElementById("output").innerHTML = output;
}

