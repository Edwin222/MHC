"use strict";

import { Assert } from "../Assertion/Assert";
import { MathHelper } from "../MathHelper";

// 증감 가능한 파라미터를 나타냅니다. 최댓값이 변하면 현재값도 비례해서 변합니다.
export class DynamicParameter
{
    private _max: number;
    get Max(): number
    {
        return this._max;
    }

    private _current: number;
    get Current(): number
    {
        return this._current;
    }

    constructor(max: number)
    {
        this._max = max;
        this._current = max;
    }

    public Increase(amount: number)
    {
        Assert.IsTrue(amount >= 0, "파라미터 증가량은 음수가 될 수 없습니다.");

        this._current = MathHelper.Min(this._current + amount, this._max);
    }

    public Decrease(amount: number)
    {
        Assert.IsTrue(amount >= 0, "파라미터 감소량은 음수가 될 수 없습니다.");

        this._current = MathHelper.Max(this._current - amount, 0);
    }

    public IncreaseMax(amount: number)
    {
        Assert.IsTrue(amount >= 0, "파라미터 최댓값 증가량은 음수가 될 수 없습니다.");

        let prevMax = this._max;
        this._max += amount;

        this._current = MathHelper.Min(this._max, this._current * (this._max / prevMax));
    }

    public DecreaseMax(amount: number)
    {
        Assert.IsTrue(amount >= 0, "파라미터 최댓값 감소량은 음수가 될 수 없습니다.");

        let prevMax = this._max;
        this._max -= amount;
        
        this._current = MathHelper.Max(0, this._current * (this._max / prevMax));
    }
}