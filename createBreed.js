// Loads navbar when page loads
$('#navContainer').load('navbar.html');

//Displays selected breed in the dropdown field
var dropdownButton = document.getElementById('dropdownButton');
Array.from(document.getElementsByClassName("dropdown-item")).forEach((e) => {
    e.addEventListener('click', () => {
        dropdownButton.innerHTML = e.innerHTML;
    })
})

// Show button color change when clicked
$("#saveyourbreedButton").click(function () {
    $("#saveyourbreedButton").css('background', 'linear-gradient(89.17deg, #763C15 0%, #CF7009 100%)');
});

// Opens upload pop up dialogue box
var uploadImgbutton = document.getElementById('uploadImgbutton');
var uploadImgcontainer = document.getElementById('uploadPopup-container');
openBox(uploadImgbutton, uploadImgcontainer);

// Open the "Thanks for your interest" dialogue box
var interest = document.getElementById('interest');
var knowMore = document.getElementById('knowMore');
openBox(knowMore, interest);

blurBackground('#uploadImgbutton');
blurBackground('#knowMore');

// Close the upload image dialogue box
var closeButton1 = document.getElementsByClassName('closeButton')[0];
closeBox(closeButton1, uploadImgcontainer)
// Close the "Thanks for your interest" dialogue box
var closeButton2 = document.getElementsByClassName('closeButton')[1];
closeBox(closeButton2, interest)

unblurBackground('.closeButton');

// Change the blue upload image when mouse enters the div
var uploadPopup = document.getElementsByClassName('upload-popup')[0];
var uploadlogoImgtag = document.getElementById('uploadlogoImgtag');
uploadPopup.addEventListener('mouseover', () => {
    uploadlogoImgtag.src = "assets/images/blueUploadlogo.png";
})

// Set the default upload image when mouse goes out of the div
uploadPopup.addEventListener('mouseout', () => {
    uploadlogoImgtag.src = "assets/images/uploadLogo.png";
})

// Blurs the background on click of certain buttons
function blurBackground(element) {
    $(element).on('click', function () {
        $('.givePadding').css("filter", "blur(2px)");
        $('#navContainer').css("filter", "blur(2px)");
        return false;
    })
}
// Unblurs the background on click of certain buttons
function unblurBackground(element) {
    $(element).on('click', function () {
        $('.givePadding').css("filter", "blur(0px)");
        $('#navContainer').css("filter", "blur(0px)");
        return false;
    })
}

// Opens certain dialogue box
function openBox(button, targetBox) {
    button.addEventListener('click', () => {
        targetBox.style.display = "flex";
    })
}

// Closes certain dialogue box
function closeBox(button, targetBox) {
    button.addEventListener('click', () => {
        targetBox.style.display = "none";
    })
}

// Validations
var saveyourbreedButton = document.getElementById('saveyourbreedButton');

saveyourbreedButton.addEventListener('click',validateForm);

function validateForm(){
    // Date validations
var dayInput = document.getElementById('dayInput');
var monthInput = document.getElementById('monthInput');
var yearInput = document.getElementById('yearInput');
if(dayInput.value==''||monthInput.value==''||yearInput.value==''){
    console.log('date cant be empty');
}
}

// const breednameInput = document.getElementById('breednameInput');
// breednameInput.addEventListener('keydown', function(event){
//   if((/\d/g).test(event.key)) {
//     event.preventDefault();
//     document.getElementById('nameValidation').style.display = "flex";
//   }  
// })
// var closeButton3 = document.getElementsByClassName('closeButton')[2];
// closeBox(closeButton3,document.getElementById('nameValidation'));