'use strict';

import { Queue } from "src/Framework/DataType/Queue";

test("기본 동작 테스트", () =>
{
    var queue = new Queue<number>();

    expect(queue.Count).toEqual(0);
    expect(queue.IsEmpty()).toEqual(true);

    queue.Enqueue(0);
    queue.Enqueue(1);
    queue.Enqueue(2);
    queue.Enqueue(3);
    queue.Enqueue(4);

    expect(queue.Dequeue()).toEqual(0);
    expect(queue.Dequeue()).toEqual(1);
    expect(queue.Dequeue()).toEqual(2);

    expect(queue.Count).toEqual(2);
    expect(queue.IsEmpty()).toEqual(false);

    // 중간에 더 넣고 마저 다 빼보기
    queue.Enqueue(-1);
    queue.Enqueue(-2);
    queue.Enqueue(-3);

    expect(queue.Dequeue()).toEqual(3);
    expect(queue.Dequeue()).toEqual(4);
    expect(queue.Dequeue()).toEqual(-1);
    expect(queue.Dequeue()).toEqual(-2);
    expect(queue.Dequeue()).toEqual(-3);
    
    expect(queue.Count).toEqual(0);
    expect(queue.IsEmpty()).toEqual(true);

    expect(queue.Dequeue.bind(queue)).toThrowError(Error("큐가 비었습니다."));
});