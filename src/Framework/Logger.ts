

export class Logger
{
    public static Log(msg: string)
    {
        var timeStamp = Date.now;

        console.log("[${timeStamp}] LOG : ${msg}");
    }

    public static Warning(msg: string)
    {
        var timeStamp = Date.now;

        console.warn("[${timeStamp}] WARNING : ${msg}");  
    }

    public static Error(msg: string)
    {
        var timeStamp = Date.now;

        console.error("[${timeStamp} ERROR : ${msg}]");
    }
}