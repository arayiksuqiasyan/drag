// const item = document.querySelector(".item")
// const placeholders = document.querySelectorAll(".placeholder")
// let ghost;

// item.addEventListener("dragstart", dragstart)
// item.addEventListener("dragend", dragend)

// for (const placeholder of placeholders) {
//     placeholder.addEventListener("dragover", dragover)
//     placeholder.addEventListener("dragenter", dragenter)
//     placeholder.addEventListener("dragleave", dragleave)
//     placeholder.addEventListener("drop", dragdrop)
// }


// function dragstart(e) {
//     console.log("drag start", e.target);
//     ghost = e.target.cloneNode(true);
//     ghost.innerText = "Тащи куда надо...!";
//     ghost.style.cssText = `position:fixed;top:-999px;`;

//     document.body.appendChild(ghost);
//     const { width, height } = getComputedStyle(ghost);
//     e.dataTransfer.setDragImage(
//         ghost,
//         parseInt(width) / 2,
//         parseInt(height) - 10
//     );
//     setTimeout(() => {
//         e.target.classList.add('hide')
//     }, 0)

// }
// function dragend(e) {
//     console.log("drag end");

//     e.target.classList.remove('hold')
//     e.target.classList.remove('hide')


// }

// function dragend(event) {
//     event.target?.classList?.remove("hold", "hide");
//     ghost?.remove();
// }



// function dragover(e) {
//     e.preventDefault()
// }
// function dragenter(e) {
//     console.log("dragenter", e.target);
//     e.target.classList.add("hovered")

// }
// function dragleave(e) {
//     console.log("dragleave");
//     e.target.classList.remove("hovered")


// }
// function dragdrop(e) {
//     e.target.classList.remove("hovered")
//     e.target.append(item)

// }


const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")
let ghost;

for (placeholder of placeholders) {

    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", dragdrop)
}

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

function dragstart(e) {
    ghost = item.cloneNode(true)
    ghost.innerText = "Тащи куда надо...";
    ghost.style.cssText = `position:fixed;top:-999px;  border: 1px dotted rgb(105, 220, 197);color:#229efd `;
    document.body.append(ghost)
    const { width, height } = getComputedStyle(ghost)
    console.log(123, width);
    e.dataTransfer.setDragImage(ghost,
        parseInt(width) / 2,
        parseInt(height) / 2
    )

    e.target.classList.add("hold")
    setTimeout(() => {
        e.target.classList.add("hide")

    }, 0)

}
function dragend(e) {
    e.target.classList.remove("hold")
    e.target.classList.remove("hide")
    ghost.remove()


}

/////////////////////////////



function dragover(e) {
    e.preventDefault()
}
function dragenter(e) {
    console.log("aaa");
    e.target.classList.add("hovered")
}
function dragleave(e) {
    e.target.classList.remove("hovered")

}
function dragdrop(e) {
    e.target.classList.remove("hovered")
    e.target.append(item)
}