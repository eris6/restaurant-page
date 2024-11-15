function generateAbout(){
    console.log('hi');
    const content = document.querySelector("#content");
    const contentHeader = document.createElement("div");
    contentHeader.classList.add("content-header");
    content.appendChild(contentHeader);

    const aboutHead = document.createElement("div");
    aboutHead.textContent="About Us"; 
    contentHeader.appendChild(aboutHead);

    const aboutContent = document.createElement("div");
    aboutContent.textContent="In the wake of America's collapse, greenhouses were erected across the country to protect vegetation from nuclear radiation. Our humble restaurant converted one of these greenhouses into a solar punk cafe. Serving since 2034.";
    aboutContent.classList.add("about-content");
    contentHeader.appendChild(aboutContent);


}

export {generateAbout};