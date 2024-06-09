const tagsContainer = document.getElementById("tags");
const inputTextarea = document.getElementById("textarea");

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsContainer.innerHTML = "";
  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsContainer.appendChild(tagElement);
  });
};

const getRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => tag.classList.add("highlight");

const unHighlightTag = (tag) => tag.classList.remove("highlight");

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = getRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = getRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

inputTextarea.focus();
inputTextarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => (e.target.value = ""), 10);
    randomSelect();
  }
});
