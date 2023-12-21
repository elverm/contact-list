let contactos = [];

// Función para crear un nuevo contacto
function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
    const contacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: { ciudad: ciudad, direccion: direccion }
    };
    contactos.push(contacto);
}

function actualizarContacto (id, nombres, apellidos, telefono, ciudad, direccion){
contactos[0] = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: { ciudad: ciudad, direccion: direccion }
};
}

// Función para eliminar un contacto existente
function eliminarContacto(id) { 
    contactos = contactos.filter(contacto => contacto.id !== id); 
}

// Ejemplo de uso: 
crearContacto(1, "Juan", "Perez", "123456789", "Lima", "Av. Principal");
crearContacto(2, "Maria", "Lopez", "987654321", "Cusco", "Calle Principal");
console.log(contactos);
actualizarContacto(2, "jose", "Lopez", "987654321", "newYork", "Calle Principal")
console.log(contactos);

