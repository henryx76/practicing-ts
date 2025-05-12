abstract class person {
    protected abstract score: number

    constructor(
        protected name: string
    ){}



    public setScore(score: number): void {
        if (score < 0 || score > 900) {
            throw new Error('score invalid')
        }


    }
    public abstract calcStore(): number;
    }


class Student extends person {
    protected score: number;
    constructor(name: string, score: number){
        super(name)
        this.score = score
    }
    public calcStore(): number {
        return 800;
    }

}

class techer extends person{
    protected score: number;
     constructor(name: string, score: number){
        super(name)
        this.score = score
    }
    public calcStore(): number {
        return 700;
    }

}

const student1 = new Student('jonas', 700)