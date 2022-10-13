// global variables
let btn = document.getElementById("btn")
let sections = document.querySelectorAll("section")
let counter = (sections.length);
// build the navigatinbar icons on load
for (let index = 1; index <= sections.length; index++) {
    let nav = document.createElement("li");
    let link = document.createElement("a");
    link.href = `#section${index}`;
    link.id = `#section${index}`;
    let linkTxt = document.createTextNode(`Section ${index}`);
    link.appendChild(linkTxt);
    nav.appendChild(link);
    document.getElementById("navbar__list").appendChild(nav);
}
// end the navigatinbar icons 
// button to build more section and its navigationbar icon
btn.onclick = function () {
    counter += 1;
// build the navigatinbar icon
    let nav = document.createElement("li");
    let link = document.createElement("a");
    link.href = `#section${counter}`;
    link.id = `#section${counter}`;
    let linkTxt = document.createTextNode(`Section ${counter}`);
    link.appendChild(linkTxt);
    nav.appendChild(link);
    document.getElementById("navbar__list").appendChild(nav);
// build the section
    let sec = document.createElement("section");
    sec.id = `section${counter}`;
    sec.setAttribute("data-nav", `Section ${counter}`);
    let div = document.createElement("div");
    div.className = "landing__container";
    sec.appendChild(div);
    let h2 = document.createElement("h2");
    let h2Txt = document.createTextNode(`Section ${counter}`);
    h2.appendChild(h2Txt);
    div.appendChild(h2);
    let p1 = document.createElement("p");
    let p1Txt = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
    p1.appendChild(p1Txt);
    div.appendChild(p1);
    let p2 = document.createElement("p");
    let p2Txt = document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");
    p2.appendChild(p2Txt);
    div.appendChild(p2);
    document.getElementById("father").appendChild(sec);
}
// end button function
// active class
// the main function to scroll position
window.onscroll = function () {
    // scroll position
    let scrollPosition = document.documentElement.scrollTop;
    // query select section again in case there are more than the main four from html
    let sections = document.querySelectorAll("section")
    // scroll position function to add and remove active class
    sections.forEach((section) => {
        if ((scrollPosition > (section.offsetTop-((section.offsetHeight)*1/4)))&&(scrollPosition < (section.offsetTop+((section.offsetHeight)/2)))) {
            let id = section.attributes.id.value;
            removeActive()
            addActive(id)
        } else if ((scrollPosition > (section.offsetTop + ((section.offsetHeight) / 2))) && (scrollPosition < (section.offsetTop + ((section.offsetHeight) * 3 / 4)))) {
            removeActive()
        }
    });
}
// remove active class function
let removeActive = function () {
    sections.forEach((Element) => {
        Element.classList.remove("active")
    })
}
// add active class function
let addActive = function (id) {
    let selector = document.querySelector(`#${id}`)
    selector.classList.add("active")
}
// end active class
// smooth scroll
// variable the anchors
let links = document.getElementsByTagName("a")
for (const link of links) {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        document.querySelector(`${event.target.id}`).scrollIntoView({ behavior: "smooth" })
    })
}