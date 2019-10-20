"use strict";

export interface ActionDelegate
{
    (param: any): void;
}

export interface FunctionDelegate<T1>
{
    (param: any): T1;
}