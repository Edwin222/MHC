'use strict';

import { AssertException } from './AssertException';

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

    public static IsEqual<T>(value: T, expected: T, msg: string = "Assert.IsEqual에서 실제 값 ${value}이 예측한 값 ${expected}과 다릅니다.")
    {
        if(value != expected)
        {
            throw Error(msg);
        }
    }
}