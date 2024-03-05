export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly REACT = new Tag('React', 'blue');
    static readonly HTML = new Tag('HTML', 'skyblue');
    static readonly CSS = new Tag('CSS', 'magenta');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'Indigo');

    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }
}