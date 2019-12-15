'use strict';

export class Assert 
{
    public static IsTrue(value: boolean, msg: string = "Assert.IsTrue가 예측한 값과 다릅니다.")
    { 
        if(!value)
        {
            throw Error(msg);
        }
    }

    public static IsFalse(value: boolean, msg: string = "Assert.IsFalse가 예측한 값과 다릅니다.")
    {
        if(value)
        {
            throw Error(msg);   
        }
    }

    public static Equal<T>(value: T, expected: T, msg: string = "Assert.Equal에서 실제 값 " + value + "이 예측한 값 " + expected + "과 다릅니다.")
    {
        if(value !== expected)
        {
            throw Error(msg);
        }
    }

    public static NotEqual<T>(value: T, expected: T, msg: string = "Assert.NotEqual에서 실제 값 " + value + "이 예측한 값 " + expected + "과 같습니다.")
    {
        if(value === expected)
        {
            throw Error(msg);
        }
    }

    public static IsNull<T>(value: T, msg: string = "Null이어야 하는데 Null이 아닙니다.")
    {
        if(value !== null)
        {
            throw Error(msg);
        }
    }

    public static IsNotNull<T>(value: T, msg: string = "Null이 아니어야 하는데 Null입니다.")
    {
        if(value === null)
        {
            throw Error(msg);
        }
    }
}