'use strict';

import AssertException from './AssertException';
import { ActionDelegate as Action } from '../Delegate';

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

    public static ThrowException(action: Action, msg: string)
    {
        try 
        {
            action(null);
            throw new AssertException("지정한 Action에서 예외가 발생하지 않습니다.");
        }
        catch (error)
        {
            if(!error.hasOwnProperty("msg"))
            {
                throw new AssertException("발생한 예외는 ${msg}를 출력하지 않습니다. : ${error}");
            }
            else if(error.msg !== msg){
                throw new AssertException("발생한 예외 메시지는 예상 메시지 ${msg}와 다릅니다. : ${error.msg}");
            }
        }
    }
}