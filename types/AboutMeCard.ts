export type AboutMeCard = {
  id: number,
  title: string,
  description: string,
  workplace: string,
  yearsActive: string,
  isTools?: boolean,
  tools?: Array<string>,
}