
export default class AssertException extends Error
{
    constructor(msg: string)
    {
        super(msg);
    }
}