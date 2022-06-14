(function () {
    const container = document.querySelector('.notes');
    const pageBody = document.querySelector('body');

    const createPopUp = () => {

        const popup = document.createElement('div');
        popup.className = "pop_up";
        
        popup.innerHTML = 
        `<div class="pop_up_container">
            <div class="pop_up_body">
                <button class="notes-title"></button>
                <button class="notes-date"></button>
                <div class="notes-full"></div>
                <div class="btn-close" id="close_pop_up">&#10006</div>
            </div>
        </div>`

        return popup;
    }
    
    // {title, date, description}
    const showPopUp = () => {
        pageBody.append(createPopUp());
    }
      
    const alertName = () => {
        showPopUp();
    }
    
    const createHTMLnotes = ({title, date, preview}) => 
    ` <button class="notes-title">${title}</button>
    <button class="notes-date">${date}</button>
    <div class="notes-preview">${preview}</div>
    <button class="notes-more">More...</button> `

    const render = () => {
        const blocks = notes.map((note) => {
            const noteBlock = document.createElement('div');
            noteBlock.className = "notes-block";
    
            noteBlock.innerHTML = createHTMLnotes(note);

            noteBlock.querySelector('.notes-more').onclick = alertName;
    
            return noteBlock;
        });
    
        container.append(...blocks);
    }
    
    render();
})();

 //PopUp
//  const togglePopUp = () => {
    
//     const openPopUp = document.querySelector('.notes-more')
//     const popUp = document.querySelector('.pop_up')
//     const closePopUp = document.querySelector('.btn-close')
    
//     openPopUp.addEventListener('click', function(event){
//         event.preventDefault();
//         popUp.classList.add('show');
//     });
    
//     closePopUp.addEventListener('click', () => {
//         popUp.classList.remove('show')
//     });
//     }