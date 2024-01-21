export class Ui {
    displayDatagame(data){
            let game = '';
            for(let i = 0; i < data.length; i++) {
                game += `<div class="col-md-3">
                <div role="button"  class="card bg-transparent game border border-1 border-secondary rounded-2 h-100">
                    <div class="p-3 text-white ">
                        <div>
                            <img src="${data[i].thumbnail}" class="w-100 h-100 rounded-top-2" alt="">
                        </div>
                        <div class="py-2 ">
                            <div class="d-flex justify-content-between align-items-center my-1">
                                <h3 class="fs-6 m-0">${data[i].title.slice(0,20)}</h3>
                                <a class="badge text-decoration-none p-2" href="">Free</a>
                            </div>
                            <p class="text-center short_description opacity-50 description my-2">${data[i].short_description.slice(0,40)}</p>
                        </div>
                    </div>
                    <footer  class="border-top border-1 border-secondary rounded-bottom-1 p-2 d-flex justify-content-between align-items-end">
                        <span class="badge bg-badge">${data[i].genre}</span>
                        <span class="badge bg-badge">${data[i].platform}</span>
                    </footer >
                </div>
            </div>`
            }
            document.querySelector('.row').innerHTML = game
        }
    displayInfo(data){
        let info = `
        <div class="col-md-4">
                    <div>
                        <img src="${data.thumbnail}" class="w-100" alt="">
                    </div>
                </div>
                <div class="col-md-8">
                    <div>
                        <h3>Title:${data.title}</h3>
                        <p>Category: <span class="badge">${data.genre}</span></p>
                        <p>Platform: <span class="badge">${data.platform}</span></p>
                        <p>Status:  <span class="badge">${data.status}</span></p>
                        <p>${data.description}</p>
                        <a href="${data.freetogame_profile_url}" class="btn btn-outline-warning">Show Game</a>
                    </div>
                </div>
        `
        document.querySelector('.info').innerHTML = info
    }

}