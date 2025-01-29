export const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id?: string,
) => {
  e.preventDefault();
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
};
