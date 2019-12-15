import { List } from "src/Framework/DataType/List";
import { Assert } from "src/Framework/Assert";

export class Queue<T>
{
    private _queue: List<T>;

    get Count()
    {
        return this._queue.Count;
    }

    constructor()
    {
        this._queue = new List<T>();
    }

    public IsEmpty(): boolean
    {
        return this._queue.Count === 0;
    }

    public Enqueue(item: T)
    {
        this._queue.Add(item);
    }

    public Dequeue(): T
    {
        Assert.IsFalse(this.IsEmpty(), "큐가 비었습니다.");

        var dequeued = this._queue.GetFirst();

        this._queue.RemoveFirst();
        return dequeued;
    }
}