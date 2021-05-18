export class Tools {

    constructor(title?: string, link?: string, description?: string, tags?: string[]) {
        this.title = title ? title : ''
        this.link = link ? link : ''
        this.description = description ? description : ''
        this.tags = tags ? tags : []
    }

    id!: number;

    title!: string;

    link!: string;

    description!: string;

    tags!: string[];
}
