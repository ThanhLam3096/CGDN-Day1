var inputWidth = prompt("Enter Width : ", );
var inputHeight = prompt("Enter Height : ", );
var width = parseInt(inputWidth);
var height = parseInt(inputHeight);
var area = width*height;
var enter = "</br>";

document.write("Width = " + width + enter);
document.write("Height = " + height + enter);
if(height>width){
    alert("Unbelievable");
    document.write("Unbelievable");
}
else{
    document.write("This Area is = " + width + " * " + height + " = " + (width*height));
}