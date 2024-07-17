const elsTabLink = document.querySelectorAll('.js-tab-link');

elsTabLink.forEach( (elTabLink) =>{
    elTabLink.addEventListener( 'click', function(evt) {
        evt.preventDefault()
    })
})