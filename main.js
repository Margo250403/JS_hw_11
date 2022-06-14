(function () {
    const container = document.querySelector('.notes');
    const pageBody = document.querySelector('body');

    let popupActive = null;
    const createPopUp = ({title, date, description}) => {

        const popup = document.createElement('div');
        popup.className = "pop_up";

        popup.innerHTML =
            `<div class="pop_up_container">
            <div class="pop_up_body">
                <button class="notes-title">${title}</button>
                <button class="notes-date">${date}</button>
                <div class="notes-full">${description}</div>
                <div class="btn-close">&#10006</div>
            </div>
        </div>`
        popup.querySelector('.btn-close').onclick = closePopUp;
        return popup;
    }
    const closePopUp = () => {
        popupActive.remove();
    }

    const showPopUp = (note) => {
        const popup = createPopUp(note)
        pageBody.append(popup);
        popupActive = popup;
    }

    const createHTMLnotes = ({title, date, preview}) =>
        ` <button class="notes-title">${title}</button>
    <button class="notes-date">${date}</button>
    <div class="notes-preview">${preview}</div>
    <button class="notes-more">More...</button> `

    const render = () => {
        const blocks = notes
            .reverse()
            .sort((a, b) => a.isPopular < b.isPopular ? 1 : -1)
            .map((note) => {
                const noteBlock = document.createElement('div');
                noteBlock.className = "notes-block";

                noteBlock.innerHTML = createHTMLnotes(note);

                noteBlock.addEventListener('click', () => {
                    showPopUp(note)
                })

                return noteBlock;
            });

        container.append(...blocks);
    }

    render();
})();


