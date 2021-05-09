const getState = ({ setStore, getStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetsList: []
		},
		actions: {
			fetchPeople: async () => {
				//<=nombre de la acción
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				setStore({ peopleList: json.results });
			},
			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				setStore({ planetsList: json.results });
			},
			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			deleteFavorite: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
