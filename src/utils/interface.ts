export type onClickFunc = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => void

// Menu
export interface MenuProps {
  onToggleMenu: onClickFunc
}
