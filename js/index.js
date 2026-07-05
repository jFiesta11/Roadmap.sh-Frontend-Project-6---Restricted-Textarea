const textarea = document.getElementById("restricted-textarea")
const textarea_container = document.querySelector(".textarea-container")
const textarea_p = textarea_container.querySelector("p")
function max_capacity(counter){
    let max_capacity = 250;
    
    counter >=  max_capacity ?(
        textarea_container.style.borderColor = "red",
        textarea_p.style.color = "red"
    ):(
        textarea_container.style.borderColor = "black",
        textarea_p.style.color = "black"
    )    
}

textarea.addEventListener('input',(text) => {
    let text_input = text.target.value
    let counter = 0
    let char = [...text_input]
    char.forEach( c => {
        counter++
    });
    textarea_p.textContent =`${counter} /250`
    max_capacity(counter)
})

