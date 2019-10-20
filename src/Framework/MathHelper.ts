"use strict";

export default class MathHelper
{
    public static Max(value1: number, value2: number): number
    {
        if(value1 >= value2)
        {
            return value1;
        }

        return value2;
    }

    public static Min(value1: number, value2: number): number
    {
        if(value1 <= value2)
        {
            return value1;
        }
        
        return value2;
    }

    public static Clamp(value: number, min: number, max: number): number
    {
        return this.Min(this.Max(value, min), max);
    }
}