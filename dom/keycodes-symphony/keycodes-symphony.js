export function compose() {
    document.addEventListener("keydown", (event) => {
        var notesContainer = document.createElement("div")
        notesContainer.classList.add("notes-container")
        document.body.appendChild(notesContainer)
        if (event.key === "Backspace") {
            var notes = document.querySelectorAll(".note")
            var lastNote = notes[notes.length - 1]
            if (lastNote) {
                lastNote.remove()
            }
        } else if (event.key === "Escape") {
            var notes = document.querySelectorAll(".note")
            notes.forEach((note) => note.remove())
        } else {
            var note = document.createElement("div")
            note.classList.add("note")
            note.textContent = event.key
            var red = (event.key.charCodeAt(0) * 53) % 256;
            var green = (event.key.charCodeAt(0) * 97) % 256;
            var blue = (event.key.charCodeAt(0) * 31) % 256;
            note.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            notesContainer.appendChild(note)
        }
    })
}