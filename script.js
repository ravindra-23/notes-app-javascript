class App {
    constructor() {
        this.notes = [{title: 'Movie', text: 'Justice league'}, {title: 'Learn Javascript', text:'ES6 concepts'}];

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
        })

        this.form.addEventListener('submit', event => {
            event.preventDefault();
            const title = this.noteTitle.value;
            const text = this.noteText.value;
            console.log(title, text)
            this.render();
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

    render() {
        this.displayNotes()
    }

    displayNotes() {

        this.$notes.innerHTML = this.notes.map(note => `
        <div class="note">
            <div class="note-title">
                ${note.title}
            </div>
            <div class="note-text">
                ${note.text}
            </div>
            <div class="toolbar-container">
                <div class="toolbar">
                    <i class="fa-solid fa-palette toolbar-color"></i>
                    <i class="fa-solid fa-trash toolbar-delete"></i>
                </div>
            </div>
        </div>
        `).join('');
    }

    
}

new App();