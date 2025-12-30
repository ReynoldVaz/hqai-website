export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
