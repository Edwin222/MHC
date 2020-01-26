using System;

namespace ExcelToJson.Framework
{
    public class LogicFail : Exception
    {
        public readonly string Reason;

        public LogicFail(string reason)
        {
            Reason = reason;
        }
    }
}
