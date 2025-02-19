// esta clase se encargará de llamar de rick & morty para obtener todos los datos
// el servicio tiene como endpoint de accesso https://rickandmortyapi.com/api/character
// que tiene como respuesta el siguiente json

// {
//     "info": {
//       "count": 826,
//       "pages": 42,
//       "next": "https://rickandmortyapi.com/api/character/?page=2",
//       "prev": null
//     },
//     "results": [
//       {
//         "id": 1,
//         "name": "Rick Sanchez",
//         "status": "Alive",
//         "species": "Human",
//         "type": "",
//         "gender": "Male",
//         "origin": {
//           "name": "Earth",
//           "url": "https://rickandmortyapi.com/api/location/1"
//         },
//         "location": {
//           "name": "Earth",
//           "url": "https://rickandmortyapi.com/api/location/20"
//         },
//         "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//         "episode": [
//           "https://rickandmortyapi.com/api/episode/1",
//           "https://rickandmortyapi.com/api/episode/2",
//           // ...
//         ],
//         "url": "https://rickandmortyapi.com/api/character/1",
//         "created": "2017-11-04T18:48:46.250Z"
//       },
//       // ...
//     ]
//   }


class RickAndMortyService {
    // el constructor debe inicializar una variable con la url de acceso base al API

	constructor() {
        this.url = "https://rickandmortyapi.com/api/character";
    }

    // valor (1 punto)
	async getAllCharacters() {
        try {
            // aqui va tu llamado al API usando fetch puedes usar promesas o asycn/await
            const response = await fetch(this.url);
            const mispersonajes = await response.json();

            const personajes = [];

            mispersonajes.results.forEach(personaje => {
                personajes.push({
                    "name": personaje.name,
                    "status": personaje.status,
                    "species": personaje.species,
                    "firstSeen": personaje.origin.name,
                    "location": personaje.location.name,
                    "image": personaje.image,
                    "student": "Carlos Jaramillo",
                    "code": "220738",
                })
            });

            return personajes;
        } catch (error) {
            console.log("Error: "+error)
        }
	}
}
export default RickAndMortyService;
