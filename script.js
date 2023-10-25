
// // ======================= this is for single image =============


// // Initialize Fabric.js canvas
// var canvas = new fabric.Canvas('fabric-canvas');

// // Handle image upload
// document.getElementById('imageInput').addEventListener('change', function (e) {
//     var file = e.target.files[0];
//     var reader = new FileReader();

//     reader.onload = function (event) {
//         var img = new Image();
//         img.src = event.target.result;

//         img.onload = function () {
//             var fabricImage = new fabric.Image(img);
//             canvas.clear();
//             canvas.add(fabricImage);
//         };
//     };

//     reader.readAsDataURL(file);
// });

// // Handle image resizing
// document.getElementById('resizeButton').addEventListener('click', function () {
//     var newWidth = parseInt(prompt('Enter new width:'), 10);
//     var newHeight = parseInt(prompt('Enter new height:'), 10);

//     if (!isNaN(newWidth) && !isNaN(newHeight)) {
//         canvas.getActiveObject().scaleToWidth(newWidth);
//         canvas.getActiveObject().scaleToHeight(newHeight);
//         canvas.renderAll();
//     } else {
//         alert('Please enter valid dimensions.');
//     }
// });



// =============== ============== this code is for upload multiple image =============
// Initialize Fabric.js canvas
var canvas = new fabric.Canvas('fabric-canvas');

// Array to store Fabric Image objects
var fabricImages = [];

// Handle image upload
document.getElementById('imageInput').addEventListener('change', function (e) {
    var files = e.target.files;
    if (!files.length) {
        return;
    }

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = function (event) {
            var img = new Image();
            img.src = event.target.result;

            img.onload = function () {
                var fabricImage = new fabric.Image(img);
                fabricImages.push(fabricImage);
                canvas.add(fabricImage);
            };
        };

        reader.readAsDataURL(file);
    }
});

// Handle image resizing
document.getElementById('resizeButton').addEventListener('click', function () {
    var newWidth = parseInt(prompt('Enter new width:'), 10);
    var newHeight = parseInt(prompt('Enter new height:'), 10);

    if (!isNaN(newWidth) && !isNaN(newHeight)) {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            activeObject.scaleToWidth(newWidth);
            activeObject.scaleToHeight(newHeight);
            canvas.renderAll();
        } else {
            alert('Please select an image to resize.');
        }
    } else {
        alert('Please enter valid dimensions.');
    }
});
