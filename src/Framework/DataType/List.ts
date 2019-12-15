import { Assert } from "src/Framework/Assert";
import { Logger } from "../Logger";

export class List<T>
{
    private _head: ListItem<T>;
    private _tail: ListItem<T>;

    private _count: number;
    get Count()
    {
        return this._count;
    }

    constructor()
    {
        this._head = null;
        this._tail = null;

        this._count = 0;
    }

    public Add(item: T)
    {
        var element = new ListItem<T>(item);

        if(this._count === 0)
        {
            Assert.IsNull(this._head, "List의 Head가 null이 아닌데 Count가 0입니다.");
            Assert.IsNull(this._tail, "List의 Tail이 null이 아닌데 Count가 0입니다.");

            this._head = element;
            this._tail = element;
        }
        else {
            Assert.IsNotNull(this._head, "List의 Count가 0이 아닌데 Head가 null입니다.");
            Assert.IsNotNull(this._tail, "List의 Count가 0이 아닌데 Tail이 null입니다.");

            this._tail.Next = element;
            element.Prev = this._tail;

            this._tail = this._tail.Next;
        }

        this._count++;
    }

    public Remove(item: T)
    {
        Assert.IsTrue(this.Count > 0, "비어있는 리스트에서 원소를 지우려 했습니다.");
        
        var cursor = this._head;

        while(cursor !== null)
        {
            if(cursor.Content === item)
            {
                cursor.Next.Prev = cursor;
                cursor.Prev.Next = cursor.Next;

                cursor.Next = null;
                cursor.Prev = null;

                this._count--;
                return;
            }

            cursor = cursor.Next;
        }

        Logger.Warning("리스트로부터 지우려는 원소를 찾지 못해서 지우지 못했습니다.");
    }

    public Get(index: number): T
    {
        Assert.IsTrue(index < this.Count, "찾으려는 index가 리스트의 요소 숫자보다 많습니다.");

        var cursor = this._head;
        
        for(var i = 0; i < index; i++)
        {
            cursor = cursor.Next;
        }

        return cursor.Content;
    }

    public IndexOf(item: T): number
    {
        var cursor = this._head;

        var currentIndex = 0;

        while(cursor !== null)
        {
            if(cursor.Content === item)
            {
                return currentIndex;
            }

            cursor = cursor.Next;
            currentIndex++;
        }

        return null;
    }
}

class ListItem<T>
{
    private _content: T;
    get Content(): T
    {
        return this._content;
    }

    public Prev: ListItem<T>;
    public Next: ListItem<T>;

    constructor(content: T)
    {
        this._content = content;
        this.Prev = null;
        this.Next = null;
    }
}