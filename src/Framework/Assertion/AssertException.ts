
export class AssertException extends Error
{
    constructor(msg: string)
    {
        super(msg);
    }

    public ToString(): string
    {
        return super.message;
    }
}