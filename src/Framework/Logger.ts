

export class Logger
{
    public static Log(msg: string)
    {
        var timeStamp = Date.now;

        console.log("${timeStamp} : ${msg}");
    }
}