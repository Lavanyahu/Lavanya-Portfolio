var text = new Typed(".text", {
    strings: ["Web Developer","Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    var downloadButton = document.getElementById('resume');

    // Add click event listener to the button
    downloadButton.addEventListener('click', function () {
       
        var resumeURL = 'https://online.publuu.com/503075/1128832';

       
        var downloadLink = document.createElement('a');
 
        downloadLink.href = resumeURL;

        
        downloadLink.download = 'Kavana.pdf';

        
        document.body.appendChild(downloadLink);

       
        downloadLink.click();

        
    });
});