class App {
    constructor() {
        this.notes = [];

        this.form = document.querySelector('#form');
        this.noteTitle = document.querySelector('#note-title');
        this.noteText = document.querySelector('#note-text');
        this.formButtons = document.querySelector('#form-buttons');
        this.$notes = document.querySelector('#notes');

        this.addEventListeners()
    }

    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);
            this.deleteNote(event);
        })

        this.form.addEventListener('submit', event => {
            event.preventDefault();
            const title = this.noteTitle.value;
            const text = this.noteText.value;
            const hasNotes = title || text
            if(hasNotes) {
                this.addNote({ title, text })
            }
            console.log(this.notes)
        })
    }

    handleFormClick(event) {
        const isFormClicked = this.form.contains(event.target)
        console.log(isFormClicked)
        isFormClicked ? this.openForm() : this.closeForm()
    }

    openForm() {
        this.form.classList.add('form-open');
        this.noteTitle.style.display = 'block';
        this.formButtons.style.display = 'block';
    }

    closeForm() {
        this.form.classList.remove('form-open');
        this.noteTitle.style.display = 'none';
        this.formButtons.style.display = 'none';
        this.noteTitle.value = '';
        this.noteText.value = '';
    }

    addNote({ title, text }) {
        const newNote = {
            id: this.notes.length > 0 ? this.notes.length + 1 : 1,
            title,
            text,
            color: 'white'
        }
        this.notes = [...this.notes, newNote]
        this.render();
    }

    deleteNote(event) {
        event.stopPropagation();
        if(!event.target.matches('.toolbar-delete')) return
        const id = event.target.dataset.id
        console.log(id)
        this.notes = this.notes.filter(note => note.id !== Number(id));
        this.render();
    }

    render() {
        this.displayNotes()
    }

    displayNotes() {

        this.$notes.innerHTML = this.notes.map(note => `
        <div class="note" style="background: ${note.color}" data-id="${note.id}">
            <div class="${note.title && "note-title"}">
                ${note.title}
            </div>
            <div class="note-text">
                ${note.text}
            </div>
            <div class="toolbar-container">
                <div class="toolbar">
                    <i class="fa-solid fa-trash toolbar-delete" data-id=${note.id}></i>
                    <i class="fa-solid fa-palette toolbar-color" data-id=${note.id}></i>
                </div>
            </div>
        </div>
        `).join('');
    }

    
}

new App();