let infoContainers;
let likeCounterContainer;

function addClickLikeEvent() {
    infoContainers = document.querySelectorAll('.info-container');

    infoContainers.forEach(function(likeContainer) {
        const singleMedialikeIconContainer = likeContainer.querySelector('.like-button-container')
        const singleMediaLikesContainer = likeContainer.querySelector('.single-media-likes')

        singleMedialikeIconContainer.addEventListener('click', function() {
            onClickLikeIcon(singleMedialikeIconContainer, singleMediaLikesContainer)
        }); 
    })
}

function updateSingleLike(singleMediaLikesContainer, valueToAdd) {
    const newValue = parseInt(singleMediaLikesContainer.innerText) + valueToAdd;
    singleMediaLikesContainer.innerText = newValue.toString();

}

function updateTotalLikesCounter(value) {
    likeCounterContainer = document.querySelector('.total-likes');

    const newTotalLikes = parseInt(likeCounterContainer.innerText) + value;

    likeCounterContainer.innerText = newTotalLikes.toString();
}

function onClickLikeIcon(likeIconContainer, singleMediaLikesContainer) {
    const emptyHeart = likeIconContainer.querySelector('.fa-regular');
    const solidHeart = likeIconContainer.querySelector('.fa-solid');

    if (likeIconContainer.classList.contains('active')) {
        //Change heart icon
        likeIconContainer.classList.toggle('active')
        emptyHeart.style.display = 'initial';
        solidHeart.style.display = 'none';

        //Add individual like
        updateSingleLike(singleMediaLikesContainer, -1)

        //Update total likes
        updateTotalLikesCounter(-1);
    } else {
        //Change heart icon
        likeIconContainer.classList.toggle('active')
        emptyHeart.style.display = 'none';
        solidHeart.style.display = 'initial';

        //Add individual like
        updateSingleLike(singleMediaLikesContainer, 1)

        //Update total likes
        updateTotalLikesCounter(1);
    }
}

export function enableLikesCounter() {
    addClickLikeEvent();
}

window.addEventListener('load', () => {
    setTimeout(enableLikesCounter ,100);
});

