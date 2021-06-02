let types = document.querySelectorAll('.store .type .type-holder');

types.forEach(element => {
    element.addEventListener('click', function () {
        // this.classList.add('active')
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        } else{
            this.classList.add('active')
        }
    })
})