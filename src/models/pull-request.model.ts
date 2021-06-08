import Commit from './commit.model';

export default class PullRequest {
    id: number;
    title: string;
    githubId: string;
    url: string;
    number: string;
    action: string;
    commits: Commit[];

    constructor(id: number, title: string, githubId: string, url: string, number: string, action: string, commits: Commit[]) {
        this.id = id;
        this.title = title;
        this.githubId = githubId;
        this.url = url;
        this.number = number;
        this.action = action;
        this.commits = commits;
    }
}