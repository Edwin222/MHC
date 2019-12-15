'use strict';

import { List } from "src/Framework/DataType/List";

test("기본 동작 테스트", () => 
{
    var list = new List<number>();

    expect(list.Count).toEqual(0);
    
    list.Add(1);
    list.Add(2);
    list.Add(3);
    list.Add(4);
    list.Add(5);

    // Add 테스트
    expect(list.Count).toEqual(5);
    expect(list.Get(0)).toEqual(1);
    expect(list.Get(1)).toEqual(2);
    expect(list.Get(2)).toEqual(3);
    expect(list.Get(3)).toEqual(4);
    expect(list.Get(4)).toEqual(5);

    // 머리 삭제
    list.Remove(1);
    expect(list.Count).toEqual(4);
    expect(list.Get(0)).toEqual(2);
    expect(list.Get(1)).toEqual(3);
    expect(list.Get(2)).toEqual(4);
    expect(list.Get(3)).toEqual(5);

    // 꼬리 삭제
    list.Remove(5);
    expect(list.Get(0)).toEqual(2);
    expect(list.Get(1)).toEqual(3);
    expect(list.Get(2)).toEqual(4);
    
    // 중간 삭제
    list.Remove(3);
    expect(list.Get(0)).toEqual(2);
    expect(list.Get(1)).toEqual(4);
    
    // 다 삭제
    list.Remove(2);
    list.Remove(4);

    expect(list.Count).toEqual(0);

    // 다시 추가 후 테스트
    list.Add(1);
    list.Add(2);
    list.Add(3);
    list.Add(4);
    list.Add(5);

    expect(list.Count).toEqual(5);
    expect(list.Get(0)).toEqual(1);
    expect(list.Get(1)).toEqual(2);
    expect(list.Get(2)).toEqual(3);
    expect(list.Get(3)).toEqual(4);
    expect(list.Get(4)).toEqual(5);
});

class MockupReferenceClass
{
    public readonly Data1: number;
    public readonly Data2: number;

    constructor(data1: number, data2: number)
    {
        this.Data1 = data1;
        this.Data2 = data2;
    }
}

test("레퍼런스 타입 검색 테스트", () => 
{
    var list = new List<MockupReferenceClass>();

    expect(list.Count).toEqual(0);

    var listElement1 = new MockupReferenceClass(0, 1);
    var listElement2 = new MockupReferenceClass(0, 1);
    var listElement3 = new MockupReferenceClass(0, 1);

    list.Add(listElement1);
    list.Add(listElement2);
    list.Add(listElement3);

    expect(list.Count).toEqual(3);
    expect(list.Get(0)).toEqual(listElement1);
    expect(list.Get(1)).toEqual(listElement2);
    expect(list.Get(2)).toEqual(listElement3);

    expect(list.IndexOf(listElement1)).toEqual(0);
    expect(list.IndexOf(listElement2)).toEqual(1);
    expect(list.IndexOf(listElement3)).toEqual(2);

    list.Remove(listElement2);
    expect(list.Count).toEqual(2);
    
    expect(list.IndexOf(listElement1)).toEqual(0);
    expect(list.IndexOf(listElement3)).toEqual(1);
});

test("예외 처리 테스트", () => 
{
    var list = new List<number>();
    
    // 빈 상태에서 지울 수 없다.
    expect(list.Remove.bind(list, 2)).toThrowError(Error("비어있는 리스트에서 원소를 지우려 했습니다."));
    expect(list.RemoveFirst.bind(list)).toThrowError(Error("비어있는 리스트에서 원소를 지우려 했습니다."));
    expect(list.RemoveLast.bind(list)).toThrowError(Error("비어있는 리스트에서 원소를 지우려 했습니다."));

    // 빈 상태에서 GetFirst, Last는 불가하다.
    expect(list.GetFirst.bind(list)).toThrowError(Error("리스트가 비어있는데 GetFirst()를 시도했습니다."));
    expect(list.GetLast.bind(list)).toThrowError(Error("리스트가 비어있는데 GetLast()를 시도했습니다."));

    // 크기보다 큰 인덱스에 접근할 수 없다.
    list.Add(2);
    expect(list.Get.bind(list, 1)).toThrowError(Error("찾으려는 인덱스 1가 리스트의 요소 숫자 1보다 많습니다."));
});