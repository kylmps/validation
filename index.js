function validate(){
    var type = document.getElementById("inType");
    var choice = type.options[type.selectedIndex].value;
    if(choice==0 || "")
    {
        alert("INVALID");
    }

    if (document.getElementById("inTitle").value == "" )
{
    alert("MUST NOT LEAVE BLANK");

}
    if (document.getElementById("inTitle").value == "" )
{
    alert("MUST NOT LEAVE BLANK");
}
    if (document.getElementById("inDateStart").value == "")
{
    alert("INVALID");
}
    if (document.getElementById("inDateEnd").value == "")
{
    alert("INVALID");
}
    if (document.getElementById("inPostDate").value == "")
{
    alert("INVALID");
}
    if (document.getElementById("inPostDate").value == "")
{
    alert("INVALID");
}
if (document.getElementById("inPostDate").value == "")
    {
        alert("INVALID");
    }

    else
    {
        alert("FORM REQUEST SUCCESS");
    }
}
