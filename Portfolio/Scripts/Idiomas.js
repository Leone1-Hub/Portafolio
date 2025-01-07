const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const InformacionEntrada = document.getElementById('InformacionEntrada-info');
const textoInicial = document.getElementById('textoInicial-info');
const textoInicial2 = document.getElementById('textoInicial2-info');
const parrafo = document.getElementById('parrafo-info');
const parrafo2 = document.getElementById('parrafo2-info');
const Eslogan = document.getElementById('Eslogan-info');
const Sobremi = document.getElementById('Sobremi-info');
const Sobremi2 = document.getElementById('Sobremi2-info');
const Proyectos = document.getElementById('Proyectos-info');
const boton1= document.getElementById('boton1-info');
const boton2= document.getElementById('boton2-info');
const titulo= document.getElementById('titulo-info');
const parrafoP1=document.getElementById('parrafoP1-info');
const titulo2= document.getElementById('titulo2-info');
const parrafoP2=document.getElementById('parrafoP2-info');
const titulo3= document.getElementById('titulo3-info');
const parrafoP3=document.getElementById('parrafoP3-info');
const titulo4= document.getElementById('titulo4-info');
const parrafoP4=document.getElementById('parrafoP4-info');
const Contacto= document.getElementById('Contacto-info');
const TituloProyecto= document.getElementById('ProyectoTitulo-info');
const textoFinal=document.getElementById('textoFinal-info');
// Toggle lista idiomas
idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `assets/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            textoInicial.textContent = 'Hello! 👋🏻, I am';
            InformacionEntrada.textContent = 'Welcome to my portfolio as a Full Stack developer, passionate about Front-end development.';
            boton1.textContent = 'Download CV'
            boton2.textContent = 'Contact me'
            textoInicial2.textContent = 'Who am I?';
            Sobremi.textContent = 'About me'
            Sobremi2.innerHTML = 'About<strong class="Título-destaque"> me</strong>';
            Proyectos.textContent = 'Projects'
            parrafo.innerHTML = 'I love creating websites and programs that provide a unique and satisfying experience. You can see some of my projects in the <strong class="Título-destaque">projects</strong> section.';
            parrafo2.textContent = 'I am a self-taught, responsible, and committed person in my work. I am constantly learning new tools and technologies to continue improving my skills. At the top, you can see my skills and technologies that I use.';
            Eslogan.textContent = 'THE ROAD IS LONG, I AM WILLING TO TRAVEL IT...';
            TituloProyecto.innerHTML = 'My <strong class="Título-destaque"> Projects</strong>';
            titulo.textContent = 'Umbrella Academy Enrollment Website';
            parrafoP1.innerHTML = 'The Umbrella Academy enrollment website allows students to register, change their password, and store their enrollment history. Users can create a personal account, update their password when needed, and access a detailed record of their enrolled courses and enrollment dates. The platform is designed to be user-friendly, secure, and efficient, making self-management of enrollments easy. <img src="assets/Logo-UmbrellaAcademy.svg" alt="Imagen">';
            titulo2.textContent = 'Text Encryptor and Decryptor';
            parrafoP2.innerHTML = 'This is a text encryptor and decryptor created to complete the Alura One and Oracle Next Generation challenge. It allows lowercase letters without accents, using RegEx to convert uppercase characters to lowercase and inform the user with a non-intrusive popup message if the character they attempted to enter is invalid. <img src="assets/Enciptador-Desencriptador.PNG" alt="Imagen">';
            titulo3.textContent = 'Image Search with Pixabay';
            parrafoP3.innerHTML = 'This is a text-based page that searches for a Pokémon via the Pixabay URL, which will show you its physical characteristics. <img src="assets/Pixabay.svg" alt="Imagen">';
            titulo4.textContent = 'Virtual Store Program';
            parrafoP4.innerHTML = 'This is a virtual store created with the Java language using JFrames, implemented with design patterns. It allows the process of making an online purchase, simulating the purchase of one or more products, with shipping to an address provided by the customer, and easy integration of shipping providers like FedEx and DHL. <img src="assets/TiendaVirtual.png" alt="Image">';
            Contacto.textContent='CONTACT ME';
            textoFinal.textContent = 'This page is developed with:';
            break;  

        case 'latino':
            textoInicial.textContent = '!Hola! 👋🏻, soy';
            InformacionEntrada.textContent = 'Sea bienvenido a mi portafolio como desarrollador Full Stack, apasionado por el desarrollo Front-end.';
            boton1.textContent = 'Descargar CV'
            boton2.textContent = 'Contáctame'
            textoInicial2.textContent = '¿Quién soy?';
            Sobremi.textContent = 'Sobre mi'
            Sobremi2.innerHTML = 'Sobre<strong class="Título-destaque"> mí</strong>';
            Proyectos.textContent = 'Proyectos'
            parrafo.innerHTML = 'Me encanta crear sitios web y programas que brinden una experiencia única y satisfactoria. Puedes ver algunos de mis proyectos en la sección de <strong class="Título-destaque"> proyectos</strong>.';
            parrafo2.textContent = 'Soy una persona autodidacta, responsable y comprometida en mi trabajo. Estoy en constante aprendizaje de nuevas herramientas y tecnologías para seguir mejorando mis habilidades. En la parte superior, pudo ver mis habilidades y técnologias que uso.'
            Eslogan.textContent = 'EL CAMINO ES LARGO, ESTOY DISPUESTO A RECORRERLO...';
            TituloProyecto.innerHTML = 'Mis <strong class="Título-destaque"> Proyectos</strong>';
            titulo.textContent = 'Página Web Matrícula Umbrella Academy'
            parrafoP1.innerHTML='La página web de matrícula de Umbrella Academy permite a los estudiantes registrarse, cambiar su contraseña y almacenar su historial de matrículas. Los usuarios pueden crear una cuenta personal, actualizar su contraseña cuando lo necesiten y acceder a un registro detallado de sus cursos inscritos y fechas de matrícula. La plataforma está diseñada para ser fácil de usar, segura y eficiente, facilitando la gestión autónoma de las matrículas. <img src="assets/Logo-UmbrellaAcademy.svg" alt="Imagen">';
            titulo2.textContent = 'Encriptador y desencriptador'
            parrafoP2.innerHTML='Este es un encriptador y desencriptador de texto creado para completar el desafío de Alura One y Oracle Next Generation. Permite letras minúsculas y sin tildes, se utilizó RegEx para convertir los caracteres de mayúsculas a minúsculas e indicar al usuario con un mensaje emergente no intrusivo que el carácter que intentó ingresar es inválido. <img src="assets/Enciptador-Desencriptador.PNG" alt="Imagen">'
            titulo3.textContent = 'Buscador de Imagenes con Pixabay'
            parrafoP3.innerHTML='Este es un página de texto creado que busca mediante el URL Pixabay un Pokemón el cual te mostrará sus características Físicas. <img src="assets/Pixabay.svg" alt="Imagen">'
            titulo4.textContent = 'Programa de Tienda Virtual'
            parrafoP4.innerHTML='Esta es una tienda virtual creada con el lenguaje de java con Jframes, implementada con patrones de diseño. Permite realizar el proceso de una compra online, simulando la compra de uno o varios productos, un envío a una dirección puesto por el cliente con fácil implementación de proveedores de envío como FedEx y DHL. <img src="assets/TiendaVirtual.png" alt="Image">'
            Contacto.textContent='CONTACTAR CONMIGO';
            textoFinal.textContent = 'Este sitio está desarrollado con:';
            break; 
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('usa')
            break;
        
        default:
            break;
    }
});