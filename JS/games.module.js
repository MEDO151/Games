import { Ui } from "./ui.module.js";
import { Info } from "./info.js"


export class Games {
    constructor(){
        let links = document.querySelectorAll('.nav-link')
        this.getGame("mmoarpg")
        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener('click',(e) => {
                document.querySelector(".active").classList.remove("active");
                e.target.classList.add("active");
                this.getGame(e.target.dataset.category)
            });
        }
        this.Ui = new Ui()
    }

    async getGame(category){
        document.querySelector(".loading").classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0588bb9541msh4fd10a5f530ff73p1e8fbdjsnd6960c6ef22f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.${category}.fantasy.pvp&platform=pc` , options);
        const request = await api.json();
        this.Ui.displayDatagame(request)
        this.getId(request)
        document.querySelector(".loading").classList.add("d-none")
    }

    getId(cardId){
        let card = document.querySelectorAll(".card")
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener("click",function(){
                let id = cardId[i].id
                new Info(id)
                document.querySelector(".games").classList.add("d-none")
                document.querySelector(".details").classList.remove("d-none")
            })
        }
    }
}