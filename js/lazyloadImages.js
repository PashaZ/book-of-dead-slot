let images = [...document.getElementsByClassName('lazy-image')];
let cssImageBlocks = [...document.getElementsByClassName('css-lazy-image')];
let pictures = [...document.querySelectorAll('.lazy-picture')];
const observerDefaultOptions = {root: null, rootMargin: '0px 0px 0px 0px'};

const onBlockIntersection = function (imageEntities) {
    imageEntities.forEach(image => {
        if (image.isIntersecting) {
            htmlBlockObserver.unobserve(image.target);
            image.target.src = image.target.dataset.src
        }
    });
}

const onCssImageBlockIntersection = function (imageEntities) {
    imageEntities.forEach(function(image) {
        if (image.isIntersecting) {
            image.target.classList.add("visible");
            cssBlocksObserver.unobserve(image.target);
        }
    });
}

const onPictureIntersection = function (imageEntities) {
    imageEntities.forEach(function(image) {
        if (image.isIntersecting) {
            let picture = image.target;
            pictureObserver.unobserve(picture);
            for (let children of picture.children) {
                if (children.tagName === "SOURCE") {
                    children.srcset = children.dataset.srcset;
                }
            }
        }
    });
}

let htmlBlockObserver = new IntersectionObserver(onBlockIntersection, observerDefaultOptions);

let cssBlocksObserver = new IntersectionObserver(onCssImageBlockIntersection, observerDefaultOptions);

let pictureObserver = new IntersectionObserver(onPictureIntersection, observerDefaultOptions);


images.forEach(image => htmlBlockObserver.observe(image));
cssImageBlocks.forEach(block => cssBlocksObserver.observe(block));
pictures.forEach(picture => pictureObserver.observe(picture));
