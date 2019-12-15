'use strict';

import { DynamicParameter } from "../../../Framework/DataType/DynamicParameter";
import { IDynamicParameter } from "../../../Framework/DataType/IDynamicParameter";

export class CombatComponent
{
    private readonly _life: DynamicParameter;
    get Life(): IDynamicParameter
    {
        return this._life;
    }

    private readonly _stamina: DynamicParameter;
    get Stamina(): IDynamicParameter
    {
        return this._stamina;
    }

    public readonly AttackPower: number;
    public readonly DefencePower: number;
    public readonly Speed: number;

    private _isDead: boolean;
    get IsDead(): boolean
    {
        return this._isDead;
    }

    constructor(maxLife: number, maxStamina: number, attackPower: number, defencePower: number, speed: number)
    {
        this._life = new DynamicParameter(maxLife);
        this._stamina = new DynamicParameter(maxStamina);
        
        this.AttackPower = attackPower;
        this.DefencePower = defencePower;
        this.Speed = speed;

        this._isDead = false;
    }

    public ApplyDamage(amount: number)
    {
        this._life.Decrease(amount);
        
        if(this._life.Current === 0)
        {
            this._isDead = true;
        }
    }
}