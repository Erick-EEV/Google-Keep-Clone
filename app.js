class App {
    constructor(){
       this.$form = document.querySelector('form');
       this.addEventListeners();
    }

    addEventListeners() {
        document.body.addEventListener('click', event => {
            handleFormClick(event)
        })
    }

    handleFormClick(event) {
        const isFormClicked = this.$form.contains(event.target);
        if (isFormClicked) {
            //open form
        } else {
            //clicked form
        }
    }

    openForm() {
        this.$form.classList.add('form-open');
    }
}

new App()