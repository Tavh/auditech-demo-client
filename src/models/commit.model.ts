export default class Commit {
    id: number;
    message: string;

    constructor(id: number, message: string) {
        this.id = id;
        this.message = message;
    }
}