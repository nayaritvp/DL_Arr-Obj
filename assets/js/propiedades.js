const propiedades_alquiler = [
    {
        id: '001',
        nombre: 'Departamento Acogedor en Palermo',
        src: 'https://www.luxuryba.com/fotos/fotopri_769.jpg',
        descripcion: 'El Moderno departamento Palermo Hollywood - Amenities ofrece alojamiento en Buenos Aires, a 1,2 km de Bosques de Palermo. Este departamento se encuentra a 1,2 km de la plaza Serrano.',
        ubicacion: 'Palermo/Buenos Aires/Argentina',
        habitaciones: 2,
        baños: 1,
        costo: 1500,
        smoke: false,
        pets: false,
    },
    {
        id: '002',
        nombre: 'Casa playera en Mar de Plata',
        src: 'https://pics.nuroa.com/venta_de_casa_en_mar_del_plata_mar_del_plata_7370073670941998484.jpg',
        descripcion: 'La Casa del Mar es un chalet moderno y luminoso situado frente al mar de Mar del Plata. Dispone de un jardín amplio y conexión WiFi gratuita. Además, hay zona de barbacoa.',
        ubicacion: 'Mar de Plata/Buenos Aires/Argentina',
        habitaciones: 5,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        id: '003',
        nombre: 'Lujoso Departamento en Recoleta',
        src: 'https://media-cdn.tripadvisor.com/media/photo-s/08/21/0f/4b/trianon-residence-recoleta.jpg',
        descripcion: 'Ubicado en la zona más residencial de Buenos Aires, la Recoleta, sobre la Av. Callao entre la Av. Quintana y la Av. Alvear. Le ofrecemos el confort y la atención que lo hará sentir en su propia casa.',
        ubicacion: 'Recoleta/Buenos Aires/Argentina',
        habitaciones: 3,
        baños: 2,
        costo: 4000,
        smoke: false,
        pets: true,
    },
];

const propiedades_venta = [
    {
        id: '001',
        nombre: 'Departamento en Venta Caballito',
        src: 'https://static1.sosiva451.com/86084831/24de1b61-a976-4ccf-a09a-748e3ba8a525_u_small.jpg',
        descripcion: 'Excelente semipiso al frente, a metros de Parque Chacabuco con accesibilidad a subte "E". Consta de amplio living-comedor, cocina equipada con alacena, bajo mesada y cocina eléctrica, dos dormitorios con placard, toilette de recepción y baño completo.',
        ubicacion: 'Caballito/Buenos Aires/Argentina',
        habitaciones: 2,
        baños: 1,
        costo: 173500,
        smoke: false,
        pets: true,
    },
    {
        id: '002',
        nombre: 'Casa en Venta en Nuñez',
        src: 'https://static1.sosiva451.com/39162331/500f0a99-9c32-494a-8eef-d4a5f38f7b9c_u_small.jpg',
        descripcion: 'Muy linda y cálida casa estilo Triplex en la zona más linda de Nuñez. O Higgins y Paroissien. Cercano a todos los accesos pero con la tranquilidad de una barrio.Se accede por la entrada principal a la casa, cuenta con un cómodo living comedor con hogar.',
        ubicacion: 'Nuñez/Buenos Aires/Argentina',
        habitaciones: 4,
        baños: 2,
        costo: 350000,
        smoke: true,
        pets: true,
    },
    {
        id: '003',
        nombre: 'Lujoso Departamento en Recoleta',
        src: 'https://static.tokkobroker.com/pictures/93404737401431297403887814696333107309103124963948733389413543836384871417006.jpg',
        descripcion: 'Excelente piso reciclado con palier privado, frente al Hotel Alvear , entre Ayacucho y Av. Callao. Inmejorable ubicación, en la mejor zona de Buenos Aires. Hall de recepción, comedor y living (con chimenea a leña) . ',
        ubicacion: 'Recoleta/Buenos Aires/Argentina',
        habitaciones: 3,
        baños: 1,
        costo: 500000,
        smoke: false,
        pets: true,
    },
];

const propiedadesEnVenta = propiedades_venta;
const propiedadesEnAlquiler = propiedades_alquiler;

document.addEventListener("DOMContentLoaded", function() {
    const contenedorVenta = document.getElementById('propiedadesEnVenta');
    const contenedorAlquiler = document.getElementById('propiedadesEnAlquiler');

    if (contenedorVenta) {
        pintartarjeta(propiedadesEnVenta, contenedorVenta);
    }

    if (contenedorAlquiler) {
        pintartarjeta(propiedadesEnAlquiler, contenedorAlquiler);
    }
});

function createCard(propiedades) {
    let smokeIcon = '<i class="fas fa-smoking"></i>';
    let smokeText = 'Permitido fumar';
    let petsIcon = '<i class="fas fa-paw"></i>';
    let petsText = 'Mascotas permitidas';

    if (!propiedades.smoke) {
        smokeIcon = '<i class="fas fa-smoking-ban text-danger"></i>';
        smokeText = '<span class="text-danger">No se permite fumar</span>';
    }

    if (!propiedades.pets) {
        petsIcon = '<i class="fa-solid fa-ban text-danger"></i>';
        petsText = '<span class="text-danger">No se permiten mascotas</span>';
    }

    return `<div class="col-md-4 mb-4 h-100 mb-3 my-3">
        <div class="card">
            <img
                src="${propiedades.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">${propiedades.nombre}</h5>
                <p class="card-text">${propiedades.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>${propiedades.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedades.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
                <p class="text-success">
                    ${smokeIcon} ${smokeText}
                </p>
                <p class="text-success">
                    ${petsIcon} ${petsText}
                </p>
            </div>
        </div>
    </div>`;
}


function pintartarjeta(arreglo,contenedor){
    if(arreglo.length == 0){
      contenedor.innerHTML = `<h2>No se encuentran propiedades</h2>`
      return
    }
    let html = ""
    arreglo.forEach(element => {
      html += createCard(element)
    })
    contenedor.innerHTML = html
}
  
  
