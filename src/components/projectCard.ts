type ProjectCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
};

export function ProjectCard({
  title,
  description,
  imgSrc,
  link,
}: ProjectCardProps): HTMLElement {
  const card = document.createElement("div");

  card.className = `p-3 bg-amber-100 m-2 
  shadow-[6px_6px_0_0_rgba(0,0,0,0.8)] flex 
  flex-col justify-between min-h-55  transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[10px_10px_0_0_rgba(0,0,0,0.9)]`;

  card.innerHTML = `
                <div>
                <h1 class="text-2xl">${title}</h1>
                <img src=${imgSrc} alt="" />
                <p>
                  ${description}
                </p>
              </div>
    <a
      href="${link}"
      target="_blank"
      class="
        mt-4 inline-block self-start
        bg-amber-950 text-amber-100
        px-5 py-1
        transition-colors duration-300
        hover:bg-amber-700
      "
    >
      Detail
    </a>
  `;

  return card;
}
