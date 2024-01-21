import { Ui } from "./ui.module.js";

export class Info {
    constructor(id){ 
        let close = document.querySelector(".btn-close");
        close.addEventListener("click" , function(){
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        })
        
        this.Ui = new Ui()
        this.getInfo(id)
    }
    
    async getInfo(id){
        document.querySelector(".loading").classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0588bb9541msh4fd10a5f530ff73p1e8fbdjsnd6960c6ef22f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
        let request = await api.json()
        this.Ui.displayInfo(request)
        document.querySelector(".loading").classList.add("d-none")
    };
}













