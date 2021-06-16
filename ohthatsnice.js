setTimeout(() => {
    // Add a class to the <body> element ...
    document.body.className = "mmm";
}, 1500); // ... after 1 and 1/2 seconds (1500 milliseconds).


window.addEventListener("DOMContentLoaded", () => {

    const cocoMessage = document.querySelector("#truth-bomb");

    console.dir(cocoMessage);
    cocoMessage.style.color = "red";

    const galleryElement = document.querySelector("#gallery");

    // let isCurrentlyFlex = true;
    // setInterval(() => {
    //     if (isCurrentlyFlex) {
    //         galleryElement.style.display = "block";
    //         galleryElement.style.backgroundColor = "red";
    //         isCurrentlyFlex = false;
    //     } else {
    //         galleryElement.style.display = "flex";
    //         galleryElement.style.backgroundColor = "";
    //         isCurrentlyFlex = true;
    //     }
    // }, 3000);

    // setTimeout(() => {
    //     galleryElement.classList.add("lots-of-padding");
    // }, 500);

    const sTierPixarMovies = [
        { name: "Coco", imageUrl: "pixar-posters/Coco.jpg" },
        { name: "Finding Nemo", imageUrl: "pixar-posters/Finding_Nemo.jpg" },
        { name: "Ratatouille", imageUrl: "pixar-posters/RatatouillePoster.jpg" },
    ];

    const fTierPixarMovies = [
        { name: "Cars 3", imageUrl: "pixar-posters/Cars_3_poster.jpg" }
    ];

    fTierPixarMovies.forEach(movieEntry => {

        const myNewDiv = document.createElement("div");

        myNewDiv.className = "from-javascript-lol";

        const img = document.createElement("img");
        img.src = movieEntry.imageUrl;

        const h5 = document.createElement("h5");
        h5.innerText = movieEntry.name;

        myNewDiv.appendChild(img);
        myNewDiv.appendChild(h5);

        galleryElement.appendChild(myNewDiv);

        setTimeout(() => {
            myNewDiv.remove();
        }, 2000);

    });


});