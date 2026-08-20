const preview = document.querySelector('#preview');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(el => {
    el.addEventListener('click', function (){
        preview.setAttribute('src', el.getAttribute('src'));

        // thumbnails.forEach(other => {
        //     if(other !== el){
        //         other.classList.remove('active-thumb');
        //     } else {
        //         el.classList.add('active-thumb');
        //     }
        // })

        //removing if/else using 'reset then set' method
        thumbnails.forEach(other => other.classList.remove('active-thumb'));
        el.classList.add('active-thumb');

    })
});

