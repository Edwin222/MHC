import { List } from "src/Framework/DataType/List";
import { Assert } from "../Assert";

export class Stack<T>
{
    private _stack: List<T>;

    get Count()
    {
        return this._stack.Count;
    }

    constructor()
    {
        this._stack = new List<T>();
    }

    public IsEmpty(): boolean
    {
        return this._stack.Count === 0;
    }

    public Push(item: T)
    {
        this._stack.Add(item);
    }

    public Pop(): T
    {
        Assert.IsFalse(this.IsEmpty(), "빈 스택에서 꺼내려 했습니다.");

        var popped = this._stack.GetLast();

        this._stack.RemoveLast();
        return popped;
    }
}
