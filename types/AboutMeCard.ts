export type AboutMeCard = {
  id: number,
  isCurrent?: boolean,
  title: string,
  href: string,
  description: string,
  workplace: string,
  yearsActive: string,
  isTools?: boolean,
  tools?: Array<string>,
}