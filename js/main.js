const elsTabItem = document.querySelectorAll('.tabs__item');
const elsTabPanel = document.querySelectorAll('.tabs__panel');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabOpener = document.querySelectorAll('.js-question-button');
const elsParagraf = document.querySelectorAll('.js-question-paragraf');

function detactivateTabItems () {
    elsTabItem.forEach( function (elTabItem) {
        elTabItem.classList.remove('tabs__item--active')
    });
};

function detactivateTabPanels () {
    elsTabPanel.forEach( function (elTabPanel) {
        elTabPanel.classList.remove('tabpanels__item--active');
    });
};

elsTabLink.forEach( (elTabLink) =>{
    elTabLink.addEventListener( 'click', function(evt) {
        evt.preventDefault();
        
        detactivateTabItems();

        elTabLink.parentElement.classList.add('tabs__item--active');

        detactivateTabPanels();

        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`)
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget)

        elTargetPanel.classList.add('tabpanels__item--active')

    });
});

elsTabOpener.forEach( (elTabOpener) => {
    elTabOpener.addEventListener('click', function() {
        const elOpenerPanel = document.querySelector(elTabOpener.dataset.tabTarget);
        elOpenerPanel.classList.toggle('question__paragraf--active');
    });
});