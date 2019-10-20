'use strict';

import AssertException from './AssertException';

export default class Assert 
{
    public static IsTrue(value: boolean)
    {
        if(!value)
        {
            throw new AssertException("Assert.IsTrue가 예측한 값과 다릅니다.");
        }
    }

    public static IsFalse(value: boolean)
    {
        if(value)
        {
            throw new AssertException("Assert.IsFalse가 예측한 값과 다릅니다.");   
        }
    }

    public static IsEqual<T>(value: T, expected: T)
    {
        if(value != expected)
        {
            throw new AssertException("Assert.IsEqual에서 실제 값 ${value}이 예측한 값 ${expected}과 다릅니다.");
        }
    }

    public static MustThrow<T>(action: function())
    {

    }
}