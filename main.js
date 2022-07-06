const html = document.documentElement;
const canvas = document.querySelector(".kulglasskopning");
const context = canvas.getContext("2d");

const currentFrame = index => (
    ("Glasskopning/img" + index.toString().padStart(4, "0") + ".jpg")
)

const frameCount = 151;
canvas.width = 640;
canvas.height = 360;

const img = new Image();
img.src = currentFrame(1);
img.onload = function() {
    context.drawImage(img, 0, 0)
}
const updateImage = index => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0)
}
window.addEventListener("scroll", () => {
    const scrollTop = -document.querySelector('.kulglasskopning').getBoundingClientRect().bottom + (window.innerHeight*.95)
    const maxScroll = window.innerHeight*.5
    const scrollFraction = (scrollTop / maxScroll)
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))
    requestAnimationFrame( () => updateImage(frameIndex + 1))
})