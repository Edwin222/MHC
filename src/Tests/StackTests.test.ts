'use strict';

import { Stack } from "src/Framework/DataType/Stack";

test("기본 동작 테스트", () =>
{
    var stack = new Stack<number>();
    
    expect(stack.Count).toEqual(0);
    expect(stack.IsEmpty()).toEqual(true);
    
    stack.Push(0);
    stack.Push(1);
    stack.Push(2);
    stack.Push(3);
    stack.Push(4);

    expect(stack.Count).toEqual(5);
    expect(stack.IsEmpty()).toEqual(false);

    expect(stack.Pop()).toEqual(4);
    expect(stack.Pop()).toEqual(3);
    expect(stack.Pop()).toEqual(2);

    expect(stack.Count).toEqual(2);
    expect(stack.IsEmpty()).toEqual(false);

    // 도중에 끼워넣고 다 비워보기
    stack.Push(-1);
    stack.Push(-2);
    stack.Push(-3);

    expect(stack.Pop()).toEqual(-3);
    expect(stack.Pop()).toEqual(-2);
    expect(stack.Pop()).toEqual(-1);
    expect(stack.Pop()).toEqual(1);
    expect(stack.Pop()).toEqual(0);

    expect(stack.Count).toEqual(0);
    expect(stack.IsEmpty()).toEqual(true);

    expect(stack.Pop.bind(stack)).toThrowError(Error("빈 스택에서 꺼내려 했습니다."));
});