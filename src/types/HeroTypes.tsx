export interface IHero {
    title: string
    subtitle: string
    description: string
}
export type THeroData = {

    edges: Array<{
        node: {
            id: string,
            frontmatter: IHero
        }
    }>


}