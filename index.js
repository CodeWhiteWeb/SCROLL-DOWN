const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
document.querySelector(".print").addEventListener("click", () => {
  window.print()
})

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        injectNeck(entry)
      }
    })
  },
  { rootMargin: "0px 0px 200% 0px" }
)

function injectNeck(entry) {
  // Stops observing the old neck element
  observer.unobserve(entry.target)

  const clonedNeck = neck.cloneNode(true)
  wrapper.appendChild(clonedNeck)
  observer.observe(clonedNeck)

}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}



observer.observe(neck)
