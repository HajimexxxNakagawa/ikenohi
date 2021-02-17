export type onClickFunc =
  | ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void)
  | undefined

// Menu
export interface MenuProps {
  onToggleMenu: onClickFunc
}
