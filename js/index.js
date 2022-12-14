window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

    menu = document.getElementById("header");
    body = document.getElementById("container__all");
    nav = document.getElementById("nav");

function mostrar_menu(){

    body.classList.toggle('move_content');
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){

    if (window.innerWidth > 760)  {
        body.classList.remove('move_content');
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }

});

/* const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:enzoprina9@gmail.com?subject=nombre ${form.get('name')} correo ${form.get('email')} body ${form.get('message') }`)
    $buttonMailto.click()
} */

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  const $forms = document.querySelector('#forms')
  $forms.addEventListener('submit', handleSubmit)

  async function handleSubmit(event) {
    event.preventDefault()
    const forms = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: forms,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok) {
        this.reset()
        alert('¡Gracias por Contactarme! te escribiré pronto :)')
    }
  }
